function guessPassword([arg1]) {
    let pass1 = arg1;
    let pass2 = "s3cr3t!P@ssw0rd";

    if (pass1 !== pass2) {
        console.log("Wrong password!");
    } else {
        console.log("Welcome");
    }
}