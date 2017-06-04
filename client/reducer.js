import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { reducer as gameReducer } from "./game";
import { reducer as gamesReducer } from "./games";
import { reducer as userReducer } from "./user";
import { reducer as usersReducer } from "./users";

const reducer = combineReducers({
  game: gameReducer,
  games: gamesReducer,
  user: userReducer,
  users: usersReducer,
  form
});

export default reducer;
