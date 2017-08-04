import { 
  SHOW_CREATE_GAME_MODAL,
  CLOSE_CREATE_GAME_MODAL
} from './actionTypes';

export function showCreateGameModal() {
  return { type: SHOW_CREATE_GAME_MODAL };
}

export function closeCreateGameModal() {
  return { type: CLOSE_CREATE_GAME_MODAL };
}