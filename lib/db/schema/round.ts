import { int, sqliteTable } from "drizzle-orm/sqlite-core";

import { game } from "./game";

export const round = sqliteTable("round", {
  id: int().primaryKey({ autoIncrement: true }),
  gameId: int().references(() => game.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
