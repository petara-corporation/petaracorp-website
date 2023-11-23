export const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    subMenu: [
      {
        id: 1,
        label: "Inflatables",
        img: "/inflatable-icon.svg",
        url: "/products/inflatables",
        subProducts: [
          "Ground Inflatable Product Shape ",
          "Ground Inflatable Character Shape",
        ],
      },
      {
        id: 2,
        label: "Bouncy",
        img: "/bouncy-icon.svg",
        url: "/products/bouncy",
        subProducts: [
          "Ball Pool : Bouncy with Ball",
          "Basic Bouncy : Standard Bouncy",
          "Combo Units : Mix of Many Bouncy",
          "Fun Slide : Bouncy & Slide",
          "Fun Obstacle : Bouncy & Obstructs",
          "Aqua Fun : Water Bouncy",
          "Maze’s : Puzzle Bouncy",
          "Package Bouncy : Mix Of All Bouncy",
          "Fun Interactive : Interactive Bouncy",
          "Fun Tunnel  : Tunnel Bouncy",
        ],
      },
      {
        id: 3,
        label: "Costumes",
        img: "/costume-icon.svg",
        url: "/products/costumes",
        subProducts: [
          "Inflatable Costume : Product Shape",
          "Inflatable Costume : Character Shape ",
          "Fur Costume",
        ],
      },
      {
        id: 4,
        label: "Arches & Kiosk",
        img: "/arches-icon.svg",
        url: "/products/inflatables",
        subProducts: ["Arches & Kiosk", "Balloons & Blimps"],
      },
      {
        id: 5,
        label: "Balloons & Blimps",
        img: "/balloon-icon.svg",
        url: "/products/inflatables",
        subProducts: ["Arches & Kiosk", "Balloons & Blimps"],
      },
    ],
  },
  {
    id: 3,
    title: "Corporate Gifting",
    path: "/corporate-gifting",
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    title: "About",
    path: "/about",
  },
];
