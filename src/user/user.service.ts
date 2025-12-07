import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/database/prisma.service";
import type { CreateUserDto } from "./dto/create-user.dto";
import type { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createUserDto: CreateUserDto) {
		const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
		return this.prisma.user.create({
			data: {
				...createUserDto,
				password: hashedPassword,
			},
		});
	}

	findAll() {
		return this.prisma.user.findMany();
	}

	findOne(id: string) {
		return this.prisma.user.findUnique({ where: { id } });
	}

	findByEmail(email: string) {
		return this.prisma.user.findUnique({ where: { email } });
	}

	update(id: string, updateUserDto: UpdateUserDto) {
		return this.prisma.user.update({
			where: { id },
			data: updateUserDto,
		});
	}

	remove(id: string) {
		return this.prisma.user.delete({ where: { id } });
	}
}
