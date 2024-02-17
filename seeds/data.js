

const userData = [
    {
      user_name: 'MicrofiberCat1942',
      email: 'CatsArePillows@example.com'
    },
    {
      user_name: 'WildWestCactus1897',
      email: 'WildWest@example.com'
    },
    {
        user_name: 'TheRealSeanConnery',
        email: 'TheRealSeanConnery@example.com'
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

  module.exports = {userData, thoughtData};