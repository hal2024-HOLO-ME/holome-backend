import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const insertCharacters = async () => {
	const date = new Date();
	await prisma.characters.createMany({
		data: [
			{
				id: 1,
				name: 'おばけテスト',
				model_path:
					'https://holome.blob.core.windows.net/fbx-object/obake5.fbx',
				created_at: date,
				updated_at: date,
			},
		],
	});
};
