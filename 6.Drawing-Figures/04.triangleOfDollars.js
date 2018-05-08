function dollarTriangle([arg1]) {
    let n = Number(arg1);

    for (var i = 1; i <= n; i++) {
        console.log("$ ".repeat(i));
    }
}