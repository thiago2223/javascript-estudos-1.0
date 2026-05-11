let num = [2, 5, 6 ,2 ,5 ,8 ,2 ,9 ,1 ,0]
num.sort()
let pos = num.indexOf(0)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor aparece na posição ${pos}`)
}
