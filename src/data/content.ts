export type Feature = { icon: string; title: string; description: string; }

export const features: Feature[] = [
  { icon: 'ShieldCheck', title: 'Server security', description: 'A layered security stack that watches risky server changes and gives staff clear controls when something looks wrong.' },
  { icon: 'Hammer', title: 'Moderation', description: 'The staff essentials are all here, from warnings and mutes to cleanup, locks, slowmode, and ban management.' },
  { icon: 'Music2', title: 'Music', description: 'A full music setup with playback, queues, playlists, search, lyrics, autoplay, 24/7 mode, and sound presets.' },
  { icon: 'Ticket', title: 'Tickets', description: 'Turn support requests into tidy conversations with panels, claims, transcripts, reviews, and simple member controls.' },
  { icon: 'Gift', title: 'Giveaways', description: 'Run giveaways from start to finish without a pile of manual work between the announcement and the winner.' },
  { icon: 'Mic', title: 'Voice tools', description: 'Manage voice rooms, Join-to-Create, member movement, mute controls, deafen controls, and voice activity.' },
  { icon: 'BarChart3', title: 'Leveling & stats', description: 'Keep track of message and voice activity, ranks, leaderboards, and the numbers that matter to your community.' },
  { icon: 'Sparkles', title: 'Server extras', description: 'Welcome messages, autoroles, logging, autoresponders, selfroles, boost alerts, and other small touches that make a server feel finished.' },
]

export type Command = { category: string; name: string; description: string; usage: string; aliases: string[]; cooldown: number; ownerOnly: boolean; source: string; }

export const commands: Command[] = [
  {
    "category": "Security",
    "name": "/antiinviterole",
    "description": "a useful Fate command on your server.",
    "usage": "antiinviterole",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antiinviterole.js"
  },
  {
    "category": "Security",
    "name": "/antinuke",
    "description": "a useful Fate command on your server.",
    "usage": "antinuke",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antinuke.js"
  },
  {
    "category": "Security",
    "name": "/antiping",
    "description": "a useful Fate command on your server.",
    "usage": "antiping",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antiping.js"
  },
  {
    "category": "Security",
    "name": "/antiraidmode",
    "description": "a useful Fate command on your server.",
    "usage": "antiraidmode",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antiraidmode.js"
  },
  {
    "category": "Security",
    "name": "/antiunverifiedbot",
    "description": "a useful Fate command on your server.",
    "usage": "antiunverifiedbot",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antiunverifiedbot.js"
  },
  {
    "category": "Security",
    "name": "/antivanity",
    "description": "a useful Fate command on your server.",
    "usage": "antivanity",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/antivanity.js"
  },
  {
    "category": "Security",
    "name": "/automod",
    "description": "a useful Fate command on your server.",
    "usage": "automod",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/automod.js"
  },
  {
    "category": "Security",
    "name": "/extraowner",
    "description": "a useful Fate command on your server.",
    "usage": "extraowner",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/extraowner.js"
  },
  {
    "category": "Security",
    "name": "/honeypot",
    "description": "Set up a trap channel that auto-bans/kicks spam bots and compromised accounts.",
    "usage": "honeypot",
    "aliases": [
      "hp",
      "trap"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "security/honeypot.js"
  },
  {
    "category": "Security",
    "name": "/honeypot-messages",
    "description": "customize the text shown on the honeypot trap channel's notice and welcome cards.",
    "usage": "honeypot-messages",
    "aliases": [
      "hpmsg",
      "honeypotmsg"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "security/honeypot-messages.js"
  },
  {
    "category": "Security",
    "name": "/nightmode",
    "description": "a useful Fate command on your server.",
    "usage": "nightmode",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/nightmode.js"
  },
  {
    "category": "Security",
    "name": "/unwhitelist",
    "description": "a useful Fate command on your server.",
    "usage": "unwhitelist",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/unwhitelist.js"
  },
  {
    "category": "Security",
    "name": "/whitelist",
    "description": "a useful Fate command on your server.",
    "usage": "whitelist",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/whitelist.js"
  },
  {
    "category": "Security",
    "name": "/whitelisted",
    "description": "a useful Fate command on your server.",
    "usage": "whitelisted",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "security/whitelisted.js"
  },
  {
    "category": "Moderation",
    "name": "/ban",
    "description": "a useful Fate command on your server.",
    "usage": "ban",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/ban.js"
  },
  {
    "category": "Moderation",
    "name": "/fetchaudit",
    "description": "a useful Fate command on your server.",
    "usage": "fetchaudit",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/fetchaudit.js"
  },
  {
    "category": "Moderation",
    "name": "/hackban",
    "description": "a useful Fate command on your server.",
    "usage": "hackban",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/hackban.js"
  },
  {
    "category": "Moderation",
    "name": "/hide",
    "description": "a useful Fate command on your server.",
    "usage": "hide",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/hide.js"
  },
  {
    "category": "Moderation",
    "name": "/ignore",
    "description": "Handle channels where the bot ignores all commands.",
    "usage": "ignore channel <add|remove|list> [#channel]",
    "aliases": [
      "ignorechannel",
      "ic"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/ignorechannel.js"
  },
  {
    "category": "Moderation",
    "name": "/kick",
    "description": "a useful Fate command on your server.",
    "usage": "kick",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/kick.js"
  },
  {
    "category": "Moderation",
    "name": "/list",
    "description": "a useful Fate command on your server.",
    "usage": "list",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/list.js"
  },
  {
    "category": "Moderation",
    "name": "/lock",
    "description": "a useful Fate command on your server.",
    "usage": "lock",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/lock.js"
  },
  {
    "category": "Moderation",
    "name": "/mute",
    "description": "a useful Fate command on your server.",
    "usage": "mute",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/mute.js"
  },
  {
    "category": "Moderation",
    "name": "/muteinfo",
    "description": "a useful Fate command on your server.",
    "usage": "muteinfo",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/muteinfo.js"
  },
  {
    "category": "Moderation",
    "name": "/mutereset",
    "description": "a useful Fate command on your server.",
    "usage": "mutereset",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/mutereset.js"
  },
  {
    "category": "Moderation",
    "name": "/nuke",
    "description": "a useful Fate command on your server.",
    "usage": "nuke",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/nuke.js"
  },
  {
    "category": "Moderation",
    "name": "/purge",
    "description": "bulk-delete messages from a channel.",
    "usage": "purge <amount> [@user]",
    "aliases": [
      "clear",
      "prune"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "moderation/purge.js"
  },
  {
    "category": "Moderation",
    "name": "/purgebots",
    "description": "a useful Fate command on your server.",
    "usage": "purgebots",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/purgebots.js"
  },
  {
    "category": "Moderation",
    "name": "/remind",
    "description": "a useful Fate command on your server.",
    "usage": "remind",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/remind.js"
  },
  {
    "category": "Moderation",
    "name": "/remindinfo",
    "description": "a useful Fate command on your server.",
    "usage": "remindinfo",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/remindinfo.js"
  },
  {
    "category": "Moderation",
    "name": "/remindreset",
    "description": "a useful Fate command on your server.",
    "usage": "remindreset",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/remindreset.js"
  },
  {
    "category": "Moderation",
    "name": "/slowmode",
    "description": "Choose or remove slowmode in a channel.",
    "usage": "slowmode <seconds|off> [#channel]",
    "aliases": [
      "slow",
      "sm"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "moderation/slowmode.js"
  },
  {
    "category": "Moderation",
    "name": "/steal",
    "description": "a useful Fate command on your server.",
    "usage": "steal",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/steal.js"
  },
  {
    "category": "Moderation",
    "name": "/stealsticker",
    "description": "a useful Fate command on your server.",
    "usage": "stealsticker",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/stealsticker.js"
  },
  {
    "category": "Moderation",
    "name": "/unban",
    "description": "a useful Fate command on your server.",
    "usage": "unban",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unban.js"
  },
  {
    "category": "Moderation",
    "name": "/unbanall",
    "description": "a useful Fate command on your server.",
    "usage": "unbanall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unbanall.js"
  },
  {
    "category": "Moderation",
    "name": "/unhide",
    "description": "a useful Fate command on your server.",
    "usage": "unhide",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unhide.js"
  },
  {
    "category": "Moderation",
    "name": "/unhideall",
    "description": "a useful Fate command on your server.",
    "usage": "unhideall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unhideall.js"
  },
  {
    "category": "Moderation",
    "name": "/unlock",
    "description": "a useful Fate command on your server.",
    "usage": "unlock",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unlock.js"
  },
  {
    "category": "Moderation",
    "name": "/unlockall",
    "description": "a useful Fate command on your server.",
    "usage": "unlockall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unlockall.js"
  },
  {
    "category": "Moderation",
    "name": "/unmute",
    "description": "a useful Fate command on your server.",
    "usage": "unmute",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/unmute.js"
  },
  {
    "category": "Moderation",
    "name": "/warn",
    "description": "a useful Fate command on your server.",
    "usage": "warn",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/warn.js"
  },
  {
    "category": "Moderation",
    "name": "/warninfo",
    "description": "a useful Fate command on your server.",
    "usage": "warninfo",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/warninfo.js"
  },
  {
    "category": "Moderation",
    "name": "/warnreset",
    "description": "a useful Fate command on your server.",
    "usage": "warnreset",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "moderation/warnreset.js"
  },
  {
    "category": "Music · Playback",
    "name": "/forward",
    "description": "forward the current track by specified seconds (default: 10 seconds, not available for live streams).",
    "usage": "forward [seconds]",
    "aliases": [
      "fw"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/forward.js"
  },
  {
    "category": "Music · Playback",
    "name": "/pause",
    "description": "Pause the currently playing track.",
    "usage": "pause",
    "aliases": [
      "pa"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/pause.js"
  },
  {
    "category": "Music · Playback",
    "name": "/play",
    "description": "Play music from YouTube, Spotify, or other platforms.",
    "usage": "play <query> [--src yt/am/sp/sc/dz/reset]",
    "aliases": [
      "p"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/Play.js"
  },
  {
    "category": "Music · Playback",
    "name": "/playnow",
    "description": "Play music immediately (skips current song).",
    "usage": "playnow <query> [--src yt/am/sp/sc/dz]",
    "aliases": [
      "pn",
      "playskip"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/playnow.js"
  },
  {
    "category": "Music · Playback",
    "name": "/previous",
    "description": "Play the previous track from the queue history.",
    "usage": "previous",
    "aliases": [
      "prev",
      "back"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/music/playback/Previous.js"
  },
  {
    "category": "Music · Playback",
    "name": "/replay",
    "description": "replay the current track from the beginning (not available for live streams).",
    "usage": "replay",
    "aliases": [
      "restart"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/replay.js"
  },
  {
    "category": "Music · Playback",
    "name": "/resume",
    "description": "Resume the paused track and continue playback.",
    "usage": "resume",
    "aliases": [
      "unpause"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/resume.js"
  },
  {
    "category": "Music · Playback",
    "name": "/rewind",
    "description": "rewind the current track by specified seconds (default: 10 seconds, not available for live streams).",
    "usage": "rewind [seconds]",
    "aliases": [
      "rw",
      "back10"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/rewind.js"
  },
  {
    "category": "Music · Playback",
    "name": "/seek",
    "description": "seek to a specific time in the current track using various time formats.",
    "usage": "seek <time>",
    "aliases": [
      "sk"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/playback/seek.js"
  },
  {
    "category": "Music · Playback",
    "name": "/skip",
    "description": "Skip the current track or jump to a specific track in the queue.",
    "usage": "skip [amount]",
    "aliases": [
      "s",
      "next"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/music/playback/Skip.js"
  },
  {
    "category": "Music · Playback",
    "name": "/stop",
    "description": "Stop music playback, clear the queue, and disconnect from the voice channel.",
    "usage": "stop",
    "aliases": [
      "disconnect",
      "leave"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/playback/Stop.js"
  },
  {
    "category": "Music · Playback",
    "name": "/volume",
    "description": "adjust or view the music playback volume with an interactive control panel.",
    "usage": "volume [level]",
    "aliases": [
      "v",
      "vol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/music/playback/vol.js"
  },
  {
    "category": "Music · Queue",
    "name": "/bump",
    "description": "Move track(s) to the top of the queue.",
    "usage": "bump <position> [end_position]",
    "aliases": [
      "top",
      "priority"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/queue/bump.js"
  },
  {
    "category": "Music · Queue",
    "name": "/clear",
    "description": "clear the q.",
    "usage": "shuffle",
    "aliases": [
      "cq"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/queue/clear.js"
  },
  {
    "category": "Music · Queue",
    "name": "/loop",
    "description": "Switch the loop mode between off, track, and queue with interactive controls.",
    "usage": "loop [off|track|queue]",
    "aliases": [
      "repeat"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/queue/loop.js"
  },
  {
    "category": "Music · Queue",
    "name": "/move",
    "description": "Move a track to a different position in the queue.",
    "usage": "move <from> <to>",
    "aliases": [
      "mv"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/queue/move.js"
  },
  {
    "category": "Music · Queue",
    "name": "/queue",
    "description": "Take a look at and manage the song queue with pagination and interactive controls.",
    "usage": "queue [page]",
    "aliases": [
      "q"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/queue/q.js"
  },
  {
    "category": "Music · Queue",
    "name": "/remove",
    "description": "Remove a track from the queue.",
    "usage": "remove <position>",
    "aliases": [
      "rm",
      "del"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/music/queue/remove.js"
  },
  {
    "category": "Music · Queue",
    "name": "/shuffle",
    "description": "shuffle the entire queue to randomize track order.",
    "usage": "shuffle",
    "aliases": [
      "shu",
      "sh",
      "shuf",
      "mix"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/queue/shuffle.js"
  },
  {
    "category": "Music · Extras",
    "name": "/autoplay",
    "description": "Switch autoplay feature that adds similar songs when queue ends.",
    "usage": "autoplay [on|off]",
    "aliases": [
      "ap",
      "auto"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/extra/ap.js"
  },
  {
    "category": "Music · Extras",
    "name": "/history",
    "description": "Take a look at your personal listening history and re-play songs with interactive controls.",
    "usage": "history [page]",
    "aliases": [
      "hist"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/extra/history.js"
  },
  {
    "category": "Music · Extras",
    "name": "/lyrics",
    "description": "Get synchronized lyrics for the currently playing song with live timing.",
    "usage": "lyrics",
    "aliases": [
      "ly",
      "lyric"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "Music/music/extra/lyric.js"
  },
  {
    "category": "Music · Extras",
    "name": "/nowplaying",
    "description": "displays the currently playing song with a beautiful custom-designed visual card.",
    "usage": "nowplaying",
    "aliases": [
      "np"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Music/music/extra/np.js"
  },
  {
    "category": "Music · Extras",
    "name": "/recommendations",
    "description": "Get song recommendations based on what's currently playing.",
    "usage": "recommendations",
    "aliases": [
      "rec",
      "recommend",
      "similar"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Music/music/extra/rec.js"
  },
  {
    "category": "Music · Extras",
    "name": "/search",
    "description": "Search for music across multiple platforms.",
    "usage": "search <query> [--src yt/sp/am/sc]",
    "aliases": [
      "find",
      "lookup",
      "s"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/music/extra/search.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/add2pl",
    "description": "Add current track or entire queue to a playlist.",
    "usage": "add2pl [playlist_name/id]",
    "aliases": [
      "add-to-playlist",
      "a2pl"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/playlists/add2pl.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/create-playlist",
    "description": "Create a new custom playlist.",
    "usage": "create-playlist <name> [description]",
    "aliases": [
      "create-pl",
      "new-playlist",
      "make-playlist"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/playlists/create-pl.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/delete-playlist",
    "description": "Delete one of your custom playlists.",
    "usage": "delete-playlist <playlist_name_or_id>",
    "aliases": [
      "delete-pl",
      "remove-playlist",
      "del-playlist"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/playlists/del-playlists.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/edit-playlist",
    "description": "Change the name or description of a custom playlist.",
    "usage": "edit-playlist <playlist_id_or_name>",
    "aliases": [
      "edit-pl",
      "pl-edit"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Music/playlists/pl-edit.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/load-playlist",
    "description": "load a playlist, or specific tracks/ranges from it.",
    "usage": "load-playlist <playlist_name_or_id> [positions]",
    "aliases": [
      "load-pl",
      "lpl"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/playlists/load-pl.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/my-playlists",
    "description": "Take a look at all of your custom playlists.",
    "usage": "my-playlists [page]",
    "aliases": [
      "my-pl",
      "playlists"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/playlists/my-playlists.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/playlist-info",
    "description": "Take a look at detailed information and manage a custom playlist.",
    "usage": "playlist-info [playlist_id_or_name]",
    "aliases": [
      "pl-info",
      "p-info"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/playlists/pl-info.js"
  },
  {
    "category": "Music · Playlists",
    "name": "/remove-track",
    "description": "Remove tracks from a playlist by position or range.",
    "usage": "remove-track <playlist_name_or_id> <positions>",
    "aliases": [
      "rm-track",
      "pl-remove"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/playlists/pl-remove.js"
  },
  {
    "category": "Music · Settings",
    "name": "/247",
    "description": "Switch 24/7 mode to keep the bot connected to a voice channel.",
    "usage": "247 [on/off]",
    "aliases": [
      "stay247",
      "alwayson",
      "keepalive",
      "24/7"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Music/settings/stay247.js"
  },
  {
    "category": "Music · Settings",
    "name": "/setdefaultvolume",
    "description": "Choose the default volume for new music players in the server.",
    "usage": "setdefaultvolume [volume]",
    "aliases": [
      "defaultvolume",
      "setdefvol"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Music/settings/volume.js"
  },
  {
    "category": "Music · Filters",
    "name": "/reset",
    "description": "Reset all audio filters to default.",
    "usage": "reset",
    "aliases": [
      "clear-filter",
      "resetfilter"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/reset.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/classical",
    "description": "apply classical equalizer preset to the music.",
    "usage": "classical",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/classical.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/electronic",
    "description": "apply electronic equalizer preset to the music.",
    "usage": "electronic",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/electronic.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/hiphop",
    "description": "apply hiphop equalizer preset to the music.",
    "usage": "hiphop",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/hiphop.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/jazz",
    "description": "apply jazz equalizer preset to the music.",
    "usage": "jazz",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/jazz.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/pop",
    "description": "apply pop equalizer preset to the music.",
    "usage": "pop",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/pop.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/reggae",
    "description": "apply reggae equalizer preset to the music.",
    "usage": "reggae",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/reggae.js"
  },
  {
    "category": "Music · Filters · Genres",
    "name": "/rock",
    "description": "apply rock equalizer preset to the music.",
    "usage": "rock",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/genre/rock.js"
  },
  {
    "category": "Music · Filters · Special",
    "name": "/gaming",
    "description": "apply gaming equalizer preset to the music.",
    "usage": "gaming",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/special/gaming.js"
  },
  {
    "category": "Music · Filters · Special",
    "name": "/nightcore",
    "description": "apply nightcore equalizer preset to the music.",
    "usage": "nightcore",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/special/nightcore.js"
  },
  {
    "category": "Music · Filters · Special",
    "name": "/vaporwave",
    "description": "apply vaporwave equalizer preset to the music.",
    "usage": "vaporwave",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/special/vaporwave.js"
  },
  {
    "category": "Music · Filters · Bass",
    "name": "/bassboost",
    "description": "apply bassboost equalizer preset to the music.",
    "usage": "bassboost",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/bass/bassboost.js"
  },
  {
    "category": "Music · Filters · Bass",
    "name": "/deepbass",
    "description": "apply deepbass equalizer preset to the music.",
    "usage": "deepbass",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/bass/deepbass.js"
  },
  {
    "category": "Music · Filters · Bass",
    "name": "/superbass",
    "description": "apply superbass equalizer preset to the music.",
    "usage": "superbass",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/bass/superbass.js"
  },
  {
    "category": "Music · Filters · Treble",
    "name": "/bright",
    "description": "apply bright equalizer preset to the music.",
    "usage": "bright",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/treble/bright.js"
  },
  {
    "category": "Music · Filters · Treble",
    "name": "/treble",
    "description": "apply treble equalizer preset to the music.",
    "usage": "treble",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/treble/treble.js"
  },
  {
    "category": "Music · Filters · Vocal",
    "name": "/vocals",
    "description": "apply vocals equalizer preset to the music.",
    "usage": "vocals",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/vocal/vocals.js"
  },
  {
    "category": "Music · Filters · Enhancement",
    "name": "/boost",
    "description": "apply boost equalizer preset to the music.",
    "usage": "boost",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/enhancement/boost.js"
  },
  {
    "category": "Music · Filters · Enhancement",
    "name": "/flat",
    "description": "apply flat equalizer preset to the music.",
    "usage": "flat",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/enhancement/flat.js"
  },
  {
    "category": "Music · Filters · Enhancement",
    "name": "/soft",
    "description": "apply soft equalizer preset to the music.",
    "usage": "soft",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/enhancement/soft.js"
  },
  {
    "category": "Music · Filters · Enhancement",
    "name": "/warm",
    "description": "apply warm equalizer preset to the music.",
    "usage": "warm",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/enhancement/warm.js"
  },
  {
    "category": "Music · Filters · Experimental",
    "name": "/metal",
    "description": "apply metal equalizer preset to the music.",
    "usage": "metal",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/experimental/metal.js"
  },
  {
    "category": "Music · Filters · Experimental",
    "name": "/oldschool",
    "description": "apply oldschool equalizer preset to the music.",
    "usage": "oldschool",
    "aliases": [],
    "cooldown": 2,
    "ownerOnly": false,
    "source": "Music/filters/experimental/oldschool.js"
  },
  {
    "category": "Voice",
    "name": "/j2csetup",
    "description": "Set up Join 2 Create voice channel system.",
    "usage": "j2csetup",
    "aliases": [
      "j2c",
      "jointocreate"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Voice/j2csetup.js"
  },
  {
    "category": "Voice",
    "name": "/vcdeafen",
    "description": "a useful Fate command on your server.",
    "usage": "vcdeafen",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcdeafen.js"
  },
  {
    "category": "Voice",
    "name": "/vckick",
    "description": "a useful Fate command on your server.",
    "usage": "vckick",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vckick.js"
  },
  {
    "category": "Voice",
    "name": "/vckickall",
    "description": "a useful Fate command on your server.",
    "usage": "vckickall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vckickall.js"
  },
  {
    "category": "Voice",
    "name": "/vclist",
    "description": "a useful Fate command on your server.",
    "usage": "vclist",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vclist.js"
  },
  {
    "category": "Voice",
    "name": "/vcmoveall",
    "description": "a useful Fate command on your server.",
    "usage": "vcmoveall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcmoveall.js"
  },
  {
    "category": "Voice",
    "name": "/vcmute",
    "description": "a useful Fate command on your server.",
    "usage": "vcmute",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcmute.js"
  },
  {
    "category": "Voice",
    "name": "/vcmuteall",
    "description": "a useful Fate command on your server.",
    "usage": "vcmuteall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcmuteall.js"
  },
  {
    "category": "Voice",
    "name": "/vcundeafen",
    "description": "a useful Fate command on your server.",
    "usage": "vcundeafen",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcundeafen.js"
  },
  {
    "category": "Voice",
    "name": "/vcunmute",
    "description": "a useful Fate command on your server.",
    "usage": "vcunmute",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcunmute.js"
  },
  {
    "category": "Voice",
    "name": "/vcunmuteall",
    "description": "a useful Fate command on your server.",
    "usage": "vcunmuteall",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Voice/vcunmuteall.js"
  },
  {
    "category": "Tickets",
    "name": "/add",
    "description": "a useful Fate command on your server.",
    "usage": "add",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/add.js"
  },
  {
    "category": "Tickets",
    "name": "/claim",
    "description": "a useful Fate command on your server.",
    "usage": "claim",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/claim.js"
  },
  {
    "category": "Tickets",
    "name": "/close",
    "description": "a useful Fate command on your server.",
    "usage": "close",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/close.js"
  },
  {
    "category": "Tickets",
    "name": "/delete",
    "description": "a useful Fate command on your server.",
    "usage": "delete",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/delete.js"
  },
  {
    "category": "Tickets",
    "name": "/fuckticket",
    "description": "a useful Fate command on your server.",
    "usage": "fuckticket",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/fuckticket.js"
  },
  {
    "category": "Tickets",
    "name": "/panelsend",
    "description": "a useful Fate command on your server.",
    "usage": "panelsend",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/panelsend.js"
  },
  {
    "category": "Tickets",
    "name": "/panelsetup",
    "description": "a useful Fate command on your server.",
    "usage": "panelsetup",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/panelsetup.js"
  },
  {
    "category": "Tickets",
    "name": "/rename",
    "description": "a useful Fate command on your server.",
    "usage": "rename",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/rename.js"
  },
  {
    "category": "Tickets",
    "name": "/retick",
    "description": "a useful Fate command on your server.",
    "usage": "retick",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/retick.js"
  },
  {
    "category": "Tickets",
    "name": "/reviewsetup",
    "description": "a useful Fate command on your server.",
    "usage": "reviewsetup",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/reviewsetup.js"
  },
  {
    "category": "Tickets",
    "name": "/ticket",
    "description": "a useful Fate command on your server.",
    "usage": "ticket",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/ticket.js"
  },
  {
    "category": "Tickets",
    "name": "/transcript",
    "description": "a useful Fate command on your server.",
    "usage": "transcript",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Ticket/transcript.js"
  },
  {
    "category": "Giveaways",
    "name": "/gban",
    "description": "Ban a user from participating in giveaways.",
    "usage": "gban <user_id> <duration>",
    "aliases": [
      "giveaway-ban",
      "giveawayban",
      "bangiveaway"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gban.js"
  },
  {
    "category": "Giveaways",
    "name": "/gedit",
    "description": "Change an existing giveaway.",
    "usage": "gedit <message_id> <option> <value>",
    "aliases": [
      "giveaway-edit",
      "giveawayedit",
      "editgiveaway"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gedit.js"
  },
  {
    "category": "Giveaways",
    "name": "/gend",
    "description": "end a giveaway immediately.",
    "usage": "gend <message_id>",
    "aliases": [
      "giveaway-end",
      "giveawayend",
      "endgiveaway"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gend.js"
  },
  {
    "category": "Giveaways",
    "name": "/gereroll",
    "description": "Pick a new winner for a giveaway winner.",
    "usage": "gereroll <message_id>",
    "aliases": [
      "greroll",
      "giveaway-reroll",
      "giveawayreroll"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gereroll.js"
  },
  {
    "category": "Giveaways",
    "name": "/gpause",
    "description": "Pause an active giveaway.",
    "usage": "gpause <message_id>",
    "aliases": [
      "giveaway-pause",
      "giveawaypause",
      "pausegiveaway"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gpause.js"
  },
  {
    "category": "Giveaways",
    "name": "/gresume",
    "description": "Resume a paused giveaway.",
    "usage": "gresume <message_id>",
    "aliases": [
      "giveaway-resume",
      "giveawayresume",
      "resumegiveaway",
      "gunpause"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gresume.js"
  },
  {
    "category": "Giveaways",
    "name": "/gstart",
    "description": "Start a new giveaway in the server.",
    "usage": "gstart <duration> <winners> <prize>",
    "aliases": [
      "gcreate",
      "giveaway-start",
      "giveawaystart"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "giveaway/gstart.js"
  },
  {
    "category": "Giveaways",
    "name": "/gunban",
    "description": "Unban a user from giveaways.",
    "usage": "gunban <user_id>",
    "aliases": [
      "giveaway-unban",
      "giveawayunban",
      "unbangiveaway"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "giveaway/gunban.js"
  },
  {
    "category": "AutoMod",
    "name": "/anticaps",
    "description": "a useful Fate command on your server.",
    "usage": "anticaps",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "automod/anticaps.js"
  },
  {
    "category": "AutoMod",
    "name": "/antispam",
    "description": "a useful Fate command on your server.",
    "usage": "antispam",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "automod/antispam.js"
  },
  {
    "category": "AutoMod",
    "name": "/antiverify",
    "description": "a useful Fate command on your server.",
    "usage": "antiverify",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "automod/antiverify.js"
  },
  {
    "category": "Invites",
    "name": "/addinvites",
    "description": "Add invites to a member.",
    "usage": "addinvites <@member> <amount>",
    "aliases": [
      "addinv",
      "bonus-invites"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/addinvites.js"
  },
  {
    "category": "Invites",
    "name": "/invitecodes",
    "description": "List all your invite codes in this guild.",
    "usage": "invitecodes [@member]",
    "aliases": [
      "codes",
      "mycodes"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/invitecodes.js"
  },
  {
    "category": "Invites",
    "name": "/inviteleaderboard",
    "description": "See top inviters in the server.",
    "usage": "inviteleaderboard",
    "aliases": [
      "il",
      "invlb",
      "topinviters",
      "invitesleaderboard"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/inviteleaderboard.js"
  },
  {
    "category": "Invites",
    "name": "/inviter",
    "description": "See who invited a user.",
    "usage": "inviter [@member]",
    "aliases": [
      "whoinvited",
      "invitedby"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/inviter.js"
  },
  {
    "category": "Invites",
    "name": "/inviterank",
    "description": "Set up invite ranks.",
    "usage": "inviterank <add|remove> <role> [invites]",
    "aliases": [
      "invrank",
      "setinviterank"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/inviterank.js"
  },
  {
    "category": "Invites",
    "name": "/inviteranks",
    "description": "See all configured invite ranks.",
    "usage": "inviteranks",
    "aliases": [
      "invranks",
      "listinviteranks"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/inviteranks.js"
  },
  {
    "category": "Invites",
    "name": "/invites",
    "description": "See number of invites in the server.",
    "usage": "invites [@member]",
    "aliases": [
      "inv",
      "myinvites"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/invites.js"
  },
  {
    "category": "Invites",
    "name": "/invitesimport",
    "description": "import existing guild invites to users.",
    "usage": "invitesimport [@member]",
    "aliases": [
      "importinvites",
      "importinv"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "Invites/invitesimport.js"
  },
  {
    "category": "Invites",
    "name": "/invitetracker",
    "description": "See invite tracking status (always enabled).",
    "usage": "invitetracker",
    "aliases": [
      "invitetracking",
      "trackinvites"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/invitetracker.js"
  },
  {
    "category": "Invites",
    "name": "/resetinvites",
    "description": "Reset a user's added invites.",
    "usage": "resetinvites <@member>",
    "aliases": [
      "clearinvites",
      "removeinvites"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Invites/resetinvites.js"
  },
  {
    "category": "Roles",
    "name": "/activitypresence",
    "description": "Turn on or disable automatic activity presence roles.",
    "usage": "activitypresence <on|off|status>",
    "aliases": [
      "presenceactivity",
      "activitypresences"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "roles/activitypresence.js"
  },
  {
    "category": "Roles",
    "name": "/activityrole",
    "description": "auto-assign roles based on a member's current activity (Spotify, VS Code, games, etc.).",
    "usage": "activityrole [enable/disable/show]",
    "aliases": [
      "activityroles",
      "presencerole"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "roles/activityrole.js"
  },
  {
    "category": "Roles",
    "name": "/autorole",
    "description": "Set up roles automatically assigned when members join.",
    "usage": "autorole [human/bot/presence/list/reset] [add/remove/on/off] <role>",
    "aliases": [
      "ar"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "roles/autorole.js"
  },
  {
    "category": "Roles",
    "name": "/invc",
    "description": "assign a role to members while they are in a voice channel.",
    "usage": "invc setup <@role> | invc remove",
    "aliases": [
      "invoicerole",
      "voiceautorole"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "roles/invc.js"
  },
  {
    "category": "Roles",
    "name": "/roleall",
    "description": "Add or remove a role from all humans, bots, or everyone in the server.",
    "usage": "roleall [add/remove] [humans/bots/all] <role>",
    "aliases": [
      "mroleall",
      "massrole"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "roles/roleall.js"
  },
  {
    "category": "Roles",
    "name": "/rolecreate",
    "description": "interactively create a new role (name, color, position, hoist, mentionable).",
    "usage": "rolecreate",
    "aliases": [
      "createrole",
      "rc"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "roles/rolecreate.js"
  },
  {
    "category": "Roles",
    "name": "/roleicon",
    "description": "Choose (or remove) a role's icon using an emoji.",
    "usage": "roleicon <role id | @role> <emoji | remove>",
    "aliases": [
      "seticon",
      "roleemoji"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "roles/roleicon.js"
  },
  {
    "category": "Logging",
    "name": "/logging",
    "description": "Set up and manage high-speed Raze server logging.",
    "usage": "logging <setup|auto|reset>",
    "aliases": [
      "logsetup",
      "logs",
      "loggingsetup"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "logging/logging.js"
  },
  {
    "category": "Utility",
    "name": "/addmsg",
    "description": "Add or remove messages from a member's count.",
    "usage": "addmsg <@member> <amount>",
    "aliases": [
      "addmessages",
      "addmessage",
      "msgedit"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/addmsg.js"
  },
  {
    "category": "Utility",
    "name": "/afk",
    "description": "Choose your AFK status with an optional reason.",
    "usage": "afk [reason]",
    "aliases": [
      "away",
      "brb"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "utility/afk.js"
  },
  {
    "category": "Utility",
    "name": "/animes",
    "description": "Get random anime profile pictures.",
    "usage": "animes",
    "aliases": [
      "animepfp",
      "animeavatar",
      "anime"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/animes.js"
  },
  {
    "category": "Utility",
    "name": "/announce",
    "description": "send a formatted announcement to a channel.",
    "usage": "announce [#channel] <message>",
    "aliases": [
      "announcement",
      "ann"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "utility/announce.js"
  },
  {
    "category": "Utility",
    "name": "/antibotchat",
    "description": "Handle channels where bot messages are automatically deleted and whitelist approved bots or roles.",
    "usage": "antibotchat <channel add/remove #channel | whitelist add/remove @bot | role add/remove @role | list | clear>",
    "aliases": [
      "antibot",
      "nobotchat",
      "nobot",
      "antibotchannel"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/antibotchat.js"
  },
  {
    "category": "Utility",
    "name": "/avatar",
    "description": "Take a look at a user's avatar in full size.",
    "usage": "avatar [@user]",
    "aliases": [
      "av",
      "pfp",
      "dp",
      "icon"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/avatar.js"
  },
  {
    "category": "Utility",
    "name": "/banners",
    "description": "Get random aesthetic banners for your profile.",
    "usage": "banners",
    "aliases": [
      "banner",
      "profilebanner"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/banners.js"
  },
  {
    "category": "Utility",
    "name": "/boys",
    "description": "Get random anime boy profile pictures.",
    "usage": "boys",
    "aliases": [
      "boypfp",
      "boyavatar",
      "husbando"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/boys.js"
  },
  {
    "category": "Utility",
    "name": "/couples",
    "description": "Get random anime couple profile pictures.",
    "usage": "couples",
    "aliases": [
      "couplepfp",
      "coupleavatar",
      "pair"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/couples.js"
  },
  {
    "category": "Utility",
    "name": "/girls",
    "description": "Get random anime girl profile pictures.",
    "usage": "girls",
    "aliases": [
      "girlpfp",
      "girlavatar",
      "waifu"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/girls.js"
  },
  {
    "category": "Utility",
    "name": "/guildtag",
    "description": "Handle your server's guild tag and linked role.",
    "usage": "guildtag <enable|disable|setup|role|eligibility|view|remove> [args]",
    "aliases": [
      "gtag",
      "tag"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/guildtag.js"
  },
  {
    "category": "Utility",
    "name": "/mediaonlychannel",
    "description": "Choose channels where only media (images/videos/files) is allowed.",
    "usage": "mediaonlychannel <add #channel | remove #channel | list | clear>",
    "aliases": [
      "mediaonly",
      "mediach",
      "imageonly"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/mediaonlychannel.js"
  },
  {
    "category": "Utility",
    "name": "/messageleaderboard",
    "description": "a useful Fate command on your server.",
    "usage": "messageleaderboard",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/messageleaderboard.js"
  },
  {
    "category": "Utility",
    "name": "/messages",
    "description": "Take a look at message count stats or manage message counts.",
    "usage": "messages [@user | add @user <amount> | remove @user <amount>]",
    "aliases": [
      "m",
      "msgcount",
      "mc"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/messages.js"
  },
  {
    "category": "Utility",
    "name": "/nick",
    "description": "change your or someone else's nickname.",
    "usage": "nick [new nickname] | nick @user [new nickname]",
    "aliases": [
      "nickname",
      "setnick"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/nick.js"
  },
  {
    "category": "Utility",
    "name": "/prefix",
    "description": "Take a look at or change the bot prefix for this server.",
    "usage": "prefix [new prefix]",
    "aliases": [
      "setprefix"
    ],
    "cooldown": 1,
    "ownerOnly": false,
    "source": "utility/Prefix.js"
  },
  {
    "category": "Utility",
    "name": "/roleinfo",
    "description": "See detailed information about a role.",
    "usage": "roleinfo <@role | role name>",
    "aliases": [
      "ri",
      "role"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/roleinfo.js"
  },
  {
    "category": "Utility",
    "name": "/serverbanner",
    "description": "See the server's banner.",
    "usage": "serverbanner",
    "aliases": [
      "sbanner",
      "guildbanner"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/serverbanner.js"
  },
  {
    "category": "Utility",
    "name": "/servericon",
    "description": "See the server's icon.",
    "usage": "servericon",
    "aliases": [
      "sicon",
      "guildicon",
      "serverav"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/servericon.js"
  },
  {
    "category": "Utility",
    "name": "/serverinfo",
    "description": "See detailed information about the server.",
    "usage": "serverinfo",
    "aliases": [
      "si",
      "guildinfo",
      "server"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/serverinfo.js"
  },
  {
    "category": "Utility",
    "name": "/serverstats",
    "description": "Take a look at a full visual stats card (messages, voice, ranks, top channels, activity chart).",
    "usage": "serverstats [@user]",
    "aliases": [
      "stats",
      "statcard",
      "sstats"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/serverstats.js"
  },
  {
    "category": "Utility",
    "name": "/snipe",
    "description": "Take a look at the last deleted message in this channel.",
    "usage": "snipe",
    "aliases": [
      "s"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/snipe.js"
  },
  {
    "category": "Utility",
    "name": "/timer",
    "description": "Choose a timer for a specified number of days.",
    "usage": "timer <number of days>",
    "aliases": [
      "remind",
      "reminder",
      "settimer"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/timer.js"
  },
  {
    "category": "Utility",
    "name": "/userinfo",
    "description": "See detailed information about a user.",
    "usage": "userinfo [@user]",
    "aliases": [
      "ui",
      "whois",
      "user",
      "memberinfo"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "utility/userinfo.js"
  },
  {
    "category": "Utility",
    "name": "/vanitytag",
    "description": "Choose a vanity tag — members who add it to their custom status receive a role.",
    "usage": "vanitytag <set|remove|role|panel|view> [args]",
    "aliases": [
      "vtag",
      "statustagrole"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/vanitytag.js"
  },
  {
    "category": "Utility",
    "name": "/voiceleaderboard",
    "description": "a useful Fate command on your server.",
    "usage": "voiceleaderboard",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/voiceleaderboard.js"
  },
  {
    "category": "Utility",
    "name": "/voicetime",
    "description": "Take a look at voice time stats or manage voice time.",
    "usage": "voicetime [@user | add @user <time> | remove @user <time>]",
    "aliases": [
      "vc",
      "voice",
      "vt"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "utility/voicetime.js"
  },
  {
    "category": "Fun",
    "name": "/8ball",
    "description": "ask the magic 8-ball a question.",
    "usage": "8ball <question>",
    "aliases": [
      "eightball",
      "magic8"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Fun/8ball.js"
  },
  {
    "category": "Fun",
    "name": "/coinflip",
    "description": "flip a coin — heads or tails.",
    "usage": "coinflip",
    "aliases": [
      "cf",
      "flip",
      "coin"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Fun/coinflip.js"
  },
  {
    "category": "Fun",
    "name": "/dare",
    "description": "Get a random dare challenge.",
    "usage": "dare",
    "aliases": [
      "daredevil"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/dare.js"
  },
  {
    "category": "Fun",
    "name": "/hack",
    "description": "pretend to hack a user (just for fun!).",
    "usage": "hack <@user>",
    "aliases": [
      "wizz",
      "hax"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Fun/hack.js"
  },
  {
    "category": "Fun",
    "name": "/howdumb",
    "description": "check how dumb someone is (just for fun!).",
    "usage": "howdumb [@user]",
    "aliases": [
      "dumb",
      "stupidrate",
      "iqtest"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/howdumb.js"
  },
  {
    "category": "Fun",
    "name": "/howgay",
    "description": "check the gay meter (just for fun!).",
    "usage": "howgay [@user]",
    "aliases": [
      "gayrate",
      "gaymeter"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/howgay.js"
  },
  {
    "category": "Fun",
    "name": "/kill",
    "description": "virtually eliminate someone (just for fun!).",
    "usage": "kill <@user>",
    "aliases": [
      "eliminate",
      "destroy"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/kill.js"
  },
  {
    "category": "Fun",
    "name": "/lick",
    "description": "lick someone (anime style!).",
    "usage": "lick <@user>",
    "aliases": [
      "licku"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/lick.js"
  },
  {
    "category": "Fun",
    "name": "/meme",
    "description": "Get a random meme from Reddit.",
    "usage": "meme",
    "aliases": [
      "reddit",
      "randommeme"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/meme.js"
  },
  {
    "category": "Fun",
    "name": "/nitro",
    "description": "generate a fake nitro gift (just for fun!).",
    "usage": "nitro",
    "aliases": [
      "fakenitro",
      "nitrogift"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Fun/nitro.js"
  },
  {
    "category": "Fun",
    "name": "/pickup",
    "description": "Get a random pickup line.",
    "usage": "pickup [@user]",
    "aliases": [
      "pickupline",
      "flirt",
      "rizz"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/pickup.js"
  },
  {
    "category": "Fun",
    "name": "/poll",
    "description": "Create a quick yes/no poll or a custom multi-option poll.",
    "usage": "poll <question> | [option1] | [option2] | ...",
    "aliases": [
      "vote"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "Fun/poll.js"
  },
  {
    "category": "Fun",
    "name": "/simprate",
    "description": "check the simp meter (just for fun!).",
    "usage": "simprate [@user]",
    "aliases": [
      "simp",
      "simpmeter",
      "howsimp"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/simprate.js"
  },
  {
    "category": "Fun",
    "name": "/texttoemoji",
    "description": "convert text to emoji letters.",
    "usage": "texttoemoji <text>",
    "aliases": [
      "tte",
      "emojify",
      "textmoji"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/texttoemoji.js"
  },
  {
    "category": "Fun",
    "name": "/truth",
    "description": "Get a random truth question.",
    "usage": "truth",
    "aliases": [
      "truthful"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Fun/truth.js"
  },
  {
    "category": "Extras",
    "name": "/animes",
    "description": "Get random anime profile pictures.",
    "usage": "animes",
    "aliases": [
      "animepfp",
      "animeavatar",
      "anime"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/animes.js"
  },
  {
    "category": "Extras",
    "name": "/autoreact",
    "description": "Choose up automatic reactions in a channel.",
    "usage": "autoreact <add|remove|list> [channel] [emoji]",
    "aliases": [
      "ar",
      "react"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/autoreact.js"
  },
  {
    "category": "Extras",
    "name": "/autoresponder",
    "description": "Choose up automatic responses to specific triggers.",
    "usage": "autoresponder <add|remove|list> [trigger] [response]",
    "aliases": [
      "autorespond",
      "trigger"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/autoresponder.js"
  },
  {
    "category": "Extras",
    "name": "/banners",
    "description": "Get random aesthetic banners for your profile.",
    "usage": "banners",
    "aliases": [
      "banner",
      "profilebanner"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/banners.js"
  },
  {
    "category": "Extras",
    "name": "/boostchannel",
    "description": "Choose or remove the channel where boost notification embeds are sent.",
    "usage": "boostchannel <#channel|remove>",
    "aliases": [
      "bc"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/boostchannel.js"
  },
  {
    "category": "Extras",
    "name": "/boostconfig",
    "description": "See the current boost notification configuration and preview the embed.",
    "usage": "boostconfig",
    "aliases": [
      "boostcfg"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/boostconfig.js"
  },
  {
    "category": "Extras",
    "name": "/boostmessage",
    "description": "Choose up a custom embed that sends when someone boosts the server.",
    "usage": "boostmessage <add|remove>",
    "aliases": [
      "bm"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/boostmessage.js"
  },
  {
    "category": "Extras",
    "name": "/boostremove",
    "description": "Remove all boost notification configuration for this server.",
    "usage": "boostremove",
    "aliases": [
      "removeboost"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/boostremove.js"
  },
  {
    "category": "Extras",
    "name": "/boys",
    "description": "Get random anime boy profile pictures.",
    "usage": "boys",
    "aliases": [
      "boypfp",
      "boyavatar",
      "husbando"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/boys.js"
  },
  {
    "category": "Extras",
    "name": "/couples",
    "description": "Get random anime couple profile pictures.",
    "usage": "couples",
    "aliases": [
      "couplepfp",
      "coupleavatar",
      "pair"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/couples.js"
  },
  {
    "category": "Extras",
    "name": "/embed",
    "description": "interactive embed builder — customize title, description, color, fields, author, footer, images.",
    "usage": "embed",
    "aliases": [
      "embedbuilder",
      "createembed",
      "sendembed",
      "eb"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/embed.js"
  },
  {
    "category": "Extras",
    "name": "/girls",
    "description": "Get random anime girl profile pictures.",
    "usage": "girls",
    "aliases": [
      "girlpfp",
      "girlavatar",
      "waifu"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/girls.js"
  },
  {
    "category": "Extras",
    "name": "/ltcprice",
    "description": "convert letters to different text styles.",
    "usage": "ltcprice <style> <text>",
    "aliases": [
      "letterconvert",
      "textconvert",
      "fancy",
      "ltc"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "Extra/ltcprice.js"
  },
  {
    "category": "Extras",
    "name": "/staffapp",
    "description": "a useful Fate command on your server.",
    "usage": "staffapp",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Extra/staffapp.js"
  },
  {
    "category": "Info",
    "name": "/botinfo",
    "description": "See detailed information about the bot.",
    "usage": "botinfo",
    "aliases": [
      "bi",
      "about",
      "stats",
      "botstats",
      "binfo"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/botinfo.js"
  },
  {
    "category": "Info",
    "name": "/feedback",
    "description": "send feedback about the bot to the developers.",
    "usage": "feedback <your feedback>",
    "aliases": [
      "fb"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "info/feedback.js"
  },
  {
    "category": "Info",
    "name": "/help",
    "description": "See all available commands and their information.",
    "usage": "help [command]",
    "aliases": [
      "h",
      "commands"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "info/help.js"
  },
  {
    "category": "Info",
    "name": "/invite",
    "description": "Get the bot's invite link to add it to your server.",
    "usage": "invite",
    "aliases": [
      "botinvite",
      "add",
      "addbot",
      "support"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/invite.js"
  },
  {
    "category": "Info",
    "name": "/ping",
    "description": "See bot latency as a canvas card.",
    "usage": "ping",
    "aliases": [
      "latency",
      "lag",
      "ms"
    ],
    "cooldown": 10,
    "ownerOnly": false,
    "source": "info/ping.js"
  },
  {
    "category": "Info",
    "name": "/pingsetup",
    "description": "send a live-updating ping HUD card that refreshes every 30s (via webhook).",
    "usage": "pingsetup [remove]",
    "aliases": [
      "pinghud",
      "liveping"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/pingsetup.js"
  },
  {
    "category": "Info",
    "name": "/privacy-policy",
    "description": "Take a look at the bot's Privacy Policy and data handling practices.",
    "usage": "pp",
    "aliases": [
      "privacy",
      "privacypolicy",
      "data",
      "pp"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/pp.js"
  },
  {
    "category": "Info",
    "name": "/report",
    "description": "report bugs or issues with the bot to the developers.",
    "usage": "report <issue description>",
    "aliases": [
      "bug",
      "issue"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "info/report.js"
  },
  {
    "category": "Info",
    "name": "/selfrole",
    "description": "Create self-assignable role panels for members.",
    "usage": "selfrole",
    "aliases": [
      "selfroles",
      "rolemenu",
      "reactrole"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/selfrole.js"
  },
  {
    "category": "Info",
    "name": "/statusset",
    "description": "send a live shard status HUD card that refreshes every 45s (via webhook).",
    "usage": "statusset [remove]",
    "aliases": [
      "shardstatus",
      "shards",
      "statuscard"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/statusset.js"
  },
  {
    "category": "Info",
    "name": "/suggest",
    "description": "suggest new features or improvements for the bot.",
    "usage": "suggest <your suggestion>",
    "aliases": [
      "suggestion",
      "feature",
      "request"
    ],
    "cooldown": 30,
    "ownerOnly": false,
    "source": "info/suggest.js"
  },
  {
    "category": "Info",
    "name": "/teaminfo",
    "description": "See information about the development team.",
    "usage": "teaminfo",
    "aliases": [
      "dev",
      "papa",
      "devteam",
      "team"
    ],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "info/team.js"
  },
  {
    "category": "Info",
    "name": "/tos",
    "description": "Take a look at the bot's Terms of Service and usage guidelines.",
    "usage": "tos",
    "aliases": [
      "terms",
      "termsofservice",
      "rules"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/tos.js"
  },
  {
    "category": "Info",
    "name": "/welcome",
    "description": "Set up the server welcome message system.",
    "usage": "welcome",
    "aliases": [
      "welcomeset",
      "welcomeconfig"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "info/welcome.js"
  },
  {
    "category": "Core",
    "name": "/botinfo",
    "description": "a useful Fate command on your server.",
    "usage": "botinfo",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "botinfo.js"
  },
  {
    "category": "Core",
    "name": "/j2csetup",
    "description": "Set up Join-to-Create voice channels.",
    "usage": "j2csetup <channel | category | text | disable | status>",
    "aliases": [
      "j2c",
      "join2create",
      "jointocreateset"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "j2csetup.js"
  },
  {
    "category": "Core",
    "name": "/massban",
    "description": "Ban multiple users by providing their IDs (Owner only).",
    "usage": "massban <userId1> [userId2] ... [reason]",
    "aliases": [
      "mban",
      "bulkban"
    ],
    "cooldown": 30,
    "ownerOnly": true,
    "source": "massban.js"
  },
  {
    "category": "Core",
    "name": "/massunban",
    "description": "Unban all currently banned users from the server (Admin only).",
    "usage": "massunban",
    "aliases": [
      "unbanall",
      "munban",
      "bulkunban"
    ],
    "cooldown": 60,
    "ownerOnly": false,
    "source": "massunban.js"
  },
  {
    "category": "Core",
    "name": "/statusset",
    "description": "send a live shard status HUD card that refreshes every 45s.",
    "usage": "statusset [remove]",
    "aliases": [
      "shardstatus",
      "shards",
      "statuscard"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "source": "statusset.js"
  },
  {
    "category": "Core",
    "name": "/Welcome",
    "description": "a useful Fate command on your server.",
    "usage": "Welcome",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Welcome.js"
  },
  {
    "category": "Developer",
    "name": "/blacklist",
    "description": "Handle blacklisted users and guilds (Owner Only).",
    "usage": "blacklist <add|remove|check|stats> [type/id] [id] [reason]",
    "aliases": [
      "bl"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "developer/blacklist.js"
  },
  {
    "category": "Developer",
    "name": "/rl",
    "description": "reloads all commands for development purposes.",
    "usage": "rl",
    "aliases": [
      "reload"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "developer/rl.js"
  },
  {
    "category": "Developer",
    "name": "/setprofile",
    "description": "owner only: change the bot's global bio, avatar, or banner.",
    "usage": "setprofile <bio|avatar|banner> <value/url>",
    "aliases": [
      "botprofile",
      "profileset"
    ],
    "cooldown": 10,
    "ownerOnly": true,
    "source": "developer/setprofile.js"
  },
  {
    "category": "Developer",
    "name": "/updateslash",
    "description": "registers or updates all slash commands with Discord globally (Owner Only).",
    "usage": "updateslash",
    "aliases": [
      "slashupdate"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "developer/slahs.js"
  },
  {
    "category": "Owner",
    "name": "/backup",
    "description": "Create or manage bot data backups.",
    "usage": "backup <create|list|restore> [backup_id]",
    "aliases": [
      "bkp"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/backup.js"
  },
  {
    "category": "Owner",
    "name": "/blacklistserver",
    "description": "blacklist a server from using the bot.",
    "usage": "blacklistserver <server_id> [reason]",
    "aliases": [
      "bserver",
      "serverbl",
      "blacklist-server"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/blacklistserver.js"
  },
  {
    "category": "Owner",
    "name": "/blacklistuser",
    "description": "blacklist a user from using the bot.",
    "usage": "blacklistuser <user_id> [reason]",
    "aliases": [
      "buser",
      "userbl",
      "blacklist-user"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/blacklistuser.js"
  },
  {
    "category": "Owner",
    "name": "/Botprofile",
    "description": "a useful Fate command on your server.",
    "usage": "Botprofile",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Owner/Botprofile.js"
  },
  {
    "category": "Owner",
    "name": "/changelog",
    "description": "manually post a changelog — only actually posts if the code changed since the last post.",
    "usage": "changelog <update text>",
    "aliases": [
      "cl"
    ],
    "cooldown": 5,
    "ownerOnly": true,
    "source": "Owner/changelog.js"
  },
  {
    "category": "Owner",
    "name": "/getuprestart",
    "description": "a useful Fate command on your server.",
    "usage": "getuprestart",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Owner/getuprestart.js"
  },
  {
    "category": "Owner",
    "name": "/glban",
    "description": "globally ban a user from every guild the bot is in (owner only).",
    "usage": "glban <user id> [reason]",
    "aliases": [
      "globalban"
    ],
    "cooldown": 0,
    "ownerOnly": false,
    "source": "Owner/globalban.js"
  },
  {
    "category": "Owner",
    "name": "/glunban",
    "description": "globally unban a user from every guild the bot is in (owner only).",
    "usage": "glunban <user id>",
    "aliases": [
      "globalunban"
    ],
    "cooldown": 0,
    "ownerOnly": false,
    "source": "Owner/globalunban.js"
  },
  {
    "category": "Owner",
    "name": "/leaveserver",
    "description": "make the bot leave a specific server.",
    "usage": "leaveserver <server_id>",
    "aliases": [
      "leave",
      "leaveguild"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/leaveserver.js"
  },
  {
    "category": "Owner",
    "name": "/node",
    "description": "See bot node/system information.",
    "usage": "node",
    "aliases": [
      "system",
      "sysinfo",
      "nodeinfo"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/node.js"
  },
  {
    "category": "Owner",
    "name": "/nopmanager",
    "description": "Handle noprefix managers. Managers can grant NP for up to 3 months.",
    "usage": "nopmanager <add|remove|list|setmanager|removemanager|managers> [@user] [duration]",
    "aliases": [
      "nopm",
      "nopman"
    ],
    "cooldown": 0,
    "ownerOnly": false,
    "source": "Owner/nopmanager.js"
  },
  {
    "category": "Owner",
    "name": "/noprefix",
    "description": "give or remove no-prefix access for a user. Stays until removed or expires.",
    "usage": "noprefix <add|remove|list> [@user | user_id] [duration]",
    "aliases": [
      "nop",
      "nopre"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/noprefix.js"
  },
  {
    "category": "Owner",
    "name": "/ownerbypass",
    "description": "Switch whether the bot owner bypasses server permission checks.",
    "usage": "ownerbypass <enable|disable|status>",
    "aliases": [
      "obypass",
      "bypasstoggle"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/ownerbypass.js"
  },
  {
    "category": "Owner",
    "name": "/ownercmds",
    "description": "lists all owner-only commands (paginated).",
    "usage": "ownercmds",
    "aliases": [
      "ocmds",
      "ownercommands",
      "ocmd"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/ownercmds.js"
  },
  {
    "category": "Owner",
    "name": "/packzip",
    "description": "owner: Zip the bot project and send as a file attachment.",
    "usage": "packzip",
    "aliases": [
      "zipbot",
      "exportbot",
      "botzip"
    ],
    "cooldown": 30,
    "ownerOnly": true,
    "source": "Owner/packzip.js"
  },
  {
    "category": "Owner",
    "name": "/partners",
    "description": "Handle the bot's partner list (servers/bots shown on botinfo).",
    "usage": "partners [add/remove/list] ...",
    "aliases": [
      "partner"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "Owner/partners.js"
  },
  {
    "category": "Owner",
    "name": "/raze",
    "description": "evaluate JavaScript code (owner only).",
    "usage": "raze <code>",
    "aliases": [
      "eval",
      "ev",
      "execute"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "Owner/raze.js"
  },
  {
    "category": "Owner",
    "name": "/releasedball",
    "description": "a useful Fate command on your server.",
    "usage": "releasedball",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Owner/releasedball.js"
  },
  {
    "category": "Owner",
    "name": "/reload",
    "description": "hot-reload a single command from disk without restarting.",
    "usage": "reload <command_name>",
    "aliases": [
      "rl"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/reload.js"
  },
  {
    "category": "Owner",
    "name": "/reloadall",
    "description": "reload every command file from disk at once.",
    "usage": "reloadall",
    "aliases": [
      "rla"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/reloadall.js"
  },
  {
    "category": "Owner",
    "name": "/reloadfile",
    "description": "hot-reload any JS file without restarting the bot.",
    "usage": "reloadfile <relative/path/to/file.js>",
    "aliases": [
      "rf",
      "reloadf"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/reloadfile.js"
  },
  {
    "category": "Owner",
    "name": "/restart",
    "description": "restart the bot.",
    "usage": "restart",
    "aliases": [
      "reboot"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/restart.js"
  },
  {
    "category": "Owner",
    "name": "/serverinvite",
    "description": "generate an invite link for a server.",
    "usage": "serverinvite <server_id>",
    "aliases": [
      "sinv",
      "getinvite",
      "guildinvite"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/serverinvite.js"
  },
  {
    "category": "Owner",
    "name": "/serverlist",
    "description": "List all servers the bot is in.",
    "usage": "serverlist [page]",
    "aliases": [
      "servers",
      "guildlist",
      "guilds"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/serverlist.js"
  },
  {
    "category": "Owner",
    "name": "/setavatar",
    "description": "Choose the bot's per-server avatar (updates Discord guild profile + botinfo).",
    "usage": "setavatar <image_url | reset>",
    "aliases": [
      "botavatar",
      "setpfp"
    ],
    "cooldown": 5,
    "ownerOnly": true,
    "source": "Owner/setavatar.js"
  },
  {
    "category": "Owner",
    "name": "/setbio",
    "description": "Choose a custom bot bio displayed in botinfo for this server.",
    "usage": "setbio <bio text | reset>",
    "aliases": [
      "botbio",
      "setabout"
    ],
    "cooldown": 5,
    "ownerOnly": true,
    "source": "Owner/setbio.js"
  },
  {
    "category": "Owner",
    "name": "/setname",
    "description": "change the bot's nickname in the server.",
    "usage": "setname <name | reset>",
    "aliases": [
      "botnick",
      "setnick"
    ],
    "cooldown": 5,
    "ownerOnly": true,
    "source": "Owner/setname.js"
  },
  {
    "category": "Owner",
    "name": "/shard",
    "description": "Take a look at servers running on a specific shard.",
    "usage": "shard <shard_number>",
    "aliases": [
      "shardinfo",
      "shardstatus"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/shard.js"
  },
  {
    "category": "Owner",
    "name": "/unblacklistserver",
    "description": "Remove a server from the blacklist.",
    "usage": "unblacklistserver <server_id>",
    "aliases": [
      "unbserver",
      "serverunbl",
      "unblacklist-server"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/unblacklistserver.js"
  },
  {
    "category": "Owner",
    "name": "/unblacklistuser",
    "description": "Remove a user from the blacklist.",
    "usage": "unblacklistuser <user_id>",
    "aliases": [
      "unbuser",
      "userunbl",
      "unblacklist-user"
    ],
    "cooldown": 0,
    "ownerOnly": true,
    "source": "Owner/unblacklistuser.js"
  },
  {
    "category": "Owner",
    "name": "/vcjoin",
    "description": "owner: Join a voice channel and listen for voice commands.",
    "usage": "vcjoin [channel_id]",
    "aliases": [
      "joinvc",
      "voicejoin"
    ],
    "cooldown": 5,
    "ownerOnly": true,
    "source": "Owner/vcjoin.js"
  },
  {
    "category": "Owner",
    "name": "/vcleave",
    "description": "owner: Disconnect the bot from the voice channel.",
    "usage": "vcleave",
    "aliases": [
      "leavevc",
      "voiceleave",
      "vcdisconnect"
    ],
    "cooldown": 3,
    "ownerOnly": true,
    "source": "Owner/vcleave.js"
  },
  {
    "category": "Owner",
    "name": "/webhookcreate",
    "description": "a useful Fate command on your server.",
    "usage": "webhookcreate",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "source": "Owner/webhookcreate.js"
  }
]

export type Module = { title: string; eyebrow: string; description: string; items: string[]; }

export const modules: Module[] = [
  {
    "title": "Security",
    "eyebrow": "10 core defenses",
    "description": "Fate watches the changes that can hurt a server most: bans, kicks, roles, channels, webhooks, bots, vanity links, emojis, prunes, and guild updates.",
    "items": [
      "Anti-ban",
      "Anti-kick",
      "Anti-role",
      "Anti-channel",
      "Anti-webhook",
      "Anti-bot",
      "Anti-vanity",
      "Anti-emoji",
      "Anti-prune",
      "Anti-guild update"
    ]
  },
  {
    "title": "Moderation",
    "eyebrow": "30 commands",
    "description": "The everyday staff toolkit, from a quick warning to channel locks, bulk cleanup, reminders, mutes, bans, and audit checks.",
    "items": [
      "Ban / unban",
      "Kick & mute",
      "Warnings",
      "Purge tools",
      "Channel locks",
      "Slowmode",
      "Audit tools"
    ]
  },
  {
    "title": "Music",
    "eyebrow": "Full playback stack",
    "description": "Play, queue, search, skip, seek, replay, save playlists, and shape the sound with a wide set of built-in filters.",
    "items": [
      "Playback",
      "Queue controls",
      "Playlists",
      "Search & lyrics",
      "Autoplay",
      "24/7 mode",
      "30+ sound presets"
    ]
  },
  {
    "title": "Tickets",
    "eyebrow": "Support workflow",
    "description": "Build support panels, claim conversations, add people, rename tickets, review outcomes, and keep transcripts when a ticket closes.",
    "items": [
      "Panels",
      "Claim & close",
      "Add / remove members",
      "Rename",
      "Transcripts",
      "Reviews"
    ]
  },
  {
    "title": "Giveaways",
    "eyebrow": "8 commands",
    "description": "Run clean giveaways without juggling a pile of manual steps. Start, edit, pause, resume, end, reroll, and manage entry bans.",
    "items": [
      "Start",
      "Edit",
      "Pause / resume",
      "End",
      "Reroll",
      "Participant bans"
    ]
  },
  {
    "title": "Voice",
    "eyebrow": "11 commands",
    "description": "Handle voice channels without making staff chase people around: move, mute, deafen, kick, list, and manage Join-to-Create.",
    "items": [
      "Join-to-Create",
      "Move all",
      "Mute / unmute",
      "Deafen / undeafen",
      "Voice cleanup"
    ]
  },
  {
    "title": "AutoMod",
    "eyebrow": "3 focused protections",
    "description": "Simple protections for the noisy stuff: spam, excessive caps, and members who have not passed verification.",
    "items": [
      "Anti-spam",
      "Anti-caps",
      "Anti-verify"
    ]
  },
  {
    "title": "Invites",
    "eyebrow": "10 commands",
    "description": "Track who brings people in, inspect invite codes, configure invite ranks, import existing invites, and reset counts when needed.",
    "items": [
      "Tracking",
      "Invite codes",
      "Ranks",
      "Leaderboard",
      "Import / reset"
    ]
  },
  {
    "title": "Roles",
    "eyebrow": "7 commands",
    "description": "Automate role assignment and give staff a few practical tools for managing roles across a server.",
    "items": [
      "Autorole",
      "Activity roles",
      "Voice roles",
      "Role creation",
      "Role icons",
      "Bulk role tools"
    ]
  },
  {
    "title": "Logging",
    "eyebrow": "Server visibility",
    "description": "Keep a useful record of important server activity so staff can see what changed without digging through Discord by hand.",
    "items": [
      "Member events",
      "Message events",
      "Channel events",
      "Voice events",
      "Guild events"
    ]
  },
  {
    "title": "Utility",
    "eyebrow": "27 commands",
    "description": "The commands you reach for when you need information, a quick server tool, or a small quality-of-life feature.",
    "items": [
      "Server & user info",
      "AFK",
      "Snipe",
      "Timers",
      "Stats",
      "Announcements",
      "Media-only channels"
    ]
  },
  {
    "title": "Fun",
    "eyebrow": "15 commands",
    "description": "A lighter side of Fate for the moments when moderation is done and the server just needs something silly to do.",
    "items": [
      "8ball",
      "Truth & dare",
      "Coin flip",
      "Polls",
      "Memes",
      "Profile image tools"
    ]
  },
  {
    "title": "Extras",
    "eyebrow": "14 commands",
    "description": "Small server automations that do not fit neatly into one box, including boost messages, autoresponders, reactions, embeds, and staff applications.",
    "items": [
      "Autoresponder",
      "Autoreact",
      "Boost alerts",
      "Embed builder",
      "Staff applications"
    ]
  },
  {
    "title": "Info",
    "eyebrow": "14 commands",
    "description": "Keep the basics close: bot details, help, team information, reports, suggestions, terms, privacy, and setup tools.",
    "items": [
      "Help",
      "Bot info",
      "Ping",
      "Invite",
      "Reports",
      "Suggestions",
      "Policies"
    ]
  },
  {
    "title": "Core systems",
    "eyebrow": "Always working in the background",
    "description": "Several parts of Fate are event-driven rather than single commands: leveling, welcome flows, AFK tracking, ghost pings, message counts, and server state logging.",
    "items": [
      "Leveling XP",
      "Welcome system",
      "AFK handling",
      "Ghost ping tracking",
      "Message counts",
      "Server state snapshots"
    ]
  },
  {
    "title": "Developer",
    "eyebrow": "4 commands",
    "description": "Developer-only controls for refreshing commands, changing profiles, and keeping a running bot instance up to date.",
    "items": [
      "Reload commands",
      "Refresh slash commands",
      "Set profile",
      "Developer controls"
    ]
  },
  {
    "title": "Owner",
    "eyebrow": "33 commands",
    "description": "Private maintenance tools for the people operating Fate itself. These are intentionally separate from normal server administration.",
    "items": [
      "Backups",
      "Blacklists",
      "Global bans",
      "Shard tools",
      "Restarts",
      "Hot reloads",
      "Server management"
    ]
  }
]

export type TeamMember = { id: string; name: string; role: string; bio: string; }

export const team: TeamMember[] = [
  { id: '1336664274969296977', name: 'Const', role: 'Lead Developer', bio: 'Keeps the core code moving and turns rough ideas into features that are actually pleasant to use.' },
  { id: '1379844667792949421', name: 't3xture', role: 'Owner', bio: 'Looks after the direction of the project, the community around it, and the bigger decisions behind the scenes.' },
  { id: '1014833598303576115', name: 'himanshu', role: 'Owner', bio: 'Helps keep the day-to-day side of the project moving while working on what comes next.' },
]

export const botStats = [
  { label: 'Commands in source', value: String(commands.length) },
  { label: 'Public modules', value: String(modules.length) },
  { label: 'Security defenses', value: '10' },
  { label: 'Music presets', value: '30+' },
]
