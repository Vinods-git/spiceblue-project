<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Grid container justifyContent="space-around">
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      label="Date picker inline"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date'
      }}
    />
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label="Time picker"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change time'
      }}
    />
  </Grid>
</MuiPickersUtilsProvider>;

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
