import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux"; //connecting react with redux
import store from "../../../Reduxthunk/redux-thunk/src/reduxContainer/Store";
import BookContainer from "../../../Reduxthunk/redux-thunk/src/reduxContainer/BookContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
