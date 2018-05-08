function figure([arg1, arg2, arg3]) {
    let h = parseInt(arg1);
    let x = parseInt(arg2);
    let y = parseInt(arg3);

    let isInHorizontal = (x > 0 && x < h * 3) && (y > 0 && y < h); // true or false
    let isInVertical = (x > h && x < h * 2) && (y > 0 && y < h * 4); // true or false

    let isOutOfHorizontal = (x < 0 || x > h * 3) && y <= h;
    let isOutOfVertical = ((x < h || x > h * 2) && y > h) || (y < 0 || y > h * 4);

    if (isInHorizontal || isInVertical) {
        console.log("inside");
    } else if (isOutOfHorizontal || isOutOfVertical) {
        console.log("outside");
    } else {
        console.log("border");
    }
}