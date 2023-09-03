function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputTemp, outputUnit;
  
    if (inputUnit === 'celsius') {
      outputTemp = (inputTemp * 9/5) + 32;
      outputUnit = 'Fahrenheit';
    } else if (inputUnit === 'fahrenheit') {
      outputTemp = (inputTemp - 32) * 5/9;
      outputUnit = 'Celsius';
    } else {
      return;
    }
  
    document.getElementById('outputTemp').textContent = outputTemp.toFixed(2);
    document.getElementById('outputUnit').textContent = outputUnit;
  }
  