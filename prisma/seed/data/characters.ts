import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const insertCharacters = async () => {
	const date = new Date();
	await prisma.characters.createMany({
		data: [
			{
				id: 1,
				name: 'ねこ',
				image_path: 'CatVerNormal',
				image_description:
					'「内向的感情タイプ」に該当。自分特有の「わたしは」という。感情を持つ。故に、周囲と感情を共有するのが苦手。感情を積極的に表明しない。外見上は控え目。',
				type: 0,
				created_at: date,
				updated_at: date,
			},
			{
				id: 2,
				name: 'ねこ',
				image_path: 'CatVerGhost',
				image_description:
					'「内向的感情タイプ」に該当。自分特有の「わたしは」という。感情を持つ。故に、周囲と感情を共有するのが苦手。感情を積極的に表明しない。外見上は控え目。',
				type: 1,
				created_at: date,
				updated_at: date,
			},
			{
				id: 3,
				name: 'いぬ',
				image_path: 'DogVerNormal',
				image_description:
					'「外交的感情タイプ」に該当。感情を表明したり、共有したりするのが得意（基本的に）どこででも自然な態度でいられる。感情に素直ギクシャクしたところがない。',
				type: 0,
				created_at: date,
				updated_at: date,
			},
			{
				id: 4,
				name: 'いぬ',
				image_path: 'DogVerGhost',
				image_description:
					'「外交的感情タイプ」に該当。感情を表明したり、共有したりするのが得意（基本的に）どこででも自然な態度でいられる。感情に素直ギクシャクしたところがない。',
				type: 1,
				created_at: date,
				updated_at: date,
			},
			{
				id: 5,
				name: 'たぬき',
				image_path: 'TanukiVerNormal',
				image_description:
					'「外交的」穏やかかつ、礼儀正しい言動が最大の魅力。反面、鋼のように強靭なハートを持っていて、どんな困難にも負けない人でもあります。礼儀正しく穏やかで、思いやりのある人なので、上司からも部下からも愛顧される。',
				type: 0,
				created_at: date,
				updated_at: date,
			},
			{
				id: 6,
				name: 'たぬき',
				image_path: 'TanukiVerGhost',
				image_description:
					'「外交的」穏やかかつ、礼儀正しい言動が最大の魅力。反面、鋼のように強靭なハートを持っていて、どんな困難にも負けない人でもあります。礼儀正しく穏やかで、思いやりのある人なので、上司からも部下からも愛顧される。',
				type: 1,
				created_at: date,
				updated_at: date,
			},
			{
				id: 7,
				name: 'きつね',
				image_path: 'KitsuneVerNormal',
				image_description:
					'「外交的」頭の回転が早く機転の効く性格ですが、気まぐれで奔放なところがあります。一応人付き合いはするものの、基本的には単独行動を好みます。周囲にとってもポジティブな影響を与える力のある人なのですが、悪い影響も広めてしまうようなカリスマ性を持っている。',
				type: 0,
				created_at: date,
				updated_at: date,
			},
			{
				id: 8,
				name: 'きつね',
				image_path: 'KitsuneVerGhost',
				image_description:
					'「外交的」頭の回転が早く機転の効く性格ですが、気まぐれで奔放なところがあります。一応人付き合いはするものの、基本的には単独行動を好みます。周囲にとってもポジティブな影響を与える力のある人なのですが、悪い影響も広めてしまうようなカリスマ性を持っている。',
				type: 1,
				created_at: date,
				updated_at: date,
			},
			{
				id: 9,
				name: 'Mii',
				image_path: 'MiiVerNormal',
				image_description: 'test',
				type: 0,
				created_at: date,
				updated_at: date,
			},
			{
				id: 10,
				name: 'Mii',
				image_path: 'MiiVerGhost',
				image_description: 'test',
				type: 1,
				created_at: date,
				updated_at: date,
			},
		],
	});
};
