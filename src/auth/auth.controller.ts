import {
	Body,
	Controller,
	HttpException,
	HttpStatus,
	Post,
	HttpCode,
	Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@Get('signin')
	getHello(): Promise<string> {
		return this.authService.getHello();
	}

	/**
	 * サインイン
	 * @param {SignInInput} signInInput - ログイン情報
	 * @returns {Promise<{ access_token: string }>} - JWTトークン
	 */
	@HttpCode(200)
	@Post('signin')
	async signIn(
		@Body() signInInput: SignInInput,
	): Promise<{ access_token: string }> {
		const { email, password } = signInInput;

		// TODO: デバッグ用なので後で消す
		console.log(email, password);

		const user = await this.authService.validateUser(email, password);

		/**
		 * emailまたはpasswordが間違っている場合の処理
		 * @throws {paths["/api/v1/auth/signin"]["post"]["responses"]["401"]}
		 */
		if (!user) {
			throw new HttpException(
				{
					status: HttpStatus.UNAUTHORIZED,
					error: 'Unauthorized',
				},
				HttpStatus.UNAUTHORIZED,
			);
		}

		const accessToken = await this.authService.signIn(user);

		return {
			access_token: accessToken,
		};
	}
}
