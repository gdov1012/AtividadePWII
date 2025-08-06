

function calcular(operacao){
 const n1 = getElementById('num1');
 const n2 = getElementById('num2');

 let resultado = 0;

 switch (operacao){
    case 'Somar':
        resultado = n1 + n2;
        break;
    case 'Subtrair':
        resultado = n1 - n1;
        break;
    case 'Multiplicar':
        resultado = n1 * n2;
        break;
    case 'Dividir':
        if (n2 === 0){
            alert("Nenhum número é divisível por 0!");
            return;
        }    
        resultado = n1 / n2;
        break;
 }
 
 document.getElementById('resultado').textContent = "O resultado é: " +resultado;
}
