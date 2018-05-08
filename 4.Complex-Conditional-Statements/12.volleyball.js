function volleyball([arg1, arg2, arg3]) {
    let year = arg1;
    let p = parseInt(arg2);
    let h = parseInt(arg3);

    let weekendsInSofia = (48 - h) * 0.75;
    let holidays = (p * (2 / 3));
    let sumInSofia = (weekendsInSofia + h + holidays);
    let result = (0.15 * sumInSofia) + sumInSofia;

    switch (year) {
        case 'leap': console.log(Math.floor(result)); break;
        case 'normal': console.log(sumInSofia); break;
        default:
    }
}