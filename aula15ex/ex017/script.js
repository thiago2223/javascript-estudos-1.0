function contar() {
    var inicio = (document.querySelector("input#txtinicio"));
    var fim = (document.querySelector("input#txtfim"));
    var passo = (document.querySelector("input#txtpasso"));
    var res = document.querySelector("div#res");
    res.innerHTML = "Contando: <br>";
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Preencha todos os campos!");
        res.innerHTML = "Impossivel contar";
    } else {
        res.innerHTML = "Contando: <br>";        
        var p = Number(passo.value);
        var i = Number(inicio.value);
        var f = Number(fim.value);
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            // contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
