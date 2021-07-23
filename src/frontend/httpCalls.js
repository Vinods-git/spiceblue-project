import axios from 'axios';
var token,
  c_id,
  comp_data = 0;
const getId = async () => {
  var { data } = await axios({
    method: 'post',
    url: 'https://stage.api.sloovi.com/login',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      email: 'good@test3.com',
      password: '12345678'
    }
  });
  token = data.results.token;
  c_id = data.results.company_id;
  console.log(token);

  // console.log(c_id);

  var { data } = await axios({
    method: 'get',
    url: 'https://stage.api.sloovi.com/user?company_id=' + c_id,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  console.log(data);

  const ids = [];
  var arr = data.results.company_datas.filter(item => item.status);
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    ids.push(arr[i].user_id);
  }

  return ids;
};
const addTask = async task => {
  const { data } = await axios({
    method: 'post',
    url: 'https://stage.api.sloovi.com/user?company_id=' + c_id,
    data: task,
    headers: {
      Authorization:
        'Bearer ' +
        eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
          .eyJpYXQiOjE2MjcwMjk2MjYsIm5iZiI6MTYyNzAyOTYyNiwianRpIjoiOGE5NjA5NDUtYTc3ZC00ZjQ1LTg2MWQtM2EwNjcxMWRmNTk1IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9
          .w1Vie5Q4jT5r0sCOoy -
        wP9eiSEAUVYTzb1fuEHckQLo,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  console.log(data);
};

export { getId, addTask };
// .then(res => {
//   token = res.data.results.token;
//   c_id = res.data.results.company_id;
//   axios({
//     method: 'get',
//     url: 'https://stage.api.sloovi.com/user?company_id=' + c_id,
//     headers: {
//       Authorization: 'Bearer ' + token,
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(res => {
//     // console.log(res)
//     comp_data = res.data.results.company_datas;
//     console.log(comp_data);
//     // console.log(comp_data);
//   });
// });
