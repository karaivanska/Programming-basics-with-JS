function invalidNumber([arg1]) {
    let num = Number(arg1);

    if (num > 100 && num < 200 || num === 0){
        console.log();
    } else {
        console.log('invalid');
    }
}