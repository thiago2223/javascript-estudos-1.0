function saudacao() {
    var nome = document.querySelector('input#txtnome').value
    var res = document.querySelector('div#res')
    res.innerHTML = `<span>Ola, ${nome}!</span>`
    if (nome == '') {
        res.innerHTML = 'Preencha o campo acima'
    }
}