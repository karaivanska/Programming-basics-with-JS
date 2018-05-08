function pointInRectangleSec([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let x1 = Number(arg1);
    let x2 = Number(arg2);
    let y1 = Number(arg3);
    let y2 = Number(arg4);
    let y = Number(arg5);
    let x = Number(arg6);

    if ((x === x1 || x === x2) && (y > y1 && y < y2)){
        console.log('Border');
    } else if ((y === y1 || y === y2) && (x > x1 && x < x2)){
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}