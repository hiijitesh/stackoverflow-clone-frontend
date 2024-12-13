import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Headers from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import StackOverflow from './Components/StackOverflow';
function App() {
  return (
    <div className='App'>
      <Router>
        <Headers />
        <Routes>
          <Route exact path='/' element={<StackOverflow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
