import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const games = sqliteTable("games", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  status: text("status", { enum: ["active", "complete"]}).notNull(),
  startedAt: integer("started_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  completedAt: integer("completed_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const players = sqliteTable("players", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  gameId: integer("game_id").references(() => games.id),
  userId: integer("user_id").references(() => users.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const rounds = sqliteTable("rounds", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  gameId: integer("game_id").references(() => games.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const roundScores = sqliteTable("round_scores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  roundId: integer("round_id").references(() => rounds.id),
  playerId: integer("player_id").references(() => players.id),
  score: integer("score", { mode: "boolean"}).notNull(),
  phaseCompleted: integer("phase_completed").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});
