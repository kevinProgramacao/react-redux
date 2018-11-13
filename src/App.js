import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Table from './components/Table';
import Registration from './components/Registration';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Header />
          <Table />
          <Registration />
        </div>
      </Provider>
      
    );
  }
}

export default App;
