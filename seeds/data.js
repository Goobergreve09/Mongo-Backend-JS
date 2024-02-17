
const userData = [
  {
    user_name: 'MicrofiberCat1942',
    email: 'CatsArePillows@example.com',
    thoughts: [
     "65d086c12b10895593f45636",
    ],
    friends: [
      "65d072b461b72a03d6e45f1d",
      "65d072b461b72a03d6e45f1e"
    ]
  },
  {
    user_name: 'WildWestCactus1897',
    email: 'WildWest@example.com',
    thoughts: [
      "65d086c12b10895593f45636",
     ],
     friends: [
       "65d087ca253396fe15abd2d0",
     ]
   },
  {
    user_name: 'TheRealSeanConnery',
    email: 'TheRealSeanConnery@example.com',
    thoughts: [
      "65d087ca253396fe15abd2dc",
     ],
  }
];

const thoughtData = [
  {
    thought_text: 'If you clean a vacuum cleaner, you become the vacuum cleaner.',
    username_thought: 'MicrofiberCat1942',
    reactions: [
      {
        reactionBody: 'Mind blown!',
        username: 'TheRealSeanConnery'
      },
      {
        reactionBody: 'So true!',
        username: 'WildWestCactus1897'
      }
    ]
  },
  {
    thought_text: "Life is like a role-playing game, where you're born in a random location with different starting stats and abilities.",
    username_thought: 'WildWestCactus1897',
    reactions: [
      {
        reactionBody: 'Interesting thought!',
        username: 'TheRealSeanConnery'
      }
    ]
  },
  {
    thought_text: 'I am literally Sean Connery.',
    username_thought: 'TheRealSeanConnery',
    reactions: [
      {
        reactionBody: 'Cool!',
        username: 'MicrofiberCat1942'
      }
    ]
  }
];

module.exports = { userData, thoughtData };