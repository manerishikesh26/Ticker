import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Ticker from './Components/Ticker';
import rootReducer from './Reducers';

let store = createStore(rootReducer)

function App() {
  return (
      <Provider store={store}>
          <div className="App">
            <Ticker/>
          </div>
      </Provider>
          
  );
}

export default App;
