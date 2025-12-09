import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "src/types/jwt-payload.d";
import { UserFromJwt } from "src/types/user-from-jwt.d";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.getOrThrow<string>("JWT_SECRET"),
		});
	}

	async validate(payload: JwtPayload): Promise<UserFromJwt> {
		return {
			userId: payload.sub,
			username: payload.username,
			name: payload.name,
		};
	}
}
