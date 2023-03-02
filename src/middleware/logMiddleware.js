export default store => next => dispatch => {
  console.log("---logMiddleware start---")
  console.log(store);
  console.log(dispatch);
  console.log("---logMiddleware end---")
  next(dispatch);
}
