function sumOfVowels([arg1]) {
    let text = arg1;
    let textLength = text.length;
    let sum = 0;

    for (let i = 0; i < textLength; i++) {
        let currentLetter = text[i];

        switch (currentLetter) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;

            default:
        }
    }
    console.log(sum);
}