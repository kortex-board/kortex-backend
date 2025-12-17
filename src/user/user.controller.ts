import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Req,
	UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import type { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiBearerAuth()
@ApiTags("User")
@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get("me")
	getMe(@Req() req: Request) {
		if (!req.user) {
			return null;
		}
		return { id: req.user.userId, name: req.user.name };
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.userService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.userService.remove(id);
	}
}
