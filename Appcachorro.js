//Vari�vel com a minha idade
let myAge = 17;
//Vari�vel que ter� mudan�as no valor
let earlyYears = 2;
//Vari�vel que tem os anos seguintes
let laterYears = myAge -2;

earlyYears *= 10.5;
//Conta que multiplica laterYears por 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//definindo minha idade em c�o
let myAgeInDogYears = earlyYears + laterYears;

//Definindo meu nome como caixa baixa
let myName = 'pedro'.toLowerCase();

console.log(`Meu nome � ${myName}. Eu tenho ${myAge} anos humanos minha idade em cachorro � ${myAgeInDogYears} em anos de cachorro.`);