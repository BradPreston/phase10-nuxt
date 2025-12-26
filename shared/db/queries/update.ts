import { db } from "../index";
import { usersTable, gamesTable, playersTable, roundsTable, roundScoresTable, type SelectUser, type SelectRound, type SelectPlayer, type SelectGame, type SelectRoundScore   } from "../schema";
import { eq } from "drizzle-orm";

export async function updateUser(id: SelectUser['id'], user: Partial<Omit<SelectUser, 'id'>>) {
  return await db.update(usersTable).set(user).where(eq(usersTable.id, id));
}

export async function updateGame(id: SelectGame['id'], game: Partial<Omit<SelectGame, 'id'>>) {
  return await db.update(gamesTable).set(game).where(eq(gamesTable.id, id));
}

export async function updatePlayer(id: SelectPlayer['id'], player: Partial<Omit<SelectPlayer, 'id'>>) {
  return await db.update(playersTable).set(player).where(eq(playersTable.id, id));
}

export async function updateRound(id: SelectRound['id'], round: Partial<Omit<SelectRound, 'id'>>) {
  return await db.update(roundsTable).set(round).where(eq(roundsTable.id, id));
}

export async function updateRoundScore(id: SelectRoundScore['id'], roundScore: Partial<Omit<SelectRoundScore, 'id'>>) {
  return await db.update(roundScoresTable).set(roundScore).where(eq(roundScoresTable.id, id));
}