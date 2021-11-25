// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = arr => {
  let result = '... ';
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]} in ${i + 1} days ... `;
  }
  return result;
};

console.log(printForecast([17, 21, 23]));
