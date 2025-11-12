document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelectorAll(".filtro");
  const cards = document.querySelectorAll(".card");

  filtros.forEach(botao => {
    botao.addEventListener("click", () => {
      const tipo = botao.getAttribute("data-filtro");

      cards.forEach(card => {
        if (tipo === "todos" || card.getAttribute("data-tipo") === tipo) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

