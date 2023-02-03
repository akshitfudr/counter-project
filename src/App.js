import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { decreaseCountAction, increaseCountAction, messageAction } from './redux/Functions';

function App(props) {
  console.log(props, "DLDLDLLD")

  return (
    <div className="App">
      <h1>Counter</h1>

      <h2>{props?.message}
      </h2>
      {props?.count}
      <div>
        <button onClick={() => props.actions.increase()}>+</button>
        <button onClick={() => props.actions.decrease()}>-</button>
        <div>

          <button onClick={() => props.actions.message()}>Message</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state?.counter?.count ?? 1000,
  message: state?.counter?.message ?? ""
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      increase: increaseCountAction,
      decrease: decreaseCountAction,
      message: messageAction
    },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);;
