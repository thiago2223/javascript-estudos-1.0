function somar() {
    const input1 = document.getElementById('txtnum1')
    const input2 = document.getElementById('txtnum2')
    const res = document.getElementById('res')
    if (input1.value.length == 0 || input2.value.length == 0) {
        res.innerHTML = 'Preencha todos os campos'
    } else {
        const n1 = Number(input1.value)
        const n2 = Number(input2.value)
        const s = n1 + n2
        res.innerHTML = `A soma entre ${n1} e ${n2} é ${s}`
    }
}
function limpar() {
    document.getElementById('txtnum1').value = ''
    document.getElementById('txtnum2').value = ''
    document.getElementById('res').innerHTML = 'O resultado vai aparecer aqui'
}