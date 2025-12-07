import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import type { CreateBoardDto } from "./dto/create-board.dto";
import type { UpdateBoardDto } from "./dto/update-board.dto";

@Injectable()
export class BoardService {
	constructor(private readonly prisma: PrismaService) {}

	create(createBoardDto: CreateBoardDto, ownerId: string) {
		return this.prisma.board.create({
			data: {
				...createBoardDto,
				owner: {
					connect: {
						id: ownerId,
					},
				},
			},
		});
	}

	findAll(ownerId: string) {
		return this.prisma.board.findMany({
			where: { ownerId },
		});
	}

	findOne(id: string, ownerId: string) {
		return this.prisma.board.findFirst({ where: { id, ownerId } });
	}

	async update(id: string, updateBoardDto: UpdateBoardDto, ownerId: string) {
		const board = await this.prisma.board.findUnique({ where: { id } });
		if (board?.ownerId !== ownerId) {
			throw new UnauthorizedException();
		}
		return this.prisma.board.update({
			where: { id },
			data: updateBoardDto,
		});
	}

	async remove(id: string, ownerId: string) {
		const board = await this.prisma.board.findUnique({ where: { id } });
		if (board?.ownerId !== ownerId) {
			throw new UnauthorizedException();
		}
		return this.prisma.board.delete({ where: { id } });
	}
}
