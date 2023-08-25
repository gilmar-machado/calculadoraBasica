// Esta função apaga 1 caractere por vez.
function apagar() {
    const resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}   