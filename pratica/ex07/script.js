function analisar() {
    // 1. Pegamos os elementos e valores
    let txti = document.getElementById('txtinicio');
    let txtf = document.getElementById('txtfim');
    let res = document.getElementById('res');

    // Validação básica: se os campos estiverem vazios, não faz nada
    if (txti.value.length == 0 || txtf.value.length == 0) {
        res.innerHTML = "Preencha os números de início e fim!";
        return; // Para a função aqui
    }

    let inicio = Number(txti.value);
    let fim = Number(txtf.value);
    let somaPesos = 0;

    res.innerHTML = "<strong>Analisando lote...</strong><br>";

    // 2. O Loop FOR (A Esteira)
    for (let i = inicio; i <= fim; i++) {
        let setor = (i % 2 == 0) ? "Setor A (Par)" : "Setor B (Ímpar)";
        let aviso = "";

        // Regra especial: 7 ou 13
        if (i == 7 || i == 13) {
            aviso = " - ⚠️ INSPEÇÃO NECESSÁRIA";
        }

        somaPesos += i;
        res.innerHTML += `<p>Caixa ${i}: ${setor}${aviso}</p>`;
    }

    // 3. A Confirmação Final (Usando IF para não travar o navegador)
    // O setTimeout serve para dar tempo de o navegador desenhar o texto acima antes do alerta aparecer
    setTimeout(() => {
        if (confirm("Deseja ver o relatório de peso total do lote?")) {
            res.innerHTML += `<hr><p><strong>Relatório Final:</strong> O peso total é ${somaPesos}kg.</p>`;
        } else {
            res.innerHTML += `<hr><p>Relatório de peso ignorado.</p>`;
        }
    }, 100); 
}