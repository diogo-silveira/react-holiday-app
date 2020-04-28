import React from 'react';
import './App.css';
import Holiday from './Holiday/Holiday';

function App() {
  return (
    <div className="App container-fluid h-100">
      <div className="row h-50 bg-secondary">
      </div>
      <div className="row w-100">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 col-12">
          <Holiday></Holiday>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default App;
