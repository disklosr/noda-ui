import React from 'react';
import './App.css';
import MenuSection from './components/menu';
import Navbar from './components/navbar'
import menuRepository from './infra/menu-repository'

function App() {

  var menu = menuRepository.getMenu();

  return (
    <div className="container grid-md">
      <Navbar />
      <div className="columns">
        <div className="col-12">
          {menu.Menu.map(section => <MenuSection menuSection={section} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
