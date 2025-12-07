import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Request,
	UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { BoardService } from "./board.service";
import type { CreateBoardDto } from "./dto/create-board.dto";
import type { UpdateBoardDto } from "./dto/update-board.dto";

@ApiBearerAuth()
@ApiTags("board")
@UseGuards(JwtAuthGuard)
@Controller("board")
export class BoardController {
	constructor(private readonly boardService: BoardService) {}

	@Post()
	create(@Body() createBoardDto: CreateBoardDto, @Request() req) {
		return this.boardService.create(createBoardDto, req.user.userId);
	}

	@Get()
	findAll(@Request() req) {
		return this.boardService.findAll(req.user.userId);
	}

	@Get(":id")
	findOne(@Param("id") id: string, @Request() req) {
		return this.boardService.findOne(id, req.user.userId);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateBoardDto: UpdateBoardDto,
		@Request() req,
	) {
		return this.boardService.update(id, updateBoardDto, req.user.userId);
	}

	@Delete(":id")
	remove(@Param("id") id: string, @Request() req) {
		return this.boardService.remove(id, req.user.userId);
	}
}
