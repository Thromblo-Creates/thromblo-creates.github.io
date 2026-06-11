/**
 * Bot data layer - where live stats WOULD come from.
 *
 * This is a deliberate stub. Every function returns "unknown" so the UI shows
 * a calm placeholder instead of fake numbers. Flip it to live by implementing
 * one of the options noted below; the rest of the site already consumes this
 * shape, so nothing else has to change.
 */

import type { BotConfig } from '../config/bots';

export interface BotStats {
  /** Server / guild count, or null when unknown. */
  servers: number | null;
  /** Approximate user reach, or null when unknown. */
  users: number | null;
  /** Monthly votes on top.gg, or null when unknown. */
  monthlyVotes: number | null;
  status: 'online' | 'unknown';
  /** ISO timestamp of when these numbers were fetched, or null. */
  updated: string | null;
}

const UNKNOWN: BotStats = {
  servers: null,
  users: null,
  monthlyVotes: null,
  status: 'unknown',
  updated: null,
};

/**
 * Returns stats for a bot. STUB: always "unknown".
 *
 * To go live, pick one and replace the body:
 *
 * Read secrets with getSecret from 'astro:env/server' so they resolve at runtime.
 *
 *  1) top.gg API (needs TOPGG_TOKEN in .env):
 *       import { getSecret } from 'astro:env/server';
 *       const res = await fetch(`https://top.gg/api/bots/${bot.topggId}/stats`, {
 *         headers: { Authorization: getSecret('TOPGG_TOKEN') ?? '' },
 *       });
 *       const data = await res.json();
 *       return { servers: data.server_count ?? null, users: null,
 *                monthlyVotes: data.monthlyPoints ?? null,
 *                status: 'online', updated: new Date().toISOString() };
 *
 *  2) Your own read-only bot API (needs BOT_API_BASE_URL in .env):
 *       const base = getSecret('BOT_API_BASE_URL');
 *       const res = await fetch(`${base}/stats/${bot.id}`, {
 *         headers: { Authorization: `Bearer ${getSecret('BOT_API_TOKEN') ?? ''}` },
 *       });
 *       return await res.json();
 */
export async function getBotStats(_bot: BotConfig): Promise<BotStats> {
  // TODO: wire to top.gg or your bot API. See .env.example.
  return { ...UNKNOWN };
}

/** Format a stat for display, falling back to a dash when unknown. */
export function formatStat(value: number | null): string {
  if (value === null) return '-';
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}
