function numsToTen([arg1]) {
    let num = Number(arg1);

    if (num === 0) {
        console.log("zero");
    }
    if (num === 1) {
        console.log("one");
    }
    if (num === 2) {
        console.log("two");
    }
    if (num === 3) {
        console.log("three");
    }
    if (num === 4) {
        console.log("four");
    }
    if (num === 5) {
        console.log("five");
    }
    if (num === 6) {
        console.log("six");
    }
    if (num === 7) {
        console.log("seven");
    }
    if (num === 8) {
        console.log("eight");
    }
    if (num === 9) {
        console.log("nine");
    }

    if (num >= 10) {
        console.log("number too big")
    }
}
numsToTen([5]);