function modoEscuro() {
    var section = document.querySelector('section')
    var input1 = document.getElementsByTagName('input')[0]
    var input2 = document.getElementsByTagName('input')[1]
    document.body.style.backgroundImage = 'radial-gradient(circle, rgb(11, 28, 59) 0%, rgba(0,0,0,1) 100%)'
    document.body.style.transition = '2s'
    document.body.style.color = 'white'
    section.style.backgroundColor = 'rgb(7, 19, 61)'
    input2.style.backgroundColor = 'rgba(15, 47, 161, 0.78)'
    input2.style.color = 'white'
    input1.style.backgroundColor = 'rgba(19, 51, 167, 0.78)'
    input1.style.color = 'white'
}
function modoClaro() {
    var section = document.querySelector('section')
    var input1 = document.getElementsByTagName('input')[0]
    var input2 = document.getElementsByTagName('input')[1]
    document.body.style.backgroundImage = 'radial-gradient(circle, rgb(204, 238, 15), rgba(7, 74, 80, 0.906))'
    document.body.style.transition = '2s'
    document.body.style.color = 'black'
    section.style.backgroundColor = 'rgba(215, 212, 127, 0.561)'
    input2.style.backgroundColor = 'rgba(144, 255, 100, 0.406)'
    input2.style.color = 'black'
    input1.style.backgroundColor = 'rgba(144, 255, 100, 0.406)'
    input1.style.color = 'black'
}