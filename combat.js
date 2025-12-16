let combattant1  = {
    name: "Java",
    vie: 100,
    attaque: 15,
    précision: 0.6
}
console.log

function précision (verifprécision){
    return Math.random() < précision 
}

function attaque(combattant1, combattant2){
    if (verifprécision(combattant1.précision)){
       console.log(combattant2.vie - combattant1.attaque)
        console.log(combattant1.name + "touche" + combattant2.name + "lui enlève" + combattant1.attaque + "points de vie")
    }
}


let combattant2 = {
    name: "Blob",
    vie: 110,
    attaque: 27,
    précision: 0.2
}

while (combattant1.vie > 0 & combattant2.vie > 0){
    console.log ("Nouveau tour")
    if (combattant1.vie <= 0){
        console.log(combattant2.name + "a gagné!")
    } else (combattant2.vie <=0){
        console.log(combattant1.name + "a gagné!")
    }
}
