    document.getElementById("formPrin").addEventListener("submit", function (e) {
      const minutos = [
        +this.minutos1.value,
        +this.minutos2.value,
        +this.minutos3.value,
      ];

      const resultados = minutos.map((min, i) => {
        const extraMin = Math.max(0, min - 500);
        const costoA = 20 + extraMin * 0.08;
        const costoB = 10 + extraMin * 0.12;
        const mejor = costoA < costoB ? "Empresa A" : "Empresa B";
        return `Mes ${i + 1}: A = €${costoA.toFixed(2)}, B = €${costoB.toFixed(2)} → Mejor: ${mejor}`;
      });

      document.getElementById("resultado").innerHTML = `
        <h2>Resultados</h2>
        <ul>${resultados.map(r => `<li>${r}</li>`).join("")}</ul>
      `;
    });