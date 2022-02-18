// const pokemonJson = '{"count":1126,"next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]}'

// const pokemonObj = JSON.parse(pokemonJson)

// const teste3 = pokemonObj.results

// for(let pok of teste3){
//     console.log(pok.url)
// }
// for(let pok of teste3){
//     console.log(pok.name)
// }

// // função dentro de objeto

// const paulo = {
//   nome: "Rodrigo",
//   sobrenome: "Oliveira",
//   idade: 21,
//   animais: ["camelo", "ovelha"],
//   exibirNome() {
//     console.log(`o nome da pessoa é ${this.nome}`);
//   },
// };
// const ana = {
//   nome: "Rodrigo",
//   sobrenome: "Oliveira",
//   idade: 21,
//   animais: ["leao", "sapo"],
//   exibirNome() {
//     console.log(`os animais são ${this.animais}`);
//   },
// };

// ana.exibirNome();
// paulo.exibirNome();

// escopo

// // this em um arquivo .js executando a partir do Node, o this é um objeto vazio
// console.log(this);

// // dentro de uma function representa um objeto global
// function funcaoNormal() {
//   console.log(47, this);
// }

// funcaoNormal();

// // this dentro de uma função arrow mantem o this do escopo anterior
// const functionArrow = () => {
//   console.log(153, this);
// };

// this.teste = 4 * 9

// const paulo = {
//   nome: "Rodrigo",
//   sobrenome: "Oliveira",
//   idade: 21,
//   animais: ["camelo", "ovelha"],
//   exibirNome() {
//     console.log(`o nome da pessoa é ${this.nome}`);
//   },
//   testeDeEscopo() {
//     console.log(this.animais);
//   },
//   testeDeEscopo2: () => {
//     console.log(this.teste - 2);// acessa valores do escopo anterior
//   },
// };

// paulo.exibirNome();
// paulo.testeDeEscopo();
// paulo.testeDeEscopo2();

// // uma classe nada mais é que uma função que ao ser executada gera um objeto

// var teste = () => {
//     return 3 * 8
// }

// const teste = 30

// class Pessoa {
//     constructor(nome, sobrenome, idade, rg) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.idade = idade
//         this.rg = rg
        
//     }
//     exibirNome() {
//         console.log(`meu nome é ${this.nome} ${this.sobrenome} minha idade é ${this.idade}`)
//     }
//     exibirRg() {
//         console.log(`meu rg é ${this.rg}`)
//     }
   
// }

// const carlos = new Pessoa('Rodrigo', 'de oliveira', 21, 223345)
// const ana = new Pessoa('Rodrigo', 'de oliveira', 21, 223345)
// const joao = new Pessoa('Rodrigo', 'de oliveira', 21, 223345)

// carlos.exibirNome()
// carlos.exibirRg()
// ana.exibirNome()
// ana.exibirRg()


// console.log(result)

// const paulo = {
//     nome: 'paulo',
//     sobrenome: 'oliveira',
//     idade: 21
// }

// const {nome, sobrenome, idade} = paulo
// console.log(Object.keys(paulo))
// console.log(Object.values(paulo))

// console.log(Object.entries(paulo))

// for (const [key, value] of Object.entries(paulo)) {
//     console.log(key,value)
// }

