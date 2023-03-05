import './App.css'
import {connect} from "react-redux";
import * as countActions from "./store/actions/count.actions";
import {bindActionCreators} from "redux";
import Platform from "./components/platform.jsx";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {props.count}
      <hr/>
      <button onClick={() => props.increment(2)}>increment</button>
      <button onClick={() => props.decrement(2)}>decrement</button>
      <button onClick={() => props.increment_saga(20)}>saga</button>
      <hr/>
      <Platform/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {count: state.counter.count}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (payload) => dispatch(increment(payload)),
//     decrement: (payload) => dispatch(decrement(payload))
//   }
// }
const mapDispatchToProps = dispatch => bindActionCreators(countActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
