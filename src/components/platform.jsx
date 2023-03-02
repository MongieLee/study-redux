import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as  platformActions from "../store/actions/platform.actions";

const Platform = (props) => {
  return (<div>
    <h3>Platform Component</h3>
    <div>{props.platform}</div>
    <button onClick={() => {
      props.updatePlatform("ios")
    }}>update Platform
    </button>
  </div>);
}

const mapStateToProps = (state) => ({platform: state.platform.value})
const mapDispatchToProps = (dispatch) => bindActionCreators(platformActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Platform);
