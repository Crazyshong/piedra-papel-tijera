function getComputerChoice(){
    const objeto = ["piedra", "papel", "tijera"]
    const aleatorio = objeto[Math.floor(Math.random()*objeto.length)]

    return aleatorio

}
var computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection){
    let material = playerSelection.toLowerCase()

    if (!(material == "piedra" || material == "papel" || material == "tijera")){
        return "No es un elemeto para jugar! Escoje entre piedra, papel o tijera!"
    }

    if (material == "piedra" && computerSelection == "piedra") {
        return "Es empate!"
    } else {
        if (material == "piedra" && computerSelection == "tijera"){
            return "Has ganado! Piedra rompe Tijeras"
        }else{
            if (material == "piedra" && computerSelection == "papel"){
                return "Has perdido! Papel envuelve a Piedra"
            }
        }
    }

    if (material == "papel" && computerSelection == "papel") {
        return "Es empate!"
    } else {
        if (material == "papel" && computerSelection == "piedra"){
            return "Has ganado! Papel envuelve a Piedra"
        }else{
            if (material == "papel" && computerSelection == "tijera"){
                return "Has perdido! Tijera corta Papel"
            }
        }
    }

    if (material == "tijera" && computerSelection == "tijera") {
        return "Es empate!"
    } else {
        if (material == "tijera" && computerSelection == "papel"){
            return "Has ganado! Tijera corta Papel"
        }else{
            if (material == "tijera" && computerSelection == "piedra"){
                return "Has perdido! Piedra rompe Tijeras"
            }
        }
    }
}



var playerSelection = "tijera"

console.log(playRound(playerSelection, computerSelection))

function game(){

}