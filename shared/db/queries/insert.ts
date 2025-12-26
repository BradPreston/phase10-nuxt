import { db } from "../index";
import { user, type InsertUser, game, type InsertGame, player, type InsertPlayer, round, type InsertRound, roundScore, type InsertRoundScore } from "../schema";


export async function createUser(data: InsertUser) {
  return await db.insert(user).values(data);
}

export async function createGame(data: InsertGame) {
  return await db.insert(game).values(data);
}

export async function createPlayer(data: InsertPlayer) {
  return await db.insert(player).values(data);
}

export async function createRound(data: InsertRound) {
  return await db.insert(round).values(data);
}

export async function createRoundScore(data: InsertRoundScore) {
  return await db.insert(roundScore).values(data);
}