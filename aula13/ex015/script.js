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
            if (idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'pexels-raymart-arnino-1948344-13790576.jpg')
            } else if (idade < 21 && idade > 15) {
                // Jovem
                img.setAttribute('src', '')
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        } else if (fsex[1].checked) { // CORREÇÃO: Adicionado o "if" aqui
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)        
    }
}