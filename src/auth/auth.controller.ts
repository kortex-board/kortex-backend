import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import type { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly userService: UserService,
	) {}

	@UseGuards(LocalAuthGuard)
	@Post("login")
	@ApiBody({ type: LoginDto })
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post("register")
	async register(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}
}
