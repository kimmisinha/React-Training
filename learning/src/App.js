import "./App.css";
import Style from "./Style";
import User2 from "./Component/User2";
import { User, User_3 } from "./Component/User";
import { Usernew } from "./Component/Usernew";
import State from "./Component/FunctionalState";
import Usernew_2 from "./Component/ClassState";
import Student from "./Component/Student";
import Input from "./Component/Input";
import Toggle from "./Component/Toggle";
import Form from "./Component/Form";
import Login from "./Component/Login";
import Timer from "./Component/UseEffect";
import Button from "react-bootstrap/Button";
import List from "./Component/List";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User></User>
      <User2></User2>
      <User_3></User_3>
      <Usernew></Usernew>
      <State></State>
      <Usernew_2></Usernew_2>
      <Input></Input>
      <Student name="kimmi" />
      <Toggle></Toggle>
      <Form></Form>
      <Login></Login>
      <Timer></Timer>
      <Style></Style>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button> <List></List>
    </div>
  );
}

export default App;
