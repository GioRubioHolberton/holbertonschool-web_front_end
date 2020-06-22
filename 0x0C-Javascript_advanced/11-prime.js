function countPrimeNumbers () {
    let pri = []
    for (let a = 2; a <= 100; a++) {
      if (a % 2 != 0)
        l = pri.push(a);
    }
    console.log(l);
}

let t0 = performance.now();
for(let b =1; b <= 100; b++) {
    countPrimeNumbers();
}
let t1 = performance.now();
console.log(
    "Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds."
    );