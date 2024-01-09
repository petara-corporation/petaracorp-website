export const navLinks = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Inflatables',
    path: '/products',
    subMenu: [
      {
        id: 1,
        label: 'Inflatables',
        img: '/inflatable-icon.svg',
        url: '/products/inflatables',
        description:
          'Elevate events with attention-grabbing, larger-than-life inflatables',
        subProducts: [
          'Ground Inflatable Product Shape ',
          'Ground Inflatable Character Shape',
        ],
      },
      {
        id: 2,
        label: 'Bouncy',
        img: '/bouncy-icon.svg',
        url: '/products/bouncy',
        description:
          'Foster joy and physical development with our vibrant bouncy products',
        subProducts: [
          'Ball Pool : Bouncy with Ball',
          'Basic Bouncy : Standard Bouncy',
          'Combo Units : Mix of Many Bouncy',
          'Fun Slide : Bouncy & Slide',
          'Fun Obstacle : Bouncy & Obstructs',
          'Aqua Fun : Water Bouncy',
          'Maze’s : Puzzle Bouncy',
          'Package Bouncy : Mix Of All Bouncy',
          'Fun Interactive : Interactive Bouncy',
          'Fun Tunnel  : Tunnel Bouncy',
        ],
      },
      {
        id: 3,
        label: 'Costumes',
        img: '/costume-icon.svg',
        url: '/products/costumes',
        description:
          'Transform moments with playful, interactive and creative inflatable costumes',
        subProducts: [
          'Inflatable Costume : Product Shape',
          'Inflatable Costume : Character Shape ',
          'Fur Costume',
        ],
      },
      {
        id: 4,
        label: 'Arches & Kiosk',
        img: '/arches-icon.svg',
        url: '/products/archs-&-kiosk',
        description:
          'Make a grand entrance or create unique event spaces effortlessly',
        subProducts: ['Inflatable Arches', 'Jumping Kiosks'],
      },
      {
        id: 5,
        label: 'Balloons & Blimps',
        img: '/balloon-icon.svg',
        url: '/products/balloons-blimps',
        description: 'Elevate your brand in the sky',
        subProducts: ['Balloons', 'Blimps'],
      },
    ],
  },
  {
    id: 3,
    title: 'Promotion & Gifting',
    path: '/promotion-gifting',
    subMenu: [
      {
        id: 31,
        label: 'Corporate Gifting',
        img: '/corp_gifts.png',
        url: '/promotion-gifting/corporate-gifting',
        description:
          'Stakeholder Recognition, Client or Distributor Appreciation, Annual Meetings, Festive Celebrations, Conferences and Seminars',
      },

      {
        id: 32,
        label: 'Personal Utility Gifting',
        img: '/personal_utility_gifts.png',
        url: '/promotion-gifting/personal-utility-gifting',
        description:
          'Stakeholder Birthdays, Company Anniversaries, Onboarding Programs, Seasonal Gifting',
      },

      {
        id: 33,
        label: 'Product Promotion',
        img: '/product_promotion.png',
        url: '/promotion-gifting/product-promotion',
        description:
          'Product Launch Events, Trade Shows and Expos, Marketing Campaigns, Store Openings, Promotional Events',
      },
    ],
  },
  {
    id: 4,
    title: 'Portfolio',
    path: '/portfolio',
  },
  {
    id: 5,
    title: 'About',
    path: '/about',
  },
];
