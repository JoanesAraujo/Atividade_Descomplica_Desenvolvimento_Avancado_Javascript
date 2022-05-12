/*
Aluno: Joanes Cavalcanti de Araújo
Turma: Back-End ( Descomplica)
Prof: Lucy

*/

class InfoTemp{

    constructor(dia,mes,tmax,tmin,choveu){

        this.dia = dia;
        this.mes = mes;
        this.tmax = tmax;
        this.tmin = tmin;
        this.choveu = choveu;

    }

}

// função da estação metereológica
function Input(info){
    info.push(new InfoTemp(3, 2, 34.2, -1, true));
    info.push(new InfoTemp(5, 5, 35, -3, true));
    info.push(new InfoTemp(9, 10, 33.0, -23, false));
    info.push(new InfoTemp(2, 12, 29.1, 3, false));
    info.push(new InfoTemp(7, 8, 25, -8, true));
    info.push(new InfoTemp(4, 6, 23.5, 5, true));
    info.push(new InfoTemp(2, 7, 31.5, 11, false));
    info.push(new InfoTemp(18, 11, 33.8, -2, true));
    info.push(new InfoTemp(23, 1, 39.0 , -10, false));
    info.push(new InfoTemp(22, 3, 22.3, -15.3,  true));

    return info;

}

//função média de meses
function Mediameses(info){
    var media = 0;    
        for(var x = 0; x <info.length; x++){
            media += info[x].mes;
        }
        media = media/info.length;
        return media;
    
}

//função contar a quantidade de dias chuvosos
function Diaschuvosos(info){
    var TotalDias = 0;

    for(var i=0; i < info.length; i++){
        if(info[i].choveu == true){
            TotalDias += 1;
        }
    }
    return TotalDias;
}

//função para ordenar os meses
function OrdemMes(info){
    var aux = 0;
        for (var y=0; y<info.length-1; y++){
            for (var z=0; z<info.length-y-1; z++){
                if(info[z].mes > info[z+1].mes){
                    aux = info[z];
                    info[z] = info[z+1];
                    info[z+1] = aux;
                }
            }
        }
        return info;
}

// Calcular media das temperaturas MAX 
function ArrayAvg(info) {
    var i = 0, soma = 0, ArrayLen = info.length;
    while (i < ArrayLen) {
        soma = soma + info[i++].tmax;
}
    return soma / ArrayLen;
}

//Array vazio para pegar 
var info = [];


// console.log que exibe para o usuário na tela
console.log('\n\nEstação Metereológica: \n', Input(info));
console.log('\nMédia de meses: \n', Mediameses(info));
console.log('A qtd de dias que são chuvosos são: \n', Diaschuvosos(info));
console.log('A ordem dos meses são: \n', OrdemMes(info));
console.log('\nA média das temperaturas MÁXIMA são: \n', ArrayAvg(info));



/* __*__ RESULTADO EXIBIDO AO USUÁRIO __*__


Info: Start process (18:51:25)


Estação Metereológica: 
 [
  InfoTemp { dia: 3, mes: 2, tmax: 34.2, tmin: -1, choveu: true },
  InfoTemp { dia: 5, mes: 5, tmax: 35, tmin: -3, choveu: true },
  InfoTemp { dia: 9, mes: 10, tmax: 33, tmin: -23, choveu: false },
  InfoTemp { dia: 2, mes: 12, tmax: 29.1, tmin: 3, choveu: false },
  InfoTemp { dia: 7, mes: 8, tmax: 25, tmin: -8, choveu: true },
  InfoTemp { dia: 4, mes: 6, tmax: 23.5, tmin: 5, choveu: true },
  InfoTemp { dia: 2, mes: 7, tmax: 31.5, tmin: 11, choveu: false },
  InfoTemp { dia: 18, mes: 11, tmax: 33.8, tmin: -2, choveu: true },
  InfoTemp { dia: 23, mes: 1, tmax: 39, tmin: -10, choveu: false },
  InfoTemp { dia: 22, mes: 3, tmax: 22.3, tmin: -15.3, choveu: true }
]

Média de meses: 
 6.5
A qtd de dias que são chuvosos são: 
 6
A ordem dos meses são: 
 [
  InfoTemp { dia: 23, mes: 1, tmax: 39, tmin: -10, choveu: false },
  InfoTemp { dia: 3, mes: 2, tmax: 34.2, tmin: -1, choveu: true },
  InfoTemp { dia: 22, mes: 3, tmax: 22.3, tmin: -15.3, choveu: true },
  InfoTemp { dia: 5, mes: 5, tmax: 35, tmin: -3, choveu: true },
  InfoTemp { dia: 4, mes: 6, tmax: 23.5, tmin: 5, choveu: true },
  InfoTemp { dia: 2, mes: 7, tmax: 31.5, tmin: 11, choveu: false },
  InfoTemp { dia: 7, mes: 8, tmax: 25, tmin: -8, choveu: true },
  InfoTemp { dia: 9, mes: 10, tmax: 33, tmin: -23, choveu: false },
  InfoTemp { dia: 18, mes: 11, tmax: 33.8, tmin: -2, choveu: true },
  InfoTemp { dia: 2, mes: 12, tmax: 29.1, tmin: 3, choveu: false }
]

A média das temperaturas MÁXIMA são: 
 30.640000000000004
Info: End process (18:51:25)


*/