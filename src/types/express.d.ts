import { UserFromJwt } from "./user-from-jwt.d";

declare namespace Express {
	export interface Request {
		user?: UserFromJwt;
	}
}
