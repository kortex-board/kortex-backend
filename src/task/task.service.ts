import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import type { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
	constructor(private readonly prisma: PrismaService) {}

	create(createTaskDto: CreateTaskDto) {
		return this.prisma.task.create({
			data: createTaskDto,
		});
	}

	findAll(listId: string) {
		return this.prisma.task.findMany({
			where: { listId },
		});
	}

	findOne(id: string) {
		return this.prisma.task.findUnique({
			where: { id },
		});
	}

	update(id: string, updateTaskDto: UpdateTaskDto) {
		return this.prisma.task.update({
			where: { id },
			data: updateTaskDto,
		});
	}

	remove(id: string) {
		return this.prisma.task.delete({
			where: { id },
		});
	}
}
