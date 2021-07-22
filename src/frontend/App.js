import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  let token;
  // useEffect(async () => {
  //   await axios({
  //     method: 'post',
  //     url: 'https://stage.api.sloovi.com/login',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     data: {
  //       email: 'good@test3.com',
  //       password: '12345678'
  //     }
  //   }).then(res => {
  //     console.log(res);
  //     token = res.data.results.token;
  //   });
  //   let c_id;
  //   await axios({
  //     method: 'get',
  //     url:
  //       'https://stage.api.sloovi.com/user?company_id=company_0336d06ff0ec4b3b9306ddc288482663',
  //     headers: {
  //       Authorization: 'Bearer ' + token,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => {
  //     console.log(res);
  //     c_id = res.data.results.company_id;
  //     console.log(c_id);
  //   });

  //   await axios({
  //     method: 'get',
  //     url:
  //       'https://stage.api.sloovi.com/team?company_id=company_0336d06ff0ec4b3b9306ddc288482663',
  //     headers: {
  //       Authorization: 'Bearer ' + token,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => console.log(res))
  //     .catch(e => console.log(e));
  // }, []);
  return (
    <>
      <aside className="sidebar" />
      <div className="navbar" />
      <div className="container">
        <div class="card">
          <div class="card-header">
            <b>TASK</b>
            <b onClick={}>+</b>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </>
  );
}
