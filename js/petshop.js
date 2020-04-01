let divPet = document.getElementById('pets')

let listaDeAnimais = [
    {
        tipo: "Cachorro",
        nome: "Nina",
        idade: 14,
        raca: "Cocker Spaniel",
        porte: "Médio",
        sexo: "F",
        vacinado: true,
        tutor:{
            nome:"Josefina",
            telefone: "(11)99999-9999"
        }
    },
    {
        tipo: "Gato",
        nome: "Sofia",
        idade: 8,
        raca: undefined,
        porte: "Médio",
        sexo: "F",
        vacinado: true,
        tutor:{
            nome:"Josefina",
            telefone: "(11)99999-9999"
        }
    }
]


const adicionarPet = (tipo, nome, idade, raca, porte, sexo, vacinado, tutor) => {
    let novoPet = {
        tipo,
        nome,
        idade,
        raca,
        porte,
        sexo,
        vacinado,
        tutor
    }
    listaDeAnimais.push(novoPet)

    console.log("Pet adicionado com sucesso!")
}

// adicionarPet("Pássaro", "Pina", 2, "Calopsita", "Pequeno", "F", true, {nome: "José", telefone: "(11)5999-9999"})

const visualizarPets = () => {
    
    listaDeAnimais.forEach((animalDaLista,index)=>{
    
    let animal = animalDaLista

    let divConteudoPet = document.createElement('div')
    divConteudoPet.setAttribute('class','bixinho')

    let pSeparador = document.createElement('p')
    pSeparador.textContent = "-----------------------------"

    let pNomeAnimal = document.createElement('p')
    pNomeAnimal.textContent = "Nome do Animal: " + animal.nome

    let pTipoAnimal = document.createElement('p')
    pTipoAnimal.textContent = "Tipo de Animal: " + animal.tipo

    divConteudoPet.appendChild(pSeparador)
    divConteudoPet.appendChild(pNomeAnimal)
    divConteudoPet.appendChild(pTipoAnimal)

    divPet.appendChild(divConteudoPet)
    })}


// const visualizarPets = () =>{
//     for(let i = 0; i<listaDeAnimais.length; i++){
//         let animal = listaDeAnimais[i]

//         let divConteudoPet = document.createElement('div')
//         divConteudoPet.setAttribute('class','bixinho')

//         let pSeparador = document.createElement('p')
//         pSeparador.textContent = "-----------------------------"

//         let pNomeAnimal = document.createElement('p')
//         pNomeAnimal.textContent = "Nome do Animal: " + animal.nome

//         let pTipoAnimal = document.createElement('p')
//         pTipoAnimal.textContent = "Tipo de Animal: " + animal.tipo

//         divConteudoPet.appendChild(pSeparador)
//         divConteudoPet.appendChild(pNomeAnimal)
//         divConteudoPet.appendChild(pTipoAnimal)

//         divPet.appendChild(divConteudoPet)
//     }
// }

const buscarPet = nomePet => { 
    let resultado = listaDeAnimais.find((animal) => animal.nome === nomePet)
    if (resultado == undefined){
        console.log('Animal não encontrado')
    } else{
        console.log('Animal encontrado')
    }
}

// buscarPet('Zezin')
// buscarPet('Nina')

const removerPet = nomePet => {
    let totalDePets = listaDeAnimais.length
    listaDeAnimais = listaDeAnimais.filter((animal)=>{
        return animal.nome != nomePet
    })

    if(totalDePets == listaDeAnimais.length){
        return console.log("Não encontramos um animal com o nome de: " + nomePet)
    }
    console.log("O animal " + nomePet + " foi removido com sucesso")
}