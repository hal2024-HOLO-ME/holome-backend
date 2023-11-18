import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export class SignUpInput {
	@IsEmail(
		{},
		{
			message: 'メールアドレスの形式が正しくありません',
		},
	)
	@IsNotEmpty({
		message: 'メールアドレスを入力してください',
	})
	email: string;

	@IsString()
	@MinLength(8, {
		message: '8文字以上である必要があります。',
	})
	@MaxLength(32, {
		message: '32文字以下である必要があります。',
	})
	@IsNotEmpty({
		message: 'パスワードを入力してください',
	})
	password: string;
}
