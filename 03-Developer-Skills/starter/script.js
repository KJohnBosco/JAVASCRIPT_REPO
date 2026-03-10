// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let max = temperatures[0];
let min = temperatures[0];

// Get Min & Max Temp
for (let iter = 1; iter < temperatures.length; ++iter) {
  // Ignore Sensor Errors
  if ((typeof temperatures[iter]) !== 'number') {
    console.log("Error Igmored successfully...");
    continue;
  }
  // Find Max
  if (temperatures[iter] > max) {
    max = temperatures[iter];
  }
  // Find Min
  if (temperatures[iter] < min) {
    min = temperatures[iter];
  }
}

console.log(`Max: ${max}
  Min: ${min}
  Amplitude: ${max - min}`);
*/

const measureKelvin = function (){
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees celsius")),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());