    document.getElementById("comparar").addEventListener("click", function () {
    const minutos = [
        +document.querySelector("[name='minutos1']").value,
        +document.querySelector("[name='minutos2']").value,
        +document.querySelector("[name='minutos3']").value,
    ];

    const resultados = minutos.map((min, i) => {
        const extraMin = Math.max(0, min - 500);
        const costoA = 20 + extraMin * 0.08;
        const costoB = 10 + extraMin * 0.12;
        const mejor = costoA < costoB ? "Empresa A" : "Empresa B";
        return `Mes ${i + 1}: A = €${costoA.toFixed(2)}, B = €${costoB.toFixed(2)} → Mejor: ${mejor}`;
    });

    let resultado = "<h2>Resultados</h2>";
    for (let i = 0; i < resultados.length; i++) {
        resultado += "<p>" + resultados[i] + "</p>";
    }
    document.getElementById("resultado").innerHTML = resultado;
    });