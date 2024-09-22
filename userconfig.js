let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Dinslaken",
    scale: "C",
  },
  clock: {
    format: "h:i p",
      iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://pastebin.ai/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "main",
          links: [
            {
              name: "Google",
              url: "https://google.com",
              icon: "list-search",
              icon_color: "#ca9ee6",
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: "#ca9ee6",
            },
            {
              name: "Hacker News",
              url: "https://thehackernews.com/",
              icon: "article",
              icon_color: "#ca9ee6",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ca9ee6",
            },
            {
              name: "HiAnime",
              url: "https://hianime.to/home",
              icon: "movie",
              icon_color: "#ca9ee6",
            },
            {
              name: "s.to",
              url: "http://186.2.175.5",
              icon: "movie",
              icon_color: "#ca9ee6",
            },
            {
              name: "wallhaven",
              url: "https://wallhaven.cc/",
              icon: "layout-collage",
              icon_color: "#ca9ee6",
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/Ly-sec",
              icon: "git-branch",
              icon_color: "#ca9ee6",
            },
            {
              name: "Arch Wiki",
              url: "https://wiki.archlinux.org/title/Main_page",
              icon: "blockquote",
              icon_color: "#ca9ee6",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
