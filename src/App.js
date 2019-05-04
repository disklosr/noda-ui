import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (

    <div className="container grid-lg" style={{ marginTop: '2rem' }}>
      <div className="columns">
        <div className="col-12">
          <div class="card">
            <div class="card-header" style={{ backgroundColor: "#f8f9fa" }}>
              <div class="card-title h5"> 🕙 Menu Noda - 2019-04-30</div>
            </div>
            <div class="card-body">
              <div>
                <h6>🍚 Entrée</h6>
                <dl>
                  <dd>Saumon gravelax, salade de choux blanc</dd>
                  <dd>Tapenade aux olives noires</dd>
                </dl>
              </div>
              <div class="divider"></div>
              <div>
                <h6>🍖 Plats</h6>
                <dl>
                  <dd>Echine de porc au saté, sauce au yuzu</dd>
                  <dd>Filet de merlu, crème persil, citron</dd>
                </dl>
              </div>
              <div class="divider"></div>
              <div>
                <h6>🍛 Plat du chef</h6>
                <dl><dd>Côte de bœuf, sauce au vin rouge</dd></dl>
              </div>
              <div class="divider"></div>
              <div>
                <h6>🍰 Desserts</h6>
                <dl>
                  <dd>Fraisier à la pistache</dd>
                  <dd>Cheesecake oreo</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
