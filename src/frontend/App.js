import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

export default function App() {
  return (
    <>
      <aside className="sidebar" />
      <div className="navbar" />
      <div className="container">
        <div class="card">
          <Card />
          <ul class="list-group list-group-flush" />
        </div>
      </div>
    </>
  );
}
