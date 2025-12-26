import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const gamesTable = sqliteTable("games", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  status: text("status", { enum: ["active", "complete"]}).notNull(),
  startedAt: integer("started_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  completedAt: integer("completed_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const playersTable = sqliteTable("players", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  gameId: integer("game_id").references(() => gamesTable.id),
  userId: integer("user_id").references(() => usersTable.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const roundsTable = sqliteTable("rounds", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  gameId: integer("game_id").references(() => gamesTable.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const roundScoresTable = sqliteTable("round_scores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  roundId: integer("round_id").references(() => roundsTable.id),
  playerId: integer("player_id").references(() => playersTable.id),
  score: integer("score", { mode: "boolean"}).notNull(),
  phaseCompleted: integer("phase_completed").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type InsertGame = typeof gamesTable.$inferInsert;
export type InsertPlayer = typeof playersTable.$inferInsert;
export type InsertRound = typeof roundsTable.$inferInsert;
export type InsertRoundScore = typeof roundScoresTable.$inferInsert;

export type SelectUser = typeof usersTable.$inferSelect;
export type SelectGame = typeof gamesTable.$inferSelect;
export type SelectPlayer = typeof playersTable.$inferSelect;
export type SelectRound = typeof roundsTable.$inferSelect;
export type SelectRoundScore = typeof roundScoresTable.$inferSelect;