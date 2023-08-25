// Calcula o resultado da operação pré-definida durante a interação com a calculadora. A condição retorna inválida se a operação aritmética estiver vazia
function calcular() {
    const resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else {
        document.getElementById('resultado').innerHTML = 'Dado Ínvalido'
    }
}