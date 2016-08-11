

function daysInMonth(month) {
  if (month === "February"){
    for (i = 0; i < 29; i++){
      console.log(month + ' ' + i);
    }
  } else if (month === 'September' || month === 'April' || month === 'June' || month ==='November') {
    for (i = 0; i < 32; i++){
      console.log(month + ' ' + i);
    }
  } else {
    for (i = 0; i < 31; i++){
      console.log(month + ' ' + i);
    }
  }
}

daysInMonth('June');
daysInMonth('July');
daysInMonth('August');
daysInMonth('February');

/*switch (month) {
  case 'September':

    break;
  default:

}*/
