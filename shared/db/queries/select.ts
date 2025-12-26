import { db } from '../index';
import {
	usersTable,
	gamesTable,
	playersTable,
	roundsTable,
	roundScoresTable,
	type SelectUser,
	type SelectGame,
	type SelectPlayer,
	type SelectRound,
	type SelectRoundScore
} from '../schema';
import { and, eq } from 'drizzle-orm';

export async function getAllUsers(): Promise<
	Array<{
		id: number;
		firstName: string;
		lastName: string;
		email: string;
	}>
> {
	return await db.select().from(usersTable);
}

export async function getUserById(id: SelectUser['id']): Promise<
	Array<{
		id: number;
		firstName: string;
		lastName: string;
		email: string;
	}>
> {
	return await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.id, id))
		.limit(1);
}

export async function getAllGames(): Promise<
	Array<{
		id: number;
		status: string;
		startedAt: Date;
		completedAt: Date | null;
	}>
> {
	return await db.select().from(gamesTable);
}

export async function getGameById(id: SelectGame['id']): Promise<
	Array<{
		id: number;
		status: string;
		startedAt: Date;
		completedAt: Date | null;
	}>
> {
	return await db
		.select()
		.from(gamesTable)
		.where(eq(gamesTable.id, id))
		.limit(1);
}

export async function getAllPlayers(): Promise<
	Array<{
		id: number;
		gameId: number | null;
		userId: number | null;
		createdAt: Date;
		updatedAt: Date;
	}>
> {
	return await db.select().from(playersTable);
}

export async function getPlayerById(id: SelectPlayer['id']): Promise<
	Array<{
		id: number;
		gameId: number | null;
		userId: number | null;
		createdAt: Date;
		updatedAt: Date;
	}>
> {
	return await db
		.select()
		.from(playersTable)
		.where(eq(playersTable.id, id))
		.limit(1);
}

export async function getAllRounds(): Promise<
	Array<{ id: number; gameId: number | null; createdAt: Date; updatedAt: Date }>
> {
	return await db.select().from(roundsTable);
}

export async function getRoundById(
	id: SelectRound['id']
): Promise<
	Array<{ id: number; gameId: number | null; createdAt: Date; updatedAt: Date }>
> {
	return await db
		.select()
		.from(roundsTable)
		.where(eq(roundsTable.id, id))
		.limit(1);
}

export async function getAllRoundScores(): Promise<
	Array<{
		id: number;
		roundId: number | null;
		playerId: number | null;
		score: boolean;
		phaseCompleted: number;
	}>
> {
	return await db.select().from(roundScoresTable);
}

export async function getRoundScoreById(id: SelectRoundScore['id']): Promise<
	Array<{
		id: number;
		roundId: number | null;
		playerId: number | null;
		score: boolean;
		phaseCompleted: number;
	}>
> {
	return await db
		.select()
		.from(roundScoresTable)
		.where(eq(roundScoresTable.id, id))
		.limit(1);
}

export async function getRoundScoresByRoundId(
	roundId: SelectRound['id']
): Promise<
	Array<{
		id: number;
		roundId: number | null;
		playerId: number | null;
		score: boolean;
		phaseCompleted: number;
	}>
> {
	return await db
		.select()
		.from(roundScoresTable)
		.where(eq(roundScoresTable.roundId, roundId));
}

export async function getRoundScoresByPlayerId(
	playerId: SelectPlayer['id']
): Promise<
	Array<{
		id: number;
		roundId: number | null;
		playerId: number | null;
		score: boolean;
		phaseCompleted: number;
	}>
> {
	return await db
		.select()
		.from(roundScoresTable)
		.where(eq(roundScoresTable.playerId, playerId));
}

export async function getRoundScoresByRoundIdAndPlayerId(
	roundId: SelectRound['id'],
	playerId: SelectPlayer['id']
): Promise<
	Array<{
		id: number;
		roundId: number | null;
		playerId: number | null;
		score: boolean;
		phaseCompleted: number;
	}>
> {
	return await db
		.select()
		.from(roundScoresTable)
		.where(
			and(
				eq(roundScoresTable.roundId, roundId),
				eq(roundScoresTable.playerId, playerId)
			)
		);
}
