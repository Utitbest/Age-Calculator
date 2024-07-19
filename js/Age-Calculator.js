
let buttons = document.querySelector('.hies');


buttons.onclick = () =>{
  let H1foryear = document.querySelector('.H1foryear');
  let H1formonth = document.querySelector('.H1formonth');
  let H1forday = document.querySelector('.H1forday');
  let errorDay = document.querySelector('.seeaw1');
  let errorMonth = document.querySelector('.seeaw2');
  let errorYear = document.querySelector('.seeaw3');
  let rudetown = document.querySelectorAll('.rudetown')
  let tellperson = document.querySelectorAll('.tellperson');
  let forDay = parseInt(document.querySelector('#forDay').value);
  let forMonth = parseInt(document.querySelector('#forMonth').value);
  let forYear = parseInt(document.querySelector('#forYear').value);
  let currentTime = new Date();
  let currentDay = currentTime.getDate();
  let currentMonth = 1+ currentTime.getMonth(); //january is zero in javascript
  let currentYear = currentTime.getFullYear();


  // if(strin(forDay) == '' || forMonth.value == '' || forYear.value == ''){
  //   errorMonth.innerHTML = 'This field is required';
  //   errorDay.innerHTML = 'This field is required';
  //   errorYear.innerHTML = 'This field is required';
  //   errorDay.style.color = 'red';
  //   errorMonth.style.color = 'red';
  //   errorYear.style.color = 'red';
  //   tellperson[0].style.color = 'red';
  //   tellperson[1].style.color = 'red';
  //   tellperson[2].style.color = 'red';
  //   rudetown[0].style.borderColor = 'red';
  //   rudetown[1].style.borderColor = 'red';
  //   rudetown[2].style.borderColor = 'red';
  // }
  if(isNaN(forDay) || isNaN(forMonth) || isNaN(forYear)){
    errorMonth.innerHTML = 'This field is required';
    errorDay.innerHTML = 'This field is required';
    errorYear.innerHTML = 'This field is required';
    errorDay.style.color = 'red';
    errorMonth.style.color = 'red';
    errorYear.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(isNaN(forDay)){
    errorDay.innerHTML = 'This field is required';
    errorDay.style.color = 'red';
    errorMonth.style.color = 'red';
    errorYear.style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(isNaN(forMonth)){
    errorMonth.innerHTML = 'This field is required';
    errorDay.style.color = 'red';
    errorMonth.style.color = 'red';
    errorYear.style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(isNaN(forYear)){
    errorYear.innerHTML = 'This field is required';
    errorDay.style.color = 'red';
    errorMonth.style.color = 'red';
    errorYear.style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forDay.toString().search(/[a-zA-Z ]/i) !== -1){
    errorDay.innerHTML = 'Must be numbers';
    errorDay.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forMonth.toString().search(/[a-zA-Z ]/i) !== -1){
    errorMonth.innerHTML = 'Must be numbers';
    errorMonth.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forYear.toString().search(/[a-zA-Z ]/i) !== -1){
    errorYear.innerHTML = 'Must be numbers';
    errorYear.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forDay < 1){
    errorDay.innerHTML = 'Less value';
    errorDay.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forDay > 31){
    errorDay.innerHTML = 'Must be a valid day';
    errorDay.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forMonth < 1){
    errorMonth.innerHTML = 'Less value';
    errorMonth.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forMonth > 12){
    errorMonth.innerHTML = 'Must be a valid month';
    errorMonth.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }
  if(forYear > currentYear){
    errorYear.innerHTML = 'Must be in the past';
    errorYear.style.color = 'red';
    tellperson[0].style.color = 'red';
    tellperson[1].style.color = 'red';
    tellperson[2].style.color = 'red';
    rudetown[0].style.borderColor = 'red';
    rudetown[1].style.borderColor = 'red';
    rudetown[2].style.borderColor = 'red';
    return;
  }

  var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (forDay > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (forMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let ageDay = currentDay - forDay;
  let ageMonth = currentMonth - forMonth
  let ageYear = currentYear - forYear

  errorMonth.innerHTML = '';
  errorDay.innerHTML = '';
  errorYear.innerHTML = '';
  tellperson[0].style.color = 'rgb(107, 105, 105)';
  tellperson[1].style.color = 'rgb(107, 105, 105)';
  tellperson[2].style.color = 'rgb(107, 105, 105)';
  rudetown[0].style.borderColor = 'gray';
  rudetown[1].style.borderColor = 'gray';
  rudetown[2].style.borderColor = 'gray';


  H1foryear.innerHTML = ageYear;
  H1formonth.innerHTML = ageMonth;
  H1forday.innerHTML = ageDay;
}
