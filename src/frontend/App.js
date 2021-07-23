import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

export default function App() {
  const [startDate, setStartDate] = useState(new Date());

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
