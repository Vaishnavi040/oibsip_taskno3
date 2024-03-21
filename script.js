function convert() {
    let inputTemp = parseFloat(document.getElementById('inputTemp').value);
    let unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (inputTemp * 9/5) + 32;
        document.getElementById('result').innerHTML = `${inputTemp} Celsius is equal to ${result.toFixed(2)} Fahrenheit`;
    } else if (unit === 'fahrenheit') {
        result = (inputTemp - 32) * 5/9;
        document.getElementById('result').innerHTML = `${inputTemp} Fahrenheit is equal to ${result.toFixed(2)} Celsius`;
    }
}
