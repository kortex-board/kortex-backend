import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import type { CreateListDto } from "./dto/create-list.dto";
import type { UpdateListDto } from "./dto/update-list.dto";

@Injectable()
export class ListService {
	constructor(private readonly prisma: PrismaService) {}

	create(createListDto: CreateListDto) {
		return this.prisma.list.create({
			data: createListDto,
			include: {
				tasks: true,
			},
		});
	}

	findAll(boardId: string) {
		return this.prisma.list.findMany({
			where: { boardId },
			include: {
				tasks: {
					orderBy: {
						createdAt: "asc",
					},
				},
			},
		});
	}

	findOne(id: string) {
		return this.prisma.list.findUnique({
			where: { id },
		});
	}

	update(id: string, updateListDto: UpdateListDto) {
		return this.prisma.list.update({
			where: { id },
			data: updateListDto,
			include: {
				tasks: true,
			},
		});
	}

	remove(id: string) {
		return this.prisma.list.delete({
			where: { id },
		});
	}
}
