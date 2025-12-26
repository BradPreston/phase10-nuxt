import { int, sqliteTable } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { game } from "./game";

export const player = sqliteTable("player", {
  id: int().primaryKey({ autoIncrement: true }),
  gameId: int().references(() => game.id),
  userId: int().references(() => user.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
