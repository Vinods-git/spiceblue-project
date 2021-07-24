import axios from 'axios';
var token,
  c_id,
  comp_data = 0;
const getUsers = async () => {
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
    url:
      'https://stage.api.sloovi.com/user?company_id=company_0336d06ff0ec4b3b9306ddc288482663&product=outreach',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  // console.log(data);
  var { data } = await axios({
    method: 'get',
    url:
      'https://stage.api.sloovi.com/team?company_id=company_44a3f04d60ac451e86a22d26d15411a0&product=outreach',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  var { data } = data.results;
  var users = data.filter(user => user.user_status === 'accepted');

  return users;
};
const addTask = async task => {
  const { data } = await axios({
    method: 'post',
    url:
      ' https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8' +
      'b?company_id=company_0336d06ff0ec4b3b9306ddc288482663',
    data: task,
    headers: {
      Authorization:
        'Bearer ' +
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcxMDkyMjQsIm5iZiI6MTYyNzEwOTIyNCwianRpIjoiMWQ4NDhmMWYtNjYwYS00OGUwLTgxNDUtMTVhYmY2NjNmYmRiIiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.DtqEGj4BWjulPwCHFL0fUmkgcLbRwfUGsXzJ7q-0Wgw',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  console.log(data);
};

export { getUsers, addTask };
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
