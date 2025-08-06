

function calcular(operacao){
 let n1 = Number(document.getElementById('num1').value);
 let n2 = Number(document.getElementById('num2').value);

 let resultado = 0;

 switch (operacao){
    case 'Somar':
        resultado = n1 + n2;
        break;
    case 'Subtrair':
        resultado = n1 - n2;
        break;
    case 'Multiplicar':
        resultado = n1 * n2;
        break;
    case 'Dividir':
        if (n2 === 0){
            alert("Nenhum numero eh divisivel por 0!");
            return;
        }    
        resultado = n1 / n2;
        break;
 }
 document.getElementById('resultado').innerHTML = "O resultado eh " + resultado;
}
