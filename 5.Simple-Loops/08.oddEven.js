function oddEven(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            oddSum += Number(args[i]);
        } else {
            evenSum += Number(args[i]);
        }
    }
    if (oddSum === evenSum) {
        console.log('Yes');
        console.log('Sum = ' + oddSum);
    } else {
        let diff = Math.abs(oddSum - evenSum);
        console.log('No');
        console.log('Diff = ' + diff);
    }

}