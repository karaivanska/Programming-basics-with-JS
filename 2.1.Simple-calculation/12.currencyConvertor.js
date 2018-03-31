function currencyConverter([arg1,arg2,arg3]){
    let amount = Number(arg1);
    let b = 100;
    let c = 12.35;
    let d = 150.35;
    let msg = "";

    switch (amount) {
        case 20:
            msg = (amount * 1.79549).toFixed(2);
            console.log(`${msg} BGN`);
            break;

        case b:
            msg = (amount / 1.95583).toFixed(2);
            console.log(`${msg} EUR`);

            break;

        case c:
            msg = (amount * 1.41133).toFixed(2);
            console.log(`${msg} GBP`);

            break;
        case d:
            msg = (amount / 1.0893).toFixed(2);
            console.log(`${msg} GBP`);

            break;
    }
}

