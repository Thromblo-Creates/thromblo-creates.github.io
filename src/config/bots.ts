/**
 * Bot registry - static metadata for each Discord bot shown on the Bots hub.
 *
 * clientId is the Discord application ID (drives the invite link). topggId is the
 * top.gg bot ID (drives the vote button + embeddable widget). Until topggId is
 * filled in, the vote / widget controls show a tasteful disabled state instead of
 * broken links.
 */

import { PLACEHOLDER } from './site';

export interface BotConfig {
  /** URL-safe slug, also used as the anchor on the bots page. */
  id: string;
  name: string;
  /** Short one-liner for the card header. */
  blurb: string;
  /** Discord application / client ID. Drives the invite link. */
  clientId: string;
  /** top.gg bot ID (usually identical to clientId). Drives the widget + vote. */
  topggId: string;
  /** OAuth2 permissions integer for the invite link. */
  invitePermissions: string;
  /** Theme color for this bot's card. */
  accent: string;
  /** A small emoji used as the bot's mark. */
  emoji: string;
  /** Headline features listed on the card. */
  features: string[];
  /** Optional explicit invite URL; overrides the generated one when set. */
  inviteUrl?: string;
  /** Optional link to the matching project detail page on this site. */
  projectSlug?: string;
}

// Default permissions: send messages, embed links, attach files, read history,
// use external emojis, add reactions, use slash commands. Adjust per bot.
const DEFAULT_PERMS = '274878221376';

export const bots: BotConfig[] = [
  {
    id: 'awayward',
    name: 'AwayWard',
    blurb: 'A deep idle-RPG you play right inside Discord. Your hero adventures on, even while you are away.',
    clientId: '1513938528071979169',
    topggId: PLACEHOLDER,
    invitePermissions: DEFAULT_PERMS,
    accent: '#7b5cff',
    emoji: '⚔️',
    features: [
      'Offline auto-combat across scaling zones with timed bosses',
      'Procedural loot: 6 rarities, 8 gear slots, auto-salvage',
      'Idle gathering and crafting running alongside combat',
      'Gacha summons with a real pity system and levelling pets',
      'Factions, world bosses, housing, and a player market',
      'Prestige / rebirth for Soul Gems and permanent power',
    ],
    projectSlug: 'awayward',
  },
  {
    id: 'sage-and-pestle',
    name: 'Sage & Pestle',
    blurb: 'A cozy idle gardening and crafting bot. Plant, tend, process, and breed new strains.',
    clientId: PLACEHOLDER,
    topggId: PLACEHOLDER,
    invitePermissions: DEFAULT_PERMS,
    accent: '#3fae6b',
    emoji: '🌿',
    features: [
      'Plant seeds and tend living gardens',
      'Process harvests into better goods',
      'Discover new strains through breeding',
      'Upgrade your facility over time',
    ],
    projectSlug: 'sage-and-pestle',
  },
];

/** Find a bot by slug. */
export function getBot(id: string): BotConfig | undefined {
  return bots.find((b) => b.id === id);
}

/** Build a Discord invite URL, or null if the client ID is not set yet. */
export function inviteUrl(bot: BotConfig): string | null {
  if (bot.inviteUrl) return bot.inviteUrl;
  if (bot.clientId === PLACEHOLDER) return null;
  return (
    `https://discord.com/oauth2/authorize?client_id=${bot.clientId}` +
    `&permissions=${bot.invitePermissions}&scope=bot%20applications.commands`
  );
}

/** top.gg bot page, or null if the top.gg ID is not set yet. */
export function topggUrl(bot: BotConfig): string | null {
  if (bot.topggId === PLACEHOLDER) return null;
  return `https://top.gg/bot/${bot.topggId}`;
}

/** top.gg vote page, or null if the top.gg ID is not set yet. */
export function topggVoteUrl(bot: BotConfig): string | null {
  if (bot.topggId === PLACEHOLDER) return null;
  return `https://top.gg/bot/${bot.topggId}/vote`;
}

/** top.gg embeddable SVG widget URL, or null if the top.gg ID is not set yet. */
export function topggWidgetUrl(bot: BotConfig): string | null {
  if (bot.topggId === PLACEHOLDER) return null;
  return `https://top.gg/api/widget/${bot.topggId}.svg`;
}
