/**
 * jokempo
 * @author yvis trindade 
 */

function jogar() {
    //validação da escolha do jogador
    //usamos o argumento checked para valdiar radion buttons e checked box
    if (document.getElementById('pedra').checked === false &&
        document.getElementById('papel').checked === false &&
        document.getElementById('tesoura').checked === false) {
        alert("selecione uma opção")
    } else {
        //logica principal 
        //sorteio da opção do computador
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }

        // logica para determinar empate ou declarar o vencedor
        if ((document.getElementById('pedra').checked === true && sorteio === 0)
            || (document.getElementById('papel').checked === true && sorteio === 1)
            || (document.getElementById('tesoura').checked === true && sorteio === 2)) {

            // alinha abaixo insere um texto na tag identificado
            document.getElementById('resultado').innerText = 'EMPATE'
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2)
            || (document.getElementById('papel').checked === true && sorteio === 0)
            || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = 'JOGADOR VENCEU'
        } else {
            document.getElementById('resultado').innerText = 'PC VENCEU'
        }
    }
}

function limpar() {
    document.getElementById('pc').src = "img/pc.png"
    document.getElementById('resultado').innerText = ""
}

