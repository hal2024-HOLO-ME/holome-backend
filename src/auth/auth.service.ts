import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordOmitUsers } from './types/passwordOmitUsers';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private readonly prismaService: PrismaService) {}

	async getHello(): Promise<string> {
		return 'Hello World!';
	}

	async getUser(email: string): Promise<Users> {
		return await this.prismaService.users.findUnique({
			where: {
				email,
			},
		});
	}

	async verifyPassword(
		plainTextPassword: string,
		hashedPassword: string,
	): Promise<boolean> {
		const isPasswordMatching = await bcrypt.compare(
			plainTextPassword,
			hashedPassword,
		);
		return isPasswordMatching;
	}

	async validateUser(
		email: string,
		password: string,
	): Promise<PasswordOmitUsers | null> {
		const user = await this.getUser(email);

		if (user && (await this.verifyPassword(password, user.password))) {
			const { password: _password, ...result } = user;
			return result;
		}
		return null;
	}

	async signIn(user: PasswordOmitUsers): Promise<string> {
		//

		return 'access_token';
	}
}
