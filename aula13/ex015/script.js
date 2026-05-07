function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    // Correção: value.length e verificação de ano futuro
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Uso de getElementsByName
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'pexels-raymart-arnino-1948344-13790576.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'pexels-kema-12257911.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'pexels-jonathanborba-18293329.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'pexels-caleboquendo-7938623.jpg')
            }
        } else if (fsex[1].checked) { // CORREÇÃO: Adicionado o "if" aqui
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'pexels-eric-moura-859101902-28439169.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'pexels-artempodrez-7048346.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'istockphoto-1915382108-2048x2048.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'istockphoto-1592147563-2048x2048.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)        
    }
}