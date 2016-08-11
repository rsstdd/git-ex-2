var numbers = [2, 4, 6];

function average(arr) {
  var sum = 0;
  var average;
  for ( i = 0; i < arr.length; i++) {
    sum += numbers[i];
  }
  average = sum/arr.length;
  return average;
}

average(numbers);
