import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Menu from './components/menu'

function App() {

  return (
    <div className="container grid-md">
      <Navbar />
      <div className="columns">
        <div className="col-12">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
