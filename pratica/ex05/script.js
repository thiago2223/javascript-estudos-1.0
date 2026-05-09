function verificar() {
    let txtnum = document.getElementById('txtnum')
    const res = document.getElementById('res')
    if (txtnum.value.length == 0) {
        res.innerHTML = 'Preencha o campo acima'
        res.style.color = 'purple'
    } else {
        const num = Number(txtnum.value)
        if (num % 2 == 0) {
            res.innerHTML = `${num} é par`
            res.style.color = 'blue'
        } else {
            res.innerHTML = `${num} é impar`
            res.style.color = 'red'
        }
    }
}