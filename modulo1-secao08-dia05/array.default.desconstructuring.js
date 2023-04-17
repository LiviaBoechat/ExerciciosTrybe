// 1. Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

// fez a desesruturação do ARRAY dentro do parâmetro já, pois ele é igualado ao parâmetro passado na chamada da função. Daria no mesmo de const [e1, e2, e3] = myList
const swap = ([e1, e2, e3]) => [e3, e2, e1];

  console.log(swap([5, 2, 3]));

// 2. Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => {
  return {
    name,
    brand,
    year,
  };
}
console.log(toObject(['Palio', 'Fiat', 2019]));

// 3. Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

const greet = (name, greeting = 'Hi') => {
  return `${greeting} ${name}`
}

console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// 4. Escreva uma função getLastName que receba como parâmetro um objeto contendo informações de uma pessoa. Essa função deve retornar a propriedade lastName para o objeto passado, porém, caso o objeto não tenha essa propriedade, a função deve retornar a mensagem lastName não preenchido.

const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student2 = {
  name: `Vitor`,
  age: 20,
}

const getLastName = ({lastName = 'lastName não preenchido'}) => {
  return lastName
}

console.log(getLastName(student1));
console.log(getLastName(student2));

// 5. Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:


const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Para desestruturar uma array dentro de outra array, deve-se atentar à abertura e fechamento dos colchetes dentro da desestruturação. A desestruturação torna cada elemento de um array INDEPENDENTE, podendo ser chamado a qlq momento sem ter que ser associado ao array a que ele pertence. (o msm acontece com desestruturação de objetos e suas propriedades/chaves)
const [ aluno1, [ aluno2, aluno3 ], [aluno4, aluno5 ] ] = moreStudents;

console.log(aluno1, aluno2, aluno3, aluno4, aluno5);
