function fib (seq) {
    const fibArr = [0,1];
    if (seq < 1) return "The input value must be higher than 0";
    if (seq === 1) return [0];
    if (seq === 2) return [0,1];
    for (let i=2; i<seq; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
console.log(fib(1));
console.log(fib(4));
console.log(fib(10));