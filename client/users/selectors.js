// Get all connected users
export const getAllUsers = state => state.users.allIds.map(userId => state.users.byId[userId]);

export const getUserById = (state, userId) => state.users.byId[userId];
