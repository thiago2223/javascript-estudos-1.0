let contador = 0
function clicar() {
    if (contador < 10) {
        contador++
        let res = document.getElementById('res')
        res.innerHTML = `numero de cliques: ${contador}`
    } else {
        alert('Limite atingido')
        res.innerHTML += '<p>Limite atingido</p>'
    }
}