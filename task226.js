const multipleNumbers = (m, n) => {
    for (let i = 1; i < m * n; i++) {
        if (i % m === 0 && i % n === 0) {
            console.log(i)
        }
    }
}
console.log(multipleNumbers(15, 10))