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

    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    function signUp (id, use, email, password, creat, islog){

      const newUser = {
        _id: id,
        username: use,
        email: email,
        password: password,
        createdAt: creat,
        isLoggegIn: islog
      }

      for (i=0; i<users.length;i++){
        if (newUser._id === users[i]._id || newUser.email === users[i].email){
          console.log('utente già esistente')
          return;
        }
      }

      users.push(newUser)
    }

    signUp('jhyr', 'Luca', 'luca@luca.gmail.com', 'ciaociao12', '08/01/2020 10:00 AM', true)
    console.log(users)

    function signIn(nome, pass){

      for (i=0; i<users.length;i++){
        if (nome === users[i].username && pass === users[i].password){
          console.log('Accesso completato')
         return
        }
      }
      console.log('accesso negato')
    }

    signIn('Luca', 'ciaociao12')

   
    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function rateProduct(id, oggetto){

  for (i=0; i<products.length;i++){
    if (id === products[i]._id){
      products[i].ratings.push(oggetto)
    }
  }
}

rateProduct('hedfcg', {userId: 'ut14ou', rate: 4.5})
console.log(products)