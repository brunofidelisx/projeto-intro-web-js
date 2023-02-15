
| ARRAYS |

Para começar nosso projeto da escola, vamos criar as três entidades que a constroem:

* Cursos - temos três cursos disponíveis: HTML e CSS, JavaScript, e APIs REST;

* Turmas;

* Estudantes;

Crie um array turmas, um array estudantes e um array cursos. Estes arrays devem conter apenas os nomes dos cursos, turmas e estudantes.

Exemplo:




const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];

const estudantes = ["João", "Ana", "Cris"];

---------------------------------------------------------------

| OBJETOS |

Para praticar o conteúdo de objetos, vamos dar um pouco mais de personalidade aos itens de array que criamos na prática anterior. Transforme os arrays criados na aula de arrays em arrays de objeto. com as propriedades corretas. São elas:

Turma

* turma - string

* curso - string

* inicio - string 

* término - string 

* numero de alunos - number

* período - string

* concluida - boolean

Curso

* curso - string

* descrição - string

* duração - string

* valor - number

Estudante

* estudante - string

* turma - string

* curso - string

* valor - string

* nParcelas - number

* desconto - boolean

* parcelas - number



Nossa escola possui três cursos: 


* HTML e CSS, tem duração de 1 meses e possui o valor de 500 reais

* JavaScript, tem duração de 2 meses e possui o valor de 900 reais

* APIsRest, tem duração de 6 meses e possui o valor de 2000 reais



As tumas são:

* Hipátia - Pertence ao curso JavaScript, iniciou em 30/11/2022, termina em 30/01/2023, possui 150 alunos, é do período noturno e não foi concluída.

* Sibyla - Pertence ao curso JavaScript, iniciou em 30/10/2022, termina em 30/12/2022, possui 200 alunos, é do período integral e não foi concluída.

* Curie - Pertence ao curso HTML e CSS, iniciou em 15/09/2022, termina em 15/10/2022, possui 180 alunos, é do período noturno e já foi concluída.

* Zhenyi - Pertence ao curso HTML e CSS, iniciou em 01/11/2022, termina em 01/01/2023, possui 80 alunos, é do período integral e não foi concluída.

* Clarke - Pertence ao curso HTML e CSS, iniciou em 04/07/2022, termina em 04/09/2022, possui 200 alunos, é do período noturno e já foi concluída.

* Blackwell - Pertence ao curso APIsRest, iniciou em 20/03/2022, termina em 20/06/2022, possui 100 alunos, é do período integral e já foi concluída.

* Elion - Pertence ao curso APIsRest, iniciou em 12/01/2022, termina em 12/06/2022, possui 200 alunos, é do período noturno e já foi concluída.

* Burnell - Pertence ao curso APIsRest, iniciou em 18/10/2022, termina em 18/04/2023, possui 90 alunos, é do período integral e não foi concluída.


Vamos iniciar com 3 estudantes, mas fique a vontade para criar mais alunos.

* Chris Evans - é do curso de JavaScript na turma Hipátia, realizou o pagamento em 9 parcelas de 100 reais cada e não teve desconto.

* Halle Berry - é do curso de APIsRest na turma Burnell, realizou o pagamento em 4 parcelas de 500 reais cada e não teve desconto.

* Lashana Lynch - é do curso de HTML e CSS na turma Zhenyi, realizou o pagamento à vista e recebeu desconto.




O resultado final deve ser algo parecido com este, mas com os cursos indicados no conteúdo de Arrays:

//versão até aula de arrays

const meusCursos = ["Português", "Francês", "Front-end com React"];



//após conhecer objetos

const meusCursos = [

{

 nome: "Português",

 descricao: "Aprenda a língua de Gilberto Gil!",

 duracao: "1 ano",

 valor: 2000

},

{

 nome: "Francês",

 descricao: "Aprenda a língua de chefs internacionais e do Stromae!",

 duracao: "2 anos",

 valor: 7000

},

{

 nome: "Front-end com React",

 descricao: "Aprenda várias linguagens! Nenhuma delas te faz falar com gente!",

 duracao: "2 anos",

 valor: 10000

}];



--------------------------------------------------
