import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { User } from "generated/prisma/client";
import { UserService } from "src/user/user.service";

export type UserPayload = Omit<User, "password">;

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async validateUser(email: string, pass: string): Promise<UserPayload | null> {
		const user = await this.userService.findByEmail(email);
		if (user && (await bcrypt.compare(pass, user.password))) {
			const { ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: UserPayload) {
		const payload = { username: user.email, sub: user.id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
