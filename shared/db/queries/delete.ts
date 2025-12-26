import { db } from "../index";
import { user, game, player, round, roundScore, type SelectUser, type SelectGame, type SelectPlayer, type SelectRound, type SelectRoundScore } from "../schema";
import { eq } from "drizzle-orm";

export async function deleteUser(id: SelectUser['id']) {
  return await db.delete(user).where(eq(user.id, id));
}

export async function deleteGame(id: SelectGame['id']) {
  return await db.delete(game).where(eq(game.id, id));
}

export async function deletePlayer(id: SelectPlayer['id']) {
  return await db.delete(player).where(eq(player.id, id));
}

export async function deleteRound(id: SelectRound['id']) {
  return await db.delete(round).where(eq(round.id, id));
}

export async function deleteRoundScore(id: SelectRoundScore['id']) {
  return await db.delete(roundScore).where(eq(roundScore.id, id));
}