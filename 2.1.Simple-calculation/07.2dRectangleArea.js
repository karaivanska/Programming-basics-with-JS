function rectangleArea([arg1,arg2,arg3,arg4]){
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let h = Math.abs(y1 - y2);
    let b = Math.abs(x2 - x1);

    let area = h * b;
    let perimeter = (h + b)*2;
    console.log(area);
    console.log(perimeter);
}
rectangleArea([4,5,8,9]);