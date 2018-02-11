//@flow
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import './App.css';



class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                {/**
                 * 这里可以公共的样式,比如 头部, 尾部, 等.
                 */}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
                <Switch>
                    <Route path='/' exact component={Home}/>
                    {/*<Route path='/user'  component={User}/>*/}
                    {/*<Route path='/search'  component={Search}/>*/}
                    {/*<Route path='/detail'  component={Detail}/>*/}
                    {/*<Route path='/city'  component={City}/>*/}
                    {/*<Route component={NotFound}/>*/}
                </Switch>
                footer
            </div>
        </Router>
    );
  }
}

export default App;
