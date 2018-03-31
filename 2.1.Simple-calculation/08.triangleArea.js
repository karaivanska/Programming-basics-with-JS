function triangleArea([arg1,arg2]){
    let a = Number(arg1);
    let h = Number(arg2);
    let area = parseFloat(a * h / 2).toFixed(2);

    console.log(area);

}
triangleArea([4,7]);