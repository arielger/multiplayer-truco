import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { reducer as ui } from "./ui";
import { reducer as game } from "./game";
import { reducer as games } from "./games";
import { reducer as user } from "./user";
import { reducer as users } from "./users";

const reducer = combineReducers({
  game,
  games,
  user,
  users,
  form,
  ui
});

export default reducer;
