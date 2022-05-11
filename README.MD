**Atividade prática do projeto:**

Escreva um programa em JavaScript no Node.js que ajuda o INPE, que possui um 
controle histórico das condições meteorológicas de um ano, a organizar 
informações de uma estação meteorológica. Considere um vetor com as seguintes 
informações da estação meteorológica:

dia e mês do registro
temperatura máxima
temperatura mínima
indicador se choveu no dia

O programa deverá determinar quantos dias choveu nos 365 dias do ano e a média 
da temperatura máxima e mínima de um determinado mês indicados pelo usuário.
Estruture a solução conforme sugerido a seguir.

**Passo 1.** Crie um registro para conter as informações da estação 
meteorológica.



**Passo 2.** Um módulo função que recebe um vetor de registros. Este módulo  deverá ser armazenado com as informações necessárias e preenchidas com as  informações da estação meteorológica e retornar esse vetor. Você pode preencher as informações diretamente no vetor, pelo código.  Se utilizar o JavaScript online ou html, você pode utilizar uma estrutura de repetição  para pegar as informações do próprio usuário.



**Passo 3.** Uma função que receba como parâmetro um vetor com as  informações da estação meteorológica, determine e retorne quantos dias choveu  nos últimos 365 dias.  Utilizar uma estrutura de repetição, a melhor neste caso é o for, passando por todas  as posições do vetor. Tenha uma variável para contar os dias que choveu no ano  de 365 dias e retorna o valor desta contagem. 

**Passo 4.** Um procedimento que receba como parâmetro um vetor com as  informações da estação meteorológica e determine e apresente a média da  temperatura máxima e a média da temperatura mínima no período de 365 dias do  ano.

Utilizar uma estrutura de repetição, pode ser o for, passando por todas as posições  do vetor. Tenha duas variáveis, uma para acumular todas as temperaturas máximas  e outra para acumular todas as temperaturas mínimas. Saindo da estrutura de  repetição, você deve dividir os valores das variáveis que acumulou as temperaturas pela quantidade de informações que foi somada. Com essa divisão, você terá a  média de temperatura máxima e mínima. Agora é só apresentar para o usuário final.



**Passo 5.** Uma função que receba como parâmetro um vetor com informações  da estação meteorológica e ordena as informações da menor para a maior  temperatura, retornando este vetor. Você pode utilizar duas estruturas de repetição encadeada e um if dentro delas para  realizar a comparação e a ordenação. Como um bubblesort. Esta ordenação pode  ser ou pela temperatura máxima ou pela temperatura mínima. Você pode escolher. 



10 27 12 8 15 19 

8 10 12 15 19 27 



**Passo 6.** Um procedimento que receba como parâmetro um vetor com  informações da estação meteorológica e mostre todas as informações ao usuário  final.  Utilizar uma estrutura de repetição, pode ser o for, para mostrar todas as  informações para o usuário final.





**Passo 7.** O método principal que:

Cria um vetor com capacidade para armazenar as informações de 365 dias da  estação meteorológica. 

• Com o auxílio da questão 2, preencher o vetor com as informações das  temperaturas fornecidas pelo usuário. 

• Com o auxílio da questão 3, determinar, retornar e apresentar quantos dias  choveu nos últimos 365 dias. 

• Com o auxílio da questão 4, determinar e apresentar a média da temperatura  máxima e a média da temperatura mínima dos últimos 365 dias. 

• Com o auxílio da questão 5, ordenar o vetor da temperatura mínima para a  temperatura máxima. 

• Com o auxílio da questão 6, acionar o módulo para mostrar as informações  ordenadas para o usuário