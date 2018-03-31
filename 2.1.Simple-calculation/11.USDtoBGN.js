function dollarsToLeva([arg1]){
    let d = Number(arg1);
    let l = 1.79549;
    let leva = (d * l).toFixed(2);
    console.log(`${leva} BGN`);
}
dollarsToLeva([23]);