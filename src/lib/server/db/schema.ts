import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	lastname: text('lastname').notNull(),
	username: text('username').notNull().unique()
});

export type User = typeof usersTable.$inferSelect;
export type UserRequest = typeof usersTable.$inferInsert;
