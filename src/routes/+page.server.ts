import { db } from '$lib/server/db';
import { usersTable, type User, type UserRequest } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const users: User[] = await db.select().from(usersTable);

	return {
		users
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const user: UserRequest = {
			name: 'Que once',
			lastname: 'Mis perros',
			username: username
		};
		await db.insert(usersTable).values(user);
	}
};
