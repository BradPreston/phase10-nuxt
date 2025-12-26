import { db } from "../index";
import { usersTable, type InsertUser, gamesTable, type InsertGame, playersTable, type InsertPlayer, roundsTable, type InsertRound, roundScoresTable, type InsertRoundScore } from "../schema";


export async function createUser(user: InsertUser) {
  return await db.insert(usersTable).values(user);
}

export async function createGame(game: InsertGame) {
  return await db.insert(gamesTable).values(game);
}

export async function createPlayer(player: InsertPlayer) {
  return await db.insert(playersTable).values(player);
}

export async function createRound(round: InsertRound) {
  return await db.insert(roundsTable).values(round);
}

export async function createRoundScore(roundScore: InsertRoundScore) {
  return await db.insert(roundScoresTable).values(roundScore);
}