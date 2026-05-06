function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('tudo') // A section
    var corpo = window.document.body // O fundo da página
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        msg.innerHTML += '<p>Bom dia!</p>'
        img.style.backgroundImage = "url('pexels-edanur-sonkaya-194758981-16077009.jpg')"
        corpo.style.backgroundColor = '#e2cd9f' // Amarelo manhã
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        msg.innerHTML += '<p>Boa tarde!</p>'
        img.style.backgroundImage = "url('pexels-imvituu-81842971-9395867.jpg')"
        corpo.style.backgroundColor = '#b9846f' // Laranja tarde
    } else {
        // BOA NOITE
        msg.innerHTML += '<p>Boa noite!</p>'
        img.style.backgroundImage = "url('pexels-bertellifotografia-1144690.jpg')"
        corpo.style.backgroundColor = '#515154' // Cinza escuro noite
    }
}