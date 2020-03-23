
// let animal = {
//     tipo: "Cachorro",
//     nome: "Nina",
//     idade: 14,
//     raca: "Cocker Spaniel",
//     porte: "Médio",
//     sexo: "F",
//     vacinado: true,
//     tutor:{
//         nome:"Josefina",
//         telefone: "(11)99999-9999"
//     }
// }

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

// function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
//     let novoPet = {
//         tipo: tipo,
//         nome: nome,
//         idade: idade,
//         raca: raca,
//         porte: porte,
//         sexo: sexo,
//         vacinado: vacinado,
//         tutor: tutor
//     }
//     listaDeAnimais.push(novoPet)

//     console.log("Pet adicionado com sucesso!")
// }

//quando o nome do atributo e da variável for igual pode fazer assim:
function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
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

function visualizarPets(){
    for(let i = 0; i<listaDeAnimais.length; i++){
        let animal = listaDeAnimais[i]
        console.log("-----------------------------")
        console.log("Nome do animal: " + animal.nome)
        console.log("Tipo de animal: " + animal.tipo)
        console.log("Sexo do animal: " + animal.sexo)
        console.log("Nome do tutor: " + animal.tutor.nome)
    }
}