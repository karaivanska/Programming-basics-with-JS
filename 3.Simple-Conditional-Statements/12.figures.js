function figures([arg1, arg2, arg3]) {
    let figure = arg1;
    let wr = Number(arg2);
    let wh = Number(arg3);

    let square = arg2 * arg2;
    let rectangle = arg2 * arg3;
    let cicle = Math.PI * (arg2 * arg2);
    let triangle = (arg2 * arg3) / 2;

    if (figure === "square") {
        console.log(square);
    } else if (figure === "rectangle") {
        console.log(rectangle.toFixed(1));
    } else if (figure === "cicle") {
        console.log(cicle.toFixed(3));
    } else if (figure === "triangle") {
        console.log(triangle);
    }
}