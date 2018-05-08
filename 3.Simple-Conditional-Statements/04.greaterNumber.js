function greaterNumber([arg1, arg2]) {
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);

    if (num1 > num2) {
        console.log("Greater number: " +  num1);
    } else {
        console.log("Greater number: " +  num2);
    }
}
greaterNumber([4,8]);