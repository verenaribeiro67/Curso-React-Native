const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNota = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNota)
console.log(notas1)

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNota)
console.log(notas2)

/*
//ForEach #2

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Verena', 'Luiz', 'Jean']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)

})


aprovados.forEach(nome => console.log(nome))
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) *


//Map #01

const nums = [1,2,3,4,5]

let resultado = nums.map(function (e){
    return e * 20
})

console.log(resultado)

const numerosImpares = [1,3,5,7,9]

let duplicaImpar = numerosImpares.map( function (e){
    return e * 2
})

console.log(duplicaImpar)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //transformação sucessiva
console.log(resultado)


//Map #02

Array.prototype.map2 =  function (callback){

    const newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50}'
] //tipo jSON

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

const pessoa = [
    '{"nome": "Verena", "naturalidade": "Paraense"}',
    '{"nome": "Luiz", "naturalidade": "Paraense"}',
    '{"nome": "Josiane", "naturalidade": "Paraense"}',
]

const transformObj = json => JSON.parse(json)
const apenasNaturalidade = n => n.naturalidade

const resolucao = pessoa.map(transformObj).map(apenasNaturalidade)
console.log(resolucao)


//filter

 Array.prototype.filter2 = function (callback) {

     let produtosEscolhidos = []

     for (let i = 0; i < this.length; i++) {
         if(callback(this[i], i,this)) {
             produtosEscolhidos.push(this[i])
         }
     }
     return produtosEscolhidos
 }

const produtos = [
     {nome: "Notebook", preco: 2499, fragil: true},
     {nome: "Ipad Pro", preco: 4199, fragil: true},
     {nome: "Copo de Vidro", preco: 12.49, fragil: true},
     {nome: "Copo de Plastico", preco: 18.99, fragil: false}
 ]

 let apenasFragil = f => f.fragil = true
 let apenasCaro = c => c.preco >= 500

 console.log(produtos.filter2(apenasFragil).filter2(apenasCaro))

//Reduce

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual){
console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)
console.log(resultado)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log('Todos são bolsistas? ',alunos.map( a => a.bolsista).reduce(todosBolsistas))

const quaisBolsistas = (resultado,bolsista) => resultado || bolsista
console.log('Tem algum bolsista?', alunos.map( a => a.bolsista).reduce(quaisBolsistas))

//Reduce #03

Array.prototype.reduce2 = function (callback){
let acumulador = this[0]
    for (let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i],i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]

console.log(nums.reduce2(soma))

//imperativo e declarativo

const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

//imperativa

let total1 = 0

for (let i = 0; i < alunos.length; i++) {
 total1+= alunos[i].nota
}

console.log(total1/alunos.length)

//declarativa

const getNota = alunos => alunos.nota

const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 /alunos.length)


//Concat

const filhas = [
    'Valeskah', 'Cibalena'
]

const filhos = [
    'Washington','Wesclei'9008888888888
]

const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)

console.log([].concat([1,2], [3,4],5, [[ 6,7 ]]))
*/