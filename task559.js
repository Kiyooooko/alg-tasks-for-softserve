const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const isMersennePrime = num => {
    if (!isPrime(num)) {
        return false;
    };
    let n = num + 1;
    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        };
        n /= 2;
    };
    return true;
};

const printMersennePrimes = num => {
    for (let i = 0; i < num; i++) {
        if (mersennePrime(i)) {
            console.log(i)
        }
    }
}

console.log(printMersennePrimes(10000))