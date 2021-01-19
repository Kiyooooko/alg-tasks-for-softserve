const sum = (m, n) => {
    let suma = 0;
    for (let i = 0; i < m; i++) {
        suma += n % 10
        n /= 10
    }

    return Math.floor(suma)
}

console.log(sum(2, 123456))