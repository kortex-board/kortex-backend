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
import type { CreateListDto } from "./dto/create-list.dto";
import type { UpdateListDto } from "./dto/update-list.dto";
import { ListService } from "./list.service";

@ApiTags("List")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("list")
export class ListController {
	constructor(private readonly listService: ListService) {}

	@Post()
	create(@Body() createListDto: CreateListDto) {
		return this.listService.create(createListDto);
	}

	@Get("board/:boardId")
	findAll(@Param("boardId") boardId: string) {
		return this.listService.findAll(boardId);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.listService.findOne(id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateListDto: UpdateListDto) {
		return this.listService.update(id, updateListDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.listService.remove(id);
	}
}
