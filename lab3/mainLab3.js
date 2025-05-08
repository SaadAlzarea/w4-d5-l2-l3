let stopButton = document.getElementById("stopButton").onclick = function (){
    document.getElementById("stopLight").style.backgroundColor =" red"
    document.getElementById("goLight").style.backgroundColor =" #111"
    document.getElementById("slowLight").style.backgroundColor ="#111"
}

let slowButton = document.getElementById("slowButton").onclick = function (){
    document.getElementById("stopLight").style.backgroundColor =" #111"
    document.getElementById("goLight").style.backgroundColor =" #111"
    document.getElementById("slowLight").style.backgroundColor ="orange"
}

let goButton = document.getElementById("goButton").onclick = function (){
    document.getElementById("slowLight").style.backgroundColor ="#111"
    document.getElementById("stopLight").style.backgroundColor =" #111"
    document.getElementById("goLight").style.backgroundColor =" green"
}