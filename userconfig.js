// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Plainfield, Illinois",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://github.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-14a.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Pass",
              url: "https://pass.proton.me/u/0",
              icon: "lock",
              icon_color: palette.mauve,
            },
            {
              name: "Virustotal",
              url: "https://www.virustotal.com/gui/home/upload",
              icon: "virus-search",
              icon_color: palette.blue,
            },
            {
              name: "Music",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.green,
            },
            {
              name: "Translate;",
              url: "https://translate.kagi.com/",
              icon: "language",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Mail",
              url: "https://mail.proton.me/u/0/",
              icon: "brand-gmail",
              icon_color: palette.mauve,
            },
            {
              name: "Calendar",
              url: "https://calendar.proton.me/u/0/",
              icon: "calendar-filled",
              icon_color: palette.blue,
            },
            {
              name: "Map",
              url: "https://osmapp.org",
              icon: "map",
              icon_color: palette.green,
            },
            {
              name: "Drive",
              url: "https://drive.proton.me/u/0/",
              icon: "brand-google-drive",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Shadowlib",
              url: "https://annas-archive.org/",
              icon: "book",
              icon_color: palette.mauve,
            },
            {
              name: "Bookracy",
              url: "https://bookracy.ru/featured",
              icon: "book-2",
              icon_color: palette.blue,
            },
            {
              name: "FMHY",
              url: "https://fmhy.net/",
              icon: "player-play",
              icon_color: palette.green,
            },
            {
              name: "News-1",
              url: "https://www.boringreport.org/app",
              icon: "news",
              icon_color: palette.peach,
            },
            {
              name: "News-2",
              url: "https://www.allyoucanread.com/",
              icon: "news",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-05.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.mauve,
            },
            {
              name: "Linux-News",
              url: "https://tuxurls.com/",
              icon: "clipboard-data",
              icon_color: palette.blue,
            },
            {
              name: "Stack-Overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "learning",
          links: [
            {
              name: "Advent",
              url: "https://adventofcode.com/",
              icon: "calendar-code",
              icon_color: palette.mauve,
            },
            {
              name: "Leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.blue,
            },
            {
              name: "Exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.green,
            },
            {
              name: "Certificates",
              url: "https://panx.io/awesome-certificates/",
              icon: "brand-linktree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Linux-News",
              url: "https://tuxurls.com/",
              icon: "clipboard-data",
              icon_color: palette.mauve,
            },,
            {
              name: "Hacker-News",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.blue,
            },
            {
              name: "XDA-Forum",
              url: "https://xdaforums.com/",
              icon: "apps",
              icon_color: palette.green,
            },
            {
              name: "Lobsters",
              url: "https://lobste.rs/",
              icon: "circle-dotted-letter-l",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Bluesky",
              url: "https://bsky.app/",
              icon: "butterfly",
              icon_color: palette.mauve,
            },
            {
              name: "Twitter",
              url: "https://www.twitter.com",
              icon: "brand-twitter",
              icon_color: palette.blue,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "Steam-DB",
              url: "https://steamdb.info/",
              icon: "brand-steam",
              icon_color: palette.mauve,
            },
            {
              name: "Proton-DB",
              url: "https://www.protondb.com/",
              icon: "atom",
              icon_color: palette.blue,
            },
            {
              name: "Wogley",
              url: "https://galaxy.click/play/454",
              icon: "galaxy",
              icon_color: palette.green,
            },
            {
              name: "Chess",
              url: "https://www.chess.com/",
              icon: "chess",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.mauve,
            },
            {
              name: "Twitch",
              url: "https://safetwitch.drgns.space/",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
            {
              name: "Cineby",
              url: "https://www.cineby.app/",
              icon: "device-tv",
              icon_color: palette.green,
            },
            {
              name: "Hi-Anime",
              url: "https://hianime.to/",
              icon: "star-filled",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
