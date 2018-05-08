function cinema([arg1, arg2, arg3]) {
    let type = arg1;
    let r = Number(arg2);
    let c = Number(arg3);

    switch (type) {
        case 'Premiere': console.log((r * c * 12).toFixed(2) + ' ' + 'leva'); break;
        case 'Normal': console.log((r * c * 7.5).toFixed(2) + ' ' + 'leva'); break;
        case 'Discount': console.log((r * c * 5).toFixed(2) + ' ' + 'leva'); break;

        default:
    }
}