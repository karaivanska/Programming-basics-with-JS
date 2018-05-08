function leftRightSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= n; i++) {
        leftSum += Number(args[i]);
    }
    for (let i = n + 1; i <= 2 * n; i++) {
        rightSum += Number(args[i]);
    }

    let sumDiff = Math.abs(leftSum - rightSum);

    if (sumDiff == 0) {
        console.log('Yes, sum = ' + rightSum);
    } else {
        console.log('No, diff = ' + sumDiff);
    }
}