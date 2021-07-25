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
  // console.log(token);

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
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcxMzQyNzAsIm5iZiI6MTYyNzEzNDI3MCwianRpIjoiYTQ2NDYyOTgtM2UwMS00N2NhLTg4ZmMtMGI5MGU5NzE5YjY2IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.uqQpUGs5C6fPXiHjKes3hDbTQY-eNZFr2E1VOi_JiOA',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return task;
};

const editTask = async (task, id) => {
  // console.log(task);

  axios({
    method: 'put',
    url:
      ' https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8' +
      'b/' +
      id +
      '?company_id=company_0336d06ff0ec4b3b9306ddc288482663',

    headers: {
      Authorization:
        'Bearer ' +
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcxMzQyNzAsIm5iZiI6MTYyNzEzNDI3MCwianRpIjoiYTQ2NDYyOTgtM2UwMS00N2NhLTg4ZmMtMGI5MGU5NzE5YjY2IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.uqQpUGs5C6fPXiHjKes3hDbTQY-eNZFr2E1VOi_JiOA',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: task
  });
  return task;
};
const deleteTask = async id => {
  axios({
    method: 'delete',
    url:
      ' https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8' +
      'b/' +
      id +
      '?company_id=company_0336d06ff0ec4b3b9306ddc288482663',

    headers: {
      Authorization:
        'Bearer ' +
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcxMzQyNzAsIm5iZiI6MTYyNzEzNDI3MCwianRpIjoiYTQ2NDYyOTgtM2UwMS00N2NhLTg4ZmMtMGI5MGU5NzE5YjY2IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.uqQpUGs5C6fPXiHjKes3hDbTQY-eNZFr2E1VOi_JiOA',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
const getAllTasks = async task => {
  const { data } = await axios({
    method: 'get',
    url:
      ' https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8' +
      'b?company_id=company_0336d06ff0ec4b3b9306ddc288482663',
    headers: {
      Authorization:
        'Bearer ' +
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcxMzQyNzAsIm5iZiI6MTYyNzEzNDI3MCwianRpIjoiYTQ2NDYyOTgtM2UwMS00N2NhLTg4ZmMtMGI5MGU5NzE5YjY2IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.uqQpUGs5C6fPXiHjKes3hDbTQY-eNZFr2E1VOi_JiOA',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  // console.log(data);

  return data.results;
};

export { getUsers, getAllTasks, addTask, deleteTask, editTask };
