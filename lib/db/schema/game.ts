import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const game = sqliteTable("game", {
  id: int().primaryKey({ autoIncrement: true }),
  status: text({ enum: ["active", "complete"] }).notNull(),
  startedAt: int().notNull(),
  completedAt: int(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
