import { selectors as usersSelectors } from '../users';

// Get all games from the redux store (add id key to the game object)
const getAllGames = state => state.games.allIds.map(id => ({
  id,
  ...state.games.byId[id]
}));

// Return a list of all players for a specified game
const getGamePlayers = (state, game) => {
  if (!game.players) return [];

  return Object.keys(game.players).map(key =>
    usersSelectors.getUserById(state, game.players[key])
  );
};

export const getGameUIList = (state) => {
  const games = getAllGames(state);

  return games.map((game) => {
    const players = getGamePlayers(state, game);
    const creatorAvatar = usersSelectors.getUserById(state, game.createdBy).avatar;

    return {
      ...game,
      players,
      creatorAvatar
    };
  });
};
