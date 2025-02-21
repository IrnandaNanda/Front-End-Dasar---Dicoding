function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }

  convertCelsiusToFahrenheit(90) // Cara Pertama Pemanggilan function

  const temperatureInCelcius = 90;
  convertCelsiusToFahrenheit(temperatureInCelcius); // Pemanggilan function kedua dengan cara dimasukan kedalam variabel