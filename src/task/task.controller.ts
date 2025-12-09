import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import type { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";
import { TaskService } from "./task.service";

@ApiTags("Task")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("task")
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto);
	}

	@Get("list/:listId")
	findAll(@Param("listId") listId: string) {
		return this.taskService.findAll(listId);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.taskService.findOne(id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto) {
		return this.taskService.update(id, updateTaskDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.taskService.remove(id);
	}
}
