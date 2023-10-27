import { PrismaClient } from '@prisma/client';
import { insertUsers } from './data/users';
import { insertCharacters } from './data/characters';
import { insertCharactersUsers } from './data/characters_users';

const prisma = new PrismaClient();

async function main() {
	await prisma.users.deleteMany();
	await prisma.characters.deleteMany();
	await prisma.charactersUsers.deleteMany();

	await insertUsers();
	await insertCharacters();
	await insertCharactersUsers();
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
