const testData = [
  {
    config: {
      users: 4,
      points: 30,
      flor: true
    }
  },
  {
    config: {
      users: 2,
      points: 15,
      flor: false
    }
  },
  {
    config: {
      users: 3,
      points: 15,
      flor: true
    }
  }
];

const gameList = (state = testData, action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return [
        ...state,
        action.game
      ];
    default:
      return state;
  }
};

export default gameList;
