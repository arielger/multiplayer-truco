const gameList = (state = [], action) => {
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
