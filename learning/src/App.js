import logo from './logo.svg';
import './App.css';
import User2 from './User2';
import { User, User_3 } from './User';
import { Usernew } from './Usernew';
import State from './FunctionalState';
import Usernew_2 from './ClassState';
import Student from './Student';
import Input from './Input';
import Toggle from './Toggle';
import Form from './Form';
import Login from'./Login';
import Timer from './UseEffect';
import Style from './Style';
import Button from 'react-bootstrap/Button';
import List from './List';
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
       <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <List></List>
    </div>
  );
}

export default App;
