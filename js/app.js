//Definindo dimensões do palco
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
nivel = nivel.replace('?', '')
var TempoCriarMosquito = 1500

if (nivel === 'normal') {
    TempoCriarMosquito = 1500
} else if (nivel === 'dificil') {
    TempoCriarMosquito = 1000
} else if (nivel === 'batman') {
    TempoCriarMosquito = 750
}

function tamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    // console.log(altura, largura)
}

tamanhoPalco()

var conometro = setInterval(function () {

    tempo -= 1
    if (tempo < 0) {
        clearInterval(conometro)
        clearInterval(criarMosquito)
        window.location.href = 'you_win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

//Criar posições randômicas
function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // Controlando os pontos de vida
        if (vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

            vidas++
        }

    }


    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100


    //Ajustando casos de posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')

    mosquito.src = "img/mosca.png"
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//Tamanhos randômicos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    // console.log(classe)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//Lado A e lado B
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
