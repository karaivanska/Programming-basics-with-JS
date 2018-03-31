function celsiusToFahrenheit([arg1]){
    let c = parseFloat(arg1);
    let f = Math.round(c * 1.8) + 32;
    console.log(f);
}
celsiusToFahrenheit([15]);