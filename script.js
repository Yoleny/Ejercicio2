document.getElementById('calificarForm').addEventListener('submit', function(event){
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener las notas ingresadas
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);

    // Validar que las notas estén en el rango permitido
    if (nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">Las notas están fuera del rango permitido.</div>';
    } else {
        // Calcular la nota final (suma de las notas parciales)
        var notaFinal = (nota1 + nota2 + nota3) * 100 / 100;

        // Calificar la nota final y mostrar el mensaje correspondiente
        if (notaFinal >= 0 && notaFinal <= 59) {
            document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">Reprobado</div>';
        } else if (notaFinal >= 60 && notaFinal <= 79) {
            document.getElementById('mensaje').innerHTML = '<div class="alert alert-warning">Bueno</div>';
        } else if (notaFinal >= 80 && notaFinal <= 89) {
            document.getElementById('mensaje').innerHTML = '<div class="alert alert-success">Muy Bueno</div>';
        } else if (notaFinal >= 90 && notaFinal <= 100) {
            document.getElementById('mensaje').innerHTML = '<div class="alert alert-info">Sobresaliente</div>';
        }
    }
});

function limpiarCampos() {
    document.getElementById('calificarForm').reset();
    document.getElementById('mensaje').innerHTML = ''; // Limpiar el mensaje de calificación
}



