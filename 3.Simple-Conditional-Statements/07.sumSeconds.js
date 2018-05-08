function sumSeconds([arg1, arg2, arg3]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    let sum = num1 + num2 + num3;
    let mins = Math.floor(sum / 60);
    let secs = sum % 60;

    if (secs <= 9) {
        secs = "0" + secs;
    }
    console.log(mins + ":" + secs);
}