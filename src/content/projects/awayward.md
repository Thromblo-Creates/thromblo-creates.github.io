---
title: AwayWard
tagline: A full idle-RPG that lives inside Discord. Your hero adventures on, even while you are away.
category: discord-bot
status: live
tech: [Node.js, discord.js v14, Components V2, SQLite, PostgreSQL, Sharp]
accent: "#7b5cff"
badge: Flagship
featured: true
order: 1
year: 2025
botId: awayward
---

AwayWard (formerly Idle MMO) is my flagship project: a Discord-native idle RPG
where your hero fights monsters automatically, even while you are away, earning
gold, XP, gear, and pets. Gear up, climb the world map, summon companions, and
rebirth for permanent power. It has grown a lot since the early days. What started
as a small combat loop is now a living world with factions, world bosses, housing,
a player market, and far more to chase.

You can explore the whole game with no bot token at all. A headless simulator runs
a full playthrough from the command line, and the engine ships with a test suite
that needs zero credentials.

## Highlights

- **Idle auto-combat** across scaling zones, from the Verdant Forest to The Void, with bosses on a cadence and offline progress capped so you never fall too far behind.
- **Deep stat system** (STR / VIT / AGI / WIS / LCK) deriving attack, HP, defense, attack speed, crit, and drop rate using the exact formulas from the parent Godot game.
- **Procedural loot** with effectively infinite variety across 6 rarities and 8 slots, auto-salvage, and full equip / sell management.
- **Idle gathering** (mining, woodcutting, fishing) running passively alongside combat, plus crafting to forge gear and consumables.
- **Gacha summons** with a real pity system, collectible pets that level from duplicates, and prestige / rebirth for Soul Gems and permanent upgrades.
- **Living world**: factions with shared research, realm-wide world bosses, a player market, housing with rendered furniture, a lore codex, achievements, and rotating daily and weekly challenges.
- **Components V2 UI** throughout, with a shared menu selector on every screen and DM-safe flows that never read guild state.

## Built on a shared game world

AwayWard ports its systems and balance straight from the original
[Godot idle game](/projects/idle-mmo) it grew out of: the same stat formulas, the
same zones, the same loot tables. Playing one feels like playing the other.

## Vote rewards and premium

Voting on top.gg grants a Voter Chest, and donation-based supporter tiers (linked
to [Patreon](https://www.patreon.com/c/thromblocreates)) add gentle, clearly
optional boosts. Everything that matters for progression stays earnable in-game.

Head to the [Bots hub](/bots#awayward) to add AwayWard to your server or vote for it.
