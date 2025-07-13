document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach((ramo) => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      // Marcar como aprobado
      ramo.classList.add("aprobado");
      ramo.disabled = true;

      // Desbloquear el ramo dependiente si existe
      const desbloquea = ramo.dataset.desbloquea;
      if (desbloquea) {
        const target = Array.from(ramos).find(r => r.dataset.ramo === desbloquea);
        if (target) {
          target.classList.remove("bloqueado");
        }
      }
    });
  });
});
