//@flow
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import bgv from './assets/homeBackground.jpg'
import './App.css';



type Props = {}
type State = {}
class App extends Component<Props, State> {
  render() {
    return (
        <Router>
            <div className="App">
                {/**
                 * 这里可以公共的样式,比如 头部, 尾部, 等.
                 */
               }
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header> */}
                {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
                <body background='white' background-attachment="fixed" className='App-body'>
                  <Switch>
                      <Route path='/' exact component={Home}/>
                      {/*<Route path='/user'  component={User}/>*/}
                      {/*<Route path='/search'  component={Search}/>*/}
                      {/*<Route path='/detail'  component={Detail}/>*/}
                      {/*<Route path='/city'  component={City}/>*/}
                      {/*<Route component={NotFound}/>*/}
                  </Switch>
                </body>
                <div> AppDeliver 是自用应用内测平台 </div>
            </div>
        </Router>
    );
  }
}

export default App;
