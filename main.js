let nombreMessi;
let intentosRestantes;
let messiName = "lionel"
let messiNameCapital = "Lionel"

for(let i=1; i<=3; i++){
    nombreMessi = prompt("Ingresa el nombre de Messi");
    if(nombreMessi === messiName){
        alert("Excelente");
        break
    } else if (nombreMessi === messiNameCapital) {
        alert("Excelente");
        break
    }
    intentosRestantes = 3-i;
    alert("Te equivocaste, te quedan "+intentosRestantes+" intentos");
}