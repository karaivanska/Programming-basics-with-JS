function twoKplusOne([arg]) {
    let n = Number(arg);
    let num = 1;

    while (num <= n) {
        console.log(num);
        num = num * 2 + 1;
    }
}