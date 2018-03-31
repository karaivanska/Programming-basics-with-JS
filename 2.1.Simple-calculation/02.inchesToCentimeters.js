function inchesToCentimeters([arg1]){
    let inaches = parseFloat(arg1);
    let centimeters = inaches * 2.54;
    console.log("centimeters = " + centimeters);
}
inchesToCentimeters([5]);