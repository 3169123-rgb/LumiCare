// ========================================
// CUESTIONARIO LUMICARE
// ========================================

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const resetQuiz = document.getElementById("resetQuiz");


// Respuestas correctas
const respuestasCorrectas = {
    q1: "a",
    q2: "b",
    q3: "b",
    q4: "a",
    q5: "a",
    q6: "b",
    q7: "a",
    q8: "a"
};


// Cuando se envía el cuestionario
quizForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let puntuacion = 0;
    let respondidas = 0;

    // Revisar cada respuesta
    for (let pregunta in respuestasCorrectas) {

        const respuestaSeleccionada =
            document.querySelector(
                `input[name="${pregunta}"]:checked`
            );

        if (respuestaSeleccionada) {

            respondidas++;

            if (
                respuestaSeleccionada.value ===
                respuestasCorrectas[pregunta]
            ) {
                puntuacion++;
            }
        }
    }


    // Verificar que todas las preguntas hayan sido contestadas
    if (respondidas < 8) {

        quizResult.innerHTML = `
            <h3>⚠️ Cuestionario incompleto</h3>

            <p>
                Debes responder las 8 preguntas antes de revisar
                tu resultado.
            </p>
        `;

        quizResult.classList.add("show");

        return;
    }


    // Calcular porcentaje
    const porcentaje = (puntuacion / 8) * 100;


    // Mensaje dependiendo del resultado
    let mensaje = "";

    if (puntuacion === 8) {

        mensaje = `
            <h3>🎉 ¡Excelente trabajo!</h3>
            <p>
                Respondiste correctamente las 8 preguntas.
                ¡Dominas muy bien los conceptos!
            </p>
        `;

    } else if (puntuacion >= 6) {

        mensaje = `
            <h3>👏 ¡Muy bien!</h3>
            <p>
                Tienes un buen dominio de los temas.
                Puedes repasar algunos conceptos para conseguir
                una puntuación perfecta.
            </p>
        `;

    } else if (puntuacion >= 4) {

        mensaje = `
            <h3>📚 Buen intento</h3>
            <p>
                Ya conoces varios conceptos, pero sería recomendable
                repasar las páginas informativas.
            </p>
        `;

    } else {

        mensaje = `
            <h3>💡 Sigue practicando</h3>
            <p>
                Te recomendamos volver a revisar las páginas de
                JavaScript, jQuery, JSON y Hosting.
            </p>
        `;
    }


    // Mostrar resultado
    quizResult.innerHTML = `
        ${mensaje}

        <div class="quiz-score">
            <strong>${puntuacion}/8</strong>
            <span>${porcentaje}% de respuestas correctas</span>
        </div>
    `;

    quizResult.classList.add("show");

});


// ========================================
// BOTÓN REINICIAR
// ========================================

resetQuiz.addEventListener("click", function() {

    quizForm.reset();

    quizResult.innerHTML = "";

    quizResult.classList.remove("show");

});