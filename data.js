const numerino = document.getElementById('numerino')
const numerono = document.getElementById('numerone')
const aggiungere = document.getElementById('aggiungere')
const diminuire = document.getElementById('diminuire')
const azzera = document.getElementById('azzera')

let counterB = 0
let counterp = 0

function counterplus (){
  counterB++;
  counterp++;

  return{
    counterB,
    counterp
  };
}

function countermenus(){
  counterB--;
  counterp++;

  if ( counterB < 0){
    counterB = 0
  }

  return {
    counterB,
    counterp
  };
}


aggiungere.addEventListener('click', ()=>{

  counterplus();
  numerino.innerHTML = counterp;
  numerono.innerHTML = counterB;
})

diminuire.addEventListener('click', ()=>{

  countermenus();
  numerino.innerHTML = counterp;
  numerono.innerHTML = counterB;
})

azzera.onclick = function azzera (){

  counterB = 0
  counterp = 0
  numerino.innerHTML = counterp
  numerono.innerHTML = counterB
}