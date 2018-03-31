function radiansToDegrees([arg1]){
    let r = parseFloat(arg1);
    let c = Math.round(r * 180 / Math.PI);
    console.log(c);
}
radiansToDegrees([6]);