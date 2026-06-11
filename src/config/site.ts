/**
 * SITE CONFIG - the single source of truth for brand info and links.
 *
 * Anything left as PLACEHOLDER renders a tasteful disabled / "coming soon" state
 * instead of a broken link, so the site is always safe to ship even half-filled.
 *
 * Bot-specific info (Discord client IDs, top.gg IDs) lives in ./bots.ts.
 */

export const PLACEHOLDER = 'PLACEHOLDER';

/** True when a config string has been filled in with a real value. */
export function isSet(value: string | undefined | null): value is string {
  return typeof value === 'string' && value !== PLACEHOLDER && value.trim().length > 0;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Icon key understood by SocialLinks.astro. */
  icon: 'github' | 'twitter' | 'bluesky' | 'youtube' | 'itch' | 'kofi' | 'discord' | 'patreon' | 'email';
}

export const site = {
  /** Display name / brand in the header and footer. */
  owner: 'Thromblo Creates',
  /** Short handle for copyright and small mentions. */
  handle: 'thromblocreates',
  /** One-line tagline under the brand on the home hero. */
  tagline: 'Games, Discord bots, and tools. A hub for everything I build.',
  /** Longer intro shown on the home page hero. */
  intro:
    'I build idle games and the Discord bots that bring them to life, plus the odd ' +
    'desktop tool along the way. This is the home base for all of it, so pour a drink, ' +
    'kick back, and poke around the projects below.',
  /** Canonical URL once deployed. Keep in sync with `site` in astro.config.mjs. */
  url: 'https://thromblo-creates.github.io',

  /** Core contact + support links. Leave as PLACEHOLDER to disable each one. */
  email: PLACEHOLDER, //         e.g. 'you@example.com'
  patreon: 'https://www.patreon.com/c/thromblocreates',
  discordInvite: 'https://discord.gg/aH6K9jhTRb',
  github: 'https://github.com/Thromblo-Creates',

  /**
   * Extra socials shown in the footer and on the contact page.
   * Set href to a real URL to make each one appear.
   */
  socials: [
    { label: 'GitHub', href: 'https://github.com/Thromblo-Creates', icon: 'github' },
    { label: 'Discord', href: 'https://discord.gg/aH6K9jhTRb', icon: 'discord' },
    { label: 'Patreon', href: 'https://www.patreon.com/c/thromblocreates', icon: 'patreon' },
    { label: 'X / Twitter', href: PLACEHOLDER, icon: 'twitter' },
    { label: 'Bluesky', href: PLACEHOLDER, icon: 'bluesky' },
    { label: 'YouTube', href: PLACEHOLDER, icon: 'youtube' },
    { label: 'itch.io', href: PLACEHOLDER, icon: 'itch' },
    { label: 'Ko-fi', href: PLACEHOLDER, icon: 'kofi' },
  ] as SocialLink[],
};

/** Convenience: build a mailto link, or null if email is not set. */
export function mailto(): string | null {
  return isSet(site.email) ? `mailto:${site.email}` : null;
}

/** Socials that have been filled in (used to render the footer / contact grid). */
export function activeSocials(): SocialLink[] {
  return site.socials.filter((s) => isSet(s.href));
}
