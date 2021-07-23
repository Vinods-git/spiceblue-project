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

  var { data } = await axios({
    method: 'get',
    url: 'https://stage.api.sloovi.com/user?company_id=' + c_id,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const ids = [];
  var arr = data.results.company_datas.filter(item => item.status);
  for (let i = 0; i < arr.length; i++) {
    
    ids.push(arr[i].user_id);
  }

  return ids;
};

export default getId;
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
