function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatoria(n - 1)
    }
}
console.log(fatorial(5))