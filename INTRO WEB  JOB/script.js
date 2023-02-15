

// OBJETOS
const cursos= [
    {
        curso:"HTML e CSS",
        descricao:"Este curso foi elaborado para pessoas que já tem conhecimentos sobre programação",
        duracao:"1 mes",
        valor:500
    },
    {
        curso:"JavaScript",
        descricao:"Neste curso você aprendera uma das linguagens mais solicitadas no mercado de trabalho da tecnologia",
        duracao:"2 meses",
        valor:900
    },
    {
        curso:"APIsRest",
        descricao:"Curso intensivo, aprenda programação do zero com os melhores instrutores Juliana e Helanny",
        duracao:"6 meses",
        valor:2000
    }
]
const turmas = [
    {
        // 0
        turma:"Hipatia",
        curso:"JavaScript",
        inicio: "30/11/2022",
        termino:"30/01/2023",
        numeroAlunos: 150,
        periodo:"Noturno",
        concluida: false
    },
    {
        // 1
        turma:"Sibyla",
        curso:"JavaScript",
        inicio:"30/10/2022",
        termino:"30/12/2022",
        numeroAlunos:200,
        periodo:"Integral",
        concluida:false
    },
    {
        // 2
        turma:"Curie",
        curso:"HTML e CSS",
        inicio:"15/09/2022",
        termino:"5/10/2022",
        numeroAlunos:180,
        periodo:"Noturno",
        concluida:true
    },
    {
        // 3
        turma:"Zhenyi",
        curso:"HTML e CSS",
        inicio:"01/11/2022",
        termino:"01/01/2023",
        numeroAlunos:80,
        periodo:"Integral",
        concluida:false
    },
    {
        // 4
        turma:"Clarke",
        curso:"HTML e CSS",
        inicio:"04/07/2022",
        termino:"04/09/2022",
        numeroAlunos:200,
        periodo:"Noturno",
        concluida:true
    },
    {
        // 5
        turma:"Blackwell",
        curso:"APIsRest",
        inicio:"20/03/2022",
        termino:"20/06/2022",
        numeroAlunos:100,
        periodo:"integral",
        concluida:true
    },
    {
        // 6
        turma:"Elion",
        curso:"APIsRest",
        inicio:"12/01/2022",
        termino:"12/06/2022",
        numeroAlunos:200,
        periodo:"Noturno",
        concluida:true
    },
    {
        // 7
        turma:"Burnell",
        curso:"APIsRest",
        inicio:"18/10/2022",
        termino:"18/04/2023",
        numeroAlunos:90,
        periodo:"Integral",
        concluida:false
    }
]
const estudantes = [
    {
       estudante:"Chris Evans",
       turmaAluno: "Hipátia",
       curso:"JavaScript",
       valor:900,
       nParcelas:9,
       desconto:false,
       valParcela:100
    } ,
    {
       estudante:"Halle Berry",
       turmaAluno:"Burnell",
       curso:"APIsRest",
       valor:2000,
       nParcelas:4,
       desconto:false,
       valParcela:500
    },
    {
       estudante:"Lashana Lynch",
       turmaAluno:"Zhenyi",
       curso:"HTML e CSS",
       valor:500,
       nParcelas:1,
       desconto:true,
       valParcela:500
    },
     {
       estudante:"Camila",
       turmaAluno: "Zhenyi",
       curso:"JavaScript",
       valor:900,
       nParcelas:9,
       desconto:false,
       valParcela:100
    } 
]
/////////////////////////////////
// CONDICIONAIS

function parcelarCurso(nParcelas, carrinhoCurso) {    

    const nCursos=carrinhoCurso.length
    let desconto20 = nParcelas <= 2 ? 20 : 0

    nCursos===3 ? desconto20 += 15 : 0
    nCursos===2 ? desconto20 +=10 : 0
   // utilizando o ternário adiciono 15%, 10% ou 0  
    
    let valorTotal=0

    for(valor of carrinhoCurso) {
        valorTotal = valorTotal + valor
    }    

    const valorDoDesconto = (valorTotal * (desconto20/100) ).toFixed(2)
    const valorLiquido= (valorTotal - valorDoDesconto).toFixed(2) // com desconto
    const valorDaParcela =(valorLiquido/nParcelas).toFixed(2)
   

    if(nParcelas <= 2 && nCursos === 3){
            // 3 cursos em ate 2x
           console.log(`O valor do pagamento e de ${valorLiquido} R$, obteve 15% de desconto por 3 cursos e mais 20% por pagamento a vista ou parcelamento em ate 2X no total de 35% de desconto. o valor do parcelamento fica em ${nParcelas} x de ${valorDaParcela}`
           );

    }else if( nParcelas <=2 && nCursos === 2){
         // 2 cursos  em ate 2x
           console.log(`O valor do pagamento e de ${valorLiquido} R$, obteve 10% de desconto por 2  cursos e mais 20% por pagamento a vista ou parcelamento em ate 2X no total de 35% de desconto. o valor do parcelamento fica em ${nParcelas} x de ${valorDaParcela}`); 


     }else if (nParcelas <= 2 && nCursos === 1 ) {      
          // 1 curso em ate 2x
            console.log(`O valor do pagamento é de ${valorLiquido} R$ e obteve 20% de desconto por pagamento a vista ou parcelado em até 2x. Valor parcelado fica em ${nParcelas}x de ${valorDaParcela}`);

     }else if (nParcelas > 2 && nCursos === 2 ) {      
            //acima de 2x. 2 cursos: 10% de desconto.
              console.log(`O valor do pagamento é de ${valorLiquido} R$ e oobteve 10% de desconto por 2  cursos. Valor parcelado fica em ${nParcelas}x de ${valorDaParcela}`);

     }else if (nParcelas > 2 && nCursos === 3 ) {      
        //acima de 2x. 3 cursos: 15% de desconto.
          console.log(`O valor do pagamento é de ${valorLiquido} R$ e oobteve 15% de desconto por 3 cursos. Valor parcelado fica em ${nParcelas}x de ${valorDaParcela}`);
     
     }else{
            console.log(`O pagamento e de R$ ${valorLiquido} R$ parcelado em ${nParcelas}x de R$ ${valorDaParcela}`); 
     }
    
   

}
//parcelarCurso(2, inCarrinhocursos)
//parcelarCurso(5, [200,200,200])


/////////////////////////////////

// laços (criando uma função)

const buscarCursos = (nomeCurso) => {
    nomeCurso = nomeCurso.toLocaleLowerCase();
  
    const curso = cursos.find((element) => {
      return element.curso.toLocaleLowerCase().includes(nomeCurso)
    })
  
    if (curso) {
      return curso
    }
    return "Curso não encontrado";
  }
  
 // console.log(buscarCursos("APIsRes"))

/////////////////////////////////
// callBacks

let carrinhoCursos = []

const inCarrinhocursos = (nomeCurso)=>{
    let procura = buscarCursos(nomeCurso)
    carrinhoCursos.push(procura.valor)
    
    return carrinhoCursos
}
//inCarrinhocursos("Java")


//======= LOG função parcelar curso com array=======//
//parcelarCurso(2, inCarrinhocursos("Java"))




/////////////////////////////////

const buscarTurma = (nomeTurma)=>{

    const buscador = turmas.filter(turmaFind => turmaFind.turma.toLowerCase().startsWith(nomeTurma.toLowerCase()))

    return buscador.length > 0 ? buscador : "turma não enontrada"
}

//console.log(buscarTurma("Hip"));

/////////////////////////////////

const buscarEstudante = (nomeEstudante) => {
    const buscador = estudantes.filter(estudanteFind => estudanteFind.estudante.toLowerCase().startsWith(nomeEstudante.toLowerCase()))

    return buscador
}
//console.log(buscarEstudante("C"));

// matricular
/////////////////////////////////

const matricular = (estudante,curso,turmaAluno, nParcela) =>{

    novaMatricula = 
    {
        estudante,
        curso,
        turmaAluno,
        nParcela
    }
    estudantes.push(novaMatricula)
    // aqui vou adicionar com o push o novaM ao array de estudante
}
matricular("Larissa", "HTML & CSS", "Zhenyi",2)
//console.log(estudantes);

/////////////////////////////////

const relatorioEstudante = (nomeAluno) => {

    const estudante = buscarEstudante(nomeAluno)

    return `Aluno: ${estudante.estudante}\n Turma: ${estudante.turmaAluno}\n Curso: ${estudante.curso}\n Valor total: ${estudante.valor}\n Valor Parcela: ${estudante.nParcelas}\n Quantidade parcela: ${estudante.nParcelas}`

}
//console.log(relatorioEstudante("Chris Evans"))
/////////////////////////////////


















