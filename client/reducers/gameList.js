const testData = [
  {
    config: {
      key: 1,
      users: 4,
      points: 30,
      flor: true
    }
  },
  {
    config: {
      key: 2,
      users: 2,
      points: 15,
      flor: false
    }
  },
  {
    config: {
      key: 3,
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
