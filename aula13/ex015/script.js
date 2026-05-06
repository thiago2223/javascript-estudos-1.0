function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) { // MASCULINO
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'pexels-jonathanborba-18293329.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'pexels-caleboquendo-7938623.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'pexels-eric-moura-859101902-28439169.jpg')
            } else {
                img.setAttribute('src', 'pexels-raymart-arnino-1948344-13790576.jpg')
            }
        } else { // FEMININO
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'pexels-kema-12257911.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'pexels-artempodrez-7048346.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'istockphoto-1592147563-2048x2048.jpg')
            } else {
                img.setAttribute('src', 'istockphoto-1915382108-2048x2048.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}