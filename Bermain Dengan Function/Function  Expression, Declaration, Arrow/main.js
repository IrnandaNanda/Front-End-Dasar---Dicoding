const convertCelciusToFahrenheit = function (temperature) {
    const result = (9/5) * temperature + 32;
    return result
}


/* 
function expression ialah tidak memiliki hoisting padanya sehingga kita tidak dapat memanggil atau menjalankan function ini sebelum dideklarasikan.
*/
const temperatureInFahrenheit = 90
console.log('Hasil Konversi : ', temperatureInFahrenheit)

convertCelciusToFahrenheit(90) // Ini tidak akan dijalankan atau dieksekusi


// Function sebagai first-class citizen : Artinya function dapat diberlakukan layaknya variabel
function multiply(a, b) {
    return a * b;
  }
  
  function calculate(operation, numA, numB) {
    return operation(numA, numB); //Menerima fungsi lain sebagai parameter dan memanggilnya
  }
  
  const result = calculate(multiply, 2, 4); //Fungsi multiply dikirim sebagai parameter ke calculate, lalu dipanggil
  console.log(result);
  
//Function di dalam function
function multiplier(x) {
    return function (num) {
        return x * num
    }
}

const double = (multiplier(10))
const triple = (multiplier(20))

console.log(double(2))
console.log(triple(5))