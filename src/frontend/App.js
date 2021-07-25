import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <aside className="sidebar" />
      <div className="navbar" />
      <div className="container">
        <div className="card">
          <Card />
          <ul className="list-group list-group-flush" />
        </div>
      </div>
    </>
  );
}
