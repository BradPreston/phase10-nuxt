import { db } from "../index";
import { usersTable, gamesTable, playersTable, type SelectUser, type SelectGame, type SelectPlayer, roundsTable, roundScoresTable, type SelectRoundScore, type SelectRound } from "../schema";
import { eq } from "drizzle-orm";

export async function deleteUser(id: SelectUser['id']) {
  return await db.delete(usersTable).where(eq(usersTable.id, id));
}

export async function deleteGame(id: SelectGame['id']) {
  return await db.delete(gamesTable).where(eq(gamesTable.id, id));
}

export async function deletePlayer(id: SelectPlayer['id']) {
  return await db.delete(playersTable).where(eq(playersTable.id, id));
}

export async function deleteRound(id: SelectRound['id']) {
  return await db.delete(roundsTable).where(eq(roundsTable.id, id));
}

export async function deleteRoundScore(id: SelectRoundScore['id']) {
  return await db.delete(roundScoresTable).where(eq(roundScoresTable.id, id));
}