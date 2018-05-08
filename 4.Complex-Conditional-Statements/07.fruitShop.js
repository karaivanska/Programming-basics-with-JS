function fruitShop([arg1, arg2, arg3]) {
    let fruit = arg1.toLowerCase();
    let day = arg2.toLowerCase();
    let quantity = Number(arg3);

    if (day == 'saturday' || day == 'sunday') {
        if (fruit == 'banana') {
            console.log(quantity * 2.7);
        } else if (fruit == 'apple') {
            console.log(quantity * 1.25);
        } else if (fruit == 'orange') {
            console.log(quantity * 0.9);
        } else if (fruit == 'grapefruit') {
            console.log(quantity * 1.6);
        } else if (fruit == 'kiwi') {
            console.log(quantity * 3);
        } else if (fruit == 'pineapple') {
            console.log(quantity * 5.6);
        } else if (fruit == 'grapes') {
            console.log(quantity * 4.2);
        }
    } else if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
        if (fruit == 'banana') {
            console.log(quantity * 2.5);
        } else if (fruit == 'apple') {
            console.log(quantity * 1.2);
        } else if (fruit == 'orange') {
            console.log(quantity * 0.85);
        } else if (fruit == 'grapefruit') {
            console.log(quantity * 1.45);
        } else if (fruit == 'kiwi') {
            console.log(quantity * 2.7);
        } else if (fruit == 'pineapple') {
            console.log(quantity * 5.5);
        } else if (fruit == 'grapes') {
            console.log(quantity * 3.85);
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }
}