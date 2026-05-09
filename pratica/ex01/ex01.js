function cadastrar() {
    var pais = document.getElementById('txtpais').value
    var nome = document.getElementById('txtnome').value
    var data = document.getElementById('datancm').value
    var email = document.getElementById('txtemail').value
    var senha = document.getElementById('txtsenha').value
    var res = document.getElementById('res')
    if (pais == '' || nome == '' || data == '' || email == '' || senha == '') {
        window.alert('Preencha todos os campos!')
        res.innerHTML = 'Preencha todos os campos'
    } else {
        var genero = document.querySelector('input[name="genero"]:checked').value
        var idade = 2026 - Number(data.substring(0, 4))
        res.innerHTML = `Pais de origem: ${pais} <br> Nome: ${nome} <br> Data de nascimento: ${data} <br> E-mail: ${email} <br> Senha: ${senha} <br> Idade: ${idade} anos <br> Gênero: ${genero}`
    }
}