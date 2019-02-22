import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp';
import {Login} from "./Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


const LoginView = () => (
        <Login/>
);
const TodoView = () => (
         <TodoApp/>
);
class App extends Component {
      constructor(props) {
            super(props);
            this.state = {isLoggedIn : localStorage.getItem('isLoggedIn')===null?false : localStorage.getItem('isLoggedIn')};
            localStorage.setItem('username', 'admin');
            localStorage.setItem('password', 'admin');
      }


      render() {

              return (
                  <Router>
                      <div className="App">
                          <header className="App-header">
                              <img src={logo} className="App-logo" alt="logo"/>
                              <h1 className="App-title">TODO React App</h1>
                          </header>

                          <br/>
                          <br/>

                          {localStorage.getItem('IsLoggedIn')==="true"
                               ? <li><Link to="/todo">Todo</Link> <Route path="/todo" component={TodoView}/></li>
                               : <li><Link to="/">Login</Link> <Route exact path="/" component={LoginView}/></li>
                           }
                      </div>
                  </Router>
              );
          }



}
export default App

