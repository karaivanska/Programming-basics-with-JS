function minimumNumber(args) {
    let n = Number(args[0]);
    let min = Number.POSITIVE_INFINITY;

    for (i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum < min) {
            min = currentNum;
        }
    }
    console.log(min);
}