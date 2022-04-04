function creoGriglia(valore){
    const celle = document.querySelector(".container");

    for (let i = 1; i <= valore; i++) {
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.innerHTML = `${i}`
        celle.append(cella)
        cella.addEventListener('click', function() {
            cella.style.backgroundColor = "aqua";            
        }) 

    }
}

creoGriglia()

const bottone = document.querySelector("button")

bottone.addEventListener('click', function(){
    const lista = document.querySelector("select").value;
    console.log(lista)
    let array = [];
    array.push(lista)
    console.log(array);
    if(lista === "easy"){
        creoGriglia(100);
    }else if(lista === "medium"){
        creoGriglia(81)
    }else if(lista === "hard"){
        creoGriglia(49) 
    }
    
});






