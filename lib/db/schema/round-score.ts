import { int, sqliteTable } from "drizzle-orm/sqlite-core";

import { player } from "./player";
import { round } from "./round";

export const roundScore = sqliteTable("round_score", {
  id: int().primaryKey({ autoIncrement: true }),
  roundId: int().references(() => round.id),
  playerId: int().references(() => player.id),
  score: int().notNull(),
  phaseCompleted: int().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
