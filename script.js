function questao1(){
    const resposta1 =  "Olá mundo!!!!!";

    document.querySelector("#text1").textContent = resposta1;
};
function questao2(){
    let nomePessoa = document.querySelector("#nomePessoa").value;
    let pessoa = document.querySelector(".Pessoa");

    pessoa.textContent = nomePessoa;
    document.querySelector("#text2").style.display = "block";
};
function questao3(){
    let nomeFuncionario = document.querySelector("#nomeFuncionario").value;
    let valorSalario= document.querySelector("#valorSalario").value;

    let funcionario = document.querySelector("#funcionario");
    let salario = document.querySelector("#salario");

    funcionario.textContent = nomeFuncionario;
    salario.textContent = valorSalario;
    document.querySelector("#text3").style.display = "block";
};

function questao4(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let somar = num1 + num2;

    let n1 = document.querySelector("#n1");
    let n2 = document.querySelector("#n2");
    let soma = document.querySelector("#soma");

    n1.textContent = num1;
    n2.textContent = num2;
    soma.textContent = somar;

    document.querySelector("#text4").style.display = "block";

};

function questao5(){
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);

    let mediaNota = (nota1+nota2)/2;

    let primeiraNota = document.querySelector("#primeiraNota");
    let segundaNota = document.querySelector("#segundaNota");
    let media = document.querySelector("#media");

    primeiraNota.textContent = nota1;
    segundaNota.textContent = nota2;
    media.textContent = mediaNota.toFixed(2);

    document.querySelector("#text5").style.display = "block";

};

document.querySelector("#btn6").addEventListener("click",function(){
    let numero = Number(document.querySelector("#numero").value);
    let resposta = document.querySelector("#text6");

    resposta.textContent = `O antecesor de ${numero} é: ${numero - 1} \n, e o sucessor de ${numero} é: ${numero + 1}`;
});

document.querySelector("#btn7").addEventListener("click",function(){
    let numBase = Number(document.querySelector("#numDobro").value);
    let numDobro = document.querySelector("#text7-1");
    let numTerca = document.querySelector("#text7-2");


    
    numDobro.textContent = `O dobro de ${numBase} é ${numBase*2}`;
    numTerca.textContent = `A terça parte de ${numBase} e ${(numBase/3).toFixed(3)}`
});

document.querySelector("#btn8").addEventListener("click", function(){

    let metros = Number(document.querySelector("#metros").value);
    let conversao = document.querySelector("#text8");

    conversao.textContent = `A distância de ${metros} metros corresponde a : 
    ${metros/1000} km, ${metros*100}cm `
});

document.querySelector("#btn9").addEventListener("click", function(){
    let real = Number(document.querySelector("#real").value);
    let dolar = real/5.78;
    

    document.querySelector("#dolar").value = dolar.toFixed(2);

});

document.querySelector("#btn10").addEventListener("click", function(){

    let area = (Number(document.querySelector("#largura").value))*Number((document.querySelector("#altura").value));

    let tinta  = area/6;

    document.querySelector("#parede").textContent = `área a ser pintada:${area} metros quadrados. Para uma tinta que pinta 6 metros quadrados, sao necessários ${tinta} litros de tinta. `

});

document.querySelector("#btn11").addEventListener("click", function(){
    let a = Number(document.querySelector("#a").value);
    let b = Number(document.querySelector("#b").value);
    let c = Number(document.querySelector("#c").value);

    let delta = (b*b)-(4*a*c);

    document.querySelector("#text11").textContent = `O valor de delta é ${delta}`;

});

document.querySelector("#btn12").addEventListener("click",function(){
    let valor = Number(document.querySelector("#preco").value);

    let novoPreco = Number( valor * (1-0.05));

    document.querySelector("#text12").textContent = `O novo valor com desconto fica: ${novoPreco}`;
});

document.querySelector("#btn13").addEventListener("click", function(){
    let salario = Number(document.querySelector("#salarioSemAjuste").value);

    let novoSalario = Number(salario * 0.15) + salario;

    document.querySelector("#text13").textContent = `O novo salário com reajuste de 15% fica: ${novoSalario}.`;
});

document.querySelector("#btn14").addEventListener("click", function(){
    let dias = Number(document.querySelector("#dias").value);
    let km = Number(document.querySelector("#km").value);

    let valor = Number((dias*90)+(km*0.2));

    document.querySelector("#text14").textContent = `O valor do aluguel de ${dias}, que foram rodados ${km} kms será de $ ${valor}`;
});

document.querySelector("#btn15").addEventListener("click", function(){
    let diasTrabalhados = Number(document.querySelector("#DiasTrabalhados").value);
    salario = Number(diasTrabalhados*25*8);

    document.querySelector("#text15").textContent = `O valor do funcionário, levando em conta 8 horas trabalhadas por dia a $25 por hora é de $ ${salario}.`
});