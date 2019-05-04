import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (

    <div className="container grid-md" style={{ marginTop: '2rem' }}>
      <div className="columns">
        <div className="col-12">

          <div className="card shadow">
            <div class="card-header text-center" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
              <div class="card-title h6"> 🕙 Menu Noda - 2019-04-30</div>
            </div>
          </div>

          <div className="card shadow">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
              <div class="card-title h6"> 🍚 Entrée</div>
            </div>
            <div className="card-body">
            <dl>
              <dd>Saumon gravelax, salade de choux blanc</dd>
              <dd>Tapenade aux olives noires</dd>
            </dl>
              
            </div>
          </div>

          <div className="card shadow">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
              <div class="card-title h6"> 🍚 Entrée</div>
            </div>
            <div className="card-body">
              Saumon gravelax, salade de choux blanc
              <br />
              Tapenade aux olives noires
            </div>
          </div>

          <div className="card shadow">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
              <div class="card-title h6"> 🍖 Plats</div>
            </div>
            <div className="card-body">
              
                Echine de porc au saté, sauce au yuzu
                <br />
                Filet de merlu, crème persil, citron
              
            </div>
          </div>

          <div className="card shadow">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
              <div class="card-title h6"> 🍛 Plat du chef</div>
            </div>
            <div className="card-body">
              
                Côte de bœuf, sauce au vin rouge
              
            </div>
          </div>

          <div className="card shadow">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa", padding: '1rem' }}>
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
