// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

// function getScore(score){
// var scoreA = score >= 9 && score <= 10;
// var scoreB = score >= 8 && score < 9;
// var scoreC = score >= 7 && score < 8;
// var scoreD = score >= 6 && score < 7;
// var scoreF = score < 6;
// var scoreErr;
// if (scoreA) {
//     console.log("A");
// }else if (scoreB) {
//     console.log("B");
// }else if (scoreC) {
//     console.log("C");
// }else if (scoreD) {
//     console.log("D");
// }else if (scoreF) {
//     console.log("F");
// }else{
//     scoreErr = "Err";
//     return scoreErr;
// }
// }
// getScore();


//  var empresa =() => {
//      var funcionario = [
//          {
//              name: 'jhon',
//              age: 34,
//              salary: 1500,
//              depart: 'sells'
//          },{
//              name: 'Mikel',
//              age: 24,
//              salary: 1200,
//              depart: 'stock'
//      },{
//              name: 'Kell',
//              age: 26,
//              salary: 2500,
//              depart: 'adm'
//      }
//      ]
//      console.table(funcionario);
//  }
// empresa();
// function Person(name){
//     this.name = name
//     this.see = () => {
//         return this.name + " is looking at"
//     }
//     this.walk =()=>{
//         return this.name + " is walking to "
//     }
//     this.puch=()=>{
//         return this.name + " puched"
//     }
// }
// const person1 = new Person("willian");
// const person2 = new Person("lucas");
// console.log(person2.see(),person1.name, person2.walk(),person1.name);
// console.log(person1.see(), person2.name, person1.walk(),person2.name,person1.puch(),person2.name);
//  let phrase = "essa frase vai substituir os espaços por _"
//  let phrase2 = "essa frase aqui vai ser lower e com '...' nos espaços"

//  let arrayPhrase = phrase.split(" ").join("_")
//  let arrayPhrase2 = phrase2.split(" ").join("...")

//  console.log(arrayPhrase.toLocaleUpperCase().concat("\n").concat(arrayPhrase2.toLocaleUpperCase()));



// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

// let family ={
//     incomes:[1500,3500],
//     expenses: [260.40,950,108.50,250]
// }

// function sum(array) {
//     var total = 0
//      for (let value of array) {
//          total += value;
//      }

//     return total
// }
// function getBalance(){
//          var getBalanceIncomes = sum(family.incomes)
//          var getBalanceExpenses = sum(family.expenses)

//     var total = getBalanceIncomes - getBalanceExpenses

//     var itsOk = total >= 0
//     var balanceMessage = "negativo"
//     if (itsOk) {
//         balanceMessage = "positivo"
//         console.log(`o seu saldo está ${balanceMessage.toLocaleUpperCase()} e o seu restante é: R$${total.toFixed(2)}`);
//     }else{
//         console.log(`o seu saldo está ${balanceMessage.toLocaleUpperCase()} e o sua divida é: R$${total.toFixed(2)}`);

//     }
// }

// getBalance();

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


/* function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    //fahrenheit to celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
    let degreeSing = 'C'

    //celsius to fahrenheit
    if (celsiusExist) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * 9/5 + 32
    degreeSing = 'F'

    }

    return formula(updatedDegree) + degreeSing

}

try {
    console.log(transformDegree('50F'));
    console.log(transformDegree('10C'));
    console.log(transformDegree('23P'));

} catch (error) {
    console.log(error.message);
}
 */
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

/* const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log("numero total de categorias: ",totalCategories);
for (let category of booksByCategory) {
    console.log("categoria ",category.category);
    console.log("quantidade de categorias dos livros ",category.books.length);
}

function countAuthors() {
    let authors = []

    for (let object1 of booksByCategory) {
        for (let book of object1.books) {
            if (authors.indexOf(book.author)== -1){
                authors.push(book.author)
            }
        }
    }
    console.log("numero total de autores ",authors.length);
}

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`os livros do autor ${author}: ${books.join(", ")}`);
    
}

countAuthors();
booksOfAuthor("Augusto Cury");
// esse aq foi brabro de resolver */
//this right here was tough