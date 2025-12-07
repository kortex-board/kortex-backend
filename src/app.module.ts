import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { AuthModule } from "./auth/auth.module";
import { BoardModule } from "./board/board.module";
import { DatabaseModule } from "./database/database.module";
import { ListModule } from "./list/list.module";
import { TaskModule } from "./task/task.module";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				JWT_SECRET: Joi.string().required(),
				JWT_EXPIRATION_TIME: Joi.number().required(),
				DATABASE_URL: Joi.string().required(),
				FRONTEND_URL: Joi.string().required(),
			}),
		}),
		AuthModule,
		UserModule,
		DatabaseModule,
		BoardModule,
		ListModule,
		TaskModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
