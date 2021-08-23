export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const setSignOut = () => ({
  type: "SIGN_OUT"
})