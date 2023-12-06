// Función para agregar valores a la pantalla
function agregar(valor) {
    // Obtiene el elemento de la pantalla por su ID
    const pantalla = document.getElementById('pantalla');
    // Concatena el valor del botón presionado al valor actual en la pantalla
    pantalla.value += valor;
}

// Función para borrar todo el contenido de la pantalla
function borrar() {
    // Obtiene el elemento de la pantalla por su ID
    const pantalla = document.getElementById('pantalla');
    // Establece el valor en blanco, borrando todo el contenido
    pantalla.value = '';
}

// Función para realizar el cálculo
function calcular() {
    // Obtiene el valor actual en la pantalla
    const valorPantalla = document.getElementById('pantalla').value;
    // Evalúa la expresión matemática ingresada utilizando eval()
    const resultado = eval(valorPantalla);
    // Muestra el resultado en la pantalla
    document.getElementById('pantalla').value = resultado;
}
