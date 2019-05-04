import React from 'react';
import './App.css';
import logo from './logo.png';
import Navbar from './components/navbar'

function App() {
  return (
    <div className="container grid-md">
      <Navbar />
      <div className="columns">
        <div className="col-12">

            <div className="card shadow">
              <div class="card-header" >
                <div class="card-title h6"> 🍚 Entrée</div>
              </div>
              <div className="card-body">
                Saumon gravelax, salade de choux blanc
              <br />
                Tapenade aux olives noires
            </div>
            </div>

            <div className="card shadow">
              <div class="card-header" >
                <div class="card-title h6"> 🍖 Plats</div>
              </div>
              <div className="card-body">

                Echine de porc au saté, sauce au yuzu
                <br />
                Filet de merlu, crème persil, citron
  
            </div>
            </div>

            <div className="card shadow">
              <div class="card-header" >
                <div class="card-title h6"> 🍛 Plat du chef</div>
              </div>
              <div className="card-body">

                Côte de bœuf, sauce au vin rouge
  
            </div>
            </div>

            <div className="card shadow">
              <div class="card-header" >
                <div class="card-title h6"> 🍰 Desserts</div>
              </div>
              <div className="card-body">

                Fraisier à la pistache
                <br />
                Cheesecake oreo
  
            </div>
            </div>
          </div>
        </div>

      </div >
      );
    }
    
    export default App;
