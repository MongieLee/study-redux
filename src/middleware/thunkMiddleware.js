export default store => next => action => {
  if (action instanceof Function) {
    return action(store.dispatch);
  }
  next(action);
}
