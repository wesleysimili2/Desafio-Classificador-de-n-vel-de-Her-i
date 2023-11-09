// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Variable dinamics
let PlayerName = 'Ferinha'
let PlayerXp = 1234
// variable Conditions ...
let ferro = PlayerXp <= 1000;
let bronze = PlayerXp >= 1001 && PlayerXp <= 2000;
let prata = PlayerXp >= 2001 && PlayerXp <= 5000;
let ouro = PlayerXp >= 6001 && PlayerXp <= 7000;
let platina = PlayerXp >= 7001  && PlayerXp <= 8000;
let ascendente = PlayerXp >= 8001 && PlayerXp <= 9000;
let imortal = PlayerXp >= 9001 && PlayerXp <= 10000;
let radiante = PlayerXp > 10001

// Estrura de Decisão Swift
if(ferro){
   console.log('Elo Atual: Ferro')
} else if (bronze){
    console.log('Elo Atual: Bronze')
}else if (prata){
    console.log('Elo Atual: Prata')
}else if (ouro){
    console.log('Elo Atual: Ouro')
}else if (platina){
    console.log('Elo Atual: Platina')
}else if (ascendente){
    console.log('Elo Atual: Ascendente')
}else if (imortal){
    console.log('Elo Atual: Imortal')
}else if (radiante){
    console.log('Elo Atual: Radiante')
}

// Observação: É possivel criar um codito mais limpo utilizazndo switch, mas o exercicio foi feito seguindo o enunciado. 

