function tradeComission([arg1, arg2]) {
    let cityName = arg1;
    let quantity = Number(arg2);

    if (cityName == 'Sofia') {
        if (quantity > 10000) {
            console.log((quantity * 0.12).toFixed(2));
        } else if (quantity <= 10000 && quantity > 1000) {
            console.log((quantity * 0.08).toFixed(2));
        } else if (quantity <= 1000 && quantity > 500) {
            console.log((quantity * 0.07).toFixed(2));
        } else if (quantity <= 500 && quantity > 0) {
            console.log((quantity * 0.05).toFixed(2));
        }
    } else if (cityName == 'Varna') {
        if (quantity > 10000) {
            console.log((quantity * 0.13).toFixed(2));
        } else if (quantity <= 10000 && quantity > 1000) {
            console.log((quantity * 0.1).toFixed(2));
        } else if (quantity <= 1000 && quantity > 500) {
            console.log((quantity * 0.075).toFixed(2));
        } else if (quantity <= 500 && quantity > 0) {
            console.log((quantity * 0.045).toFixed(2));
        }
    } else if (cityName == 'Plovdiv') {
        if (quantity > 10000) {
            console.log((quantity * 0.145).toFixed(2));
        } else if (quantity <= 10000 && quantity > 1000) {
            console.log((quantity * 0.12).toFixed(2));
        } else if (quantity <= 1000 && quantity > 500) {
            console.log((quantity * 0.080).toFixed(2));
        } else if (quantity <= 500 && quantity > 0) {
            console.log((quantity * 0.055).toFixed(2));
        } else {
            console.log('error')
        }
    } else {
        console.log('error');
    }
}