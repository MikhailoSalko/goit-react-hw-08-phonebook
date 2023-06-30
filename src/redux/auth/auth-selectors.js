export const selectAuth = state => state.auth.isLoggedIn;
export const selectUserEmail = state => state.auth.user;
export const selectFetching = state => state.auth.isFetching;
