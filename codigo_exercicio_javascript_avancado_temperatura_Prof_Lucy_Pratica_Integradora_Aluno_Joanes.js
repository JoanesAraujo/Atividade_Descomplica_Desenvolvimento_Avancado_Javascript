
/* Aluno: Joanes Cavalcanti 
   Turma: Back-End (Descomplica)
*/

// Calcular media das temperaturas MAX 
function ArrayAvg(Tmax) {
    var i = 0, soma = 0, ArrayLen = Tmax.length;
    while (i < ArrayLen) {
        soma = soma + Tmax[i++];
}
    return soma / ArrayLen;
}

// Calcular media das temperaturas MIN 
function ArrayAvg(Tmin) {
    var i = 0, soma = 0, ArrayLen = Tmin.length;
    while (i < ArrayLen) {
        soma = soma + Tmin[i++];
}
    return soma / ArrayLen;
}



// função para mostrar os dias que choveram
function choveu(ind){
    cont = 0;
    x = 0;
    do {
        if(ind[x] == true) {
            cont++;
        }
        x++;
    } while(x <= ind.length-1);
    return cont;
}

// array individual
dia = [10,2,7,9,3,21,26,22,30,29,5];
Mes = [1,2,3,4,5,6,7,8,10,12];
Tmin = [4,0,6,5,7,11,9,12,8,16];
Tmax = [24,32,36,42,33,39,27,48,22,23];
ind = [false,true,false,false,true,true,false,true,false,true];



// -  Agora é só apresentar para o usuário final. - //

// Os dias que choveram
console.log('\nQuantidade de dias que choveram: ', choveu(ind),'\n');
// A media da temperatura MAX
console.log('A média da temperatura MAX: ', ArrayAvg(Tmax),'\n');
// A media da temperatura MIN
console.log('A média da temperatura MIN: ', ArrayAvg(Tmin),'\n');
// A Ordenação da temperatura MAX
console.log('A ordem das temperaturas MAXIMA: ',Tmax.sort(),'\n');


/*

 -*- Resultado da consulta atalho: (f8) -*-

Info: Start process (21:49:41)

Quantidade de dias que choveram:  5 

A média da temperatura MAX:  32.6 

A média da temperatura MIN:  7.8 

A ordem das temperaturas MAXIMA:  [
  22, 23, 24, 27, 32,
  33, 36, 39, 42, 48
] 

Info: End process (21:49:42)
*/