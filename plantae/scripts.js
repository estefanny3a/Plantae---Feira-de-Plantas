//filtros catalogo
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

//filtros palestras e oficinas
document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelectorAll(".cart");
  const cards = document.querySelectorAll(".content");

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

//chatbot
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.chat-toggle');
  const chatWindow = document.querySelector('.chat-window');
  const sendBtn = document.getElementById('chatSend');
  const input = document.getElementById('chatText');
  const chatBody = document.getElementById('chatBody');

  toggle.addEventListener('click', () => {
    if (chatWindow.style.display === 'flex') {
      chatWindow.style.display = 'none';
    } else {
      chatWindow.style.display = 'flex';
    }
  });

  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== '') {
      const userMsg = document.createElement('div');
      userMsg.classList.add('msg', 'user');
      userMsg.textContent = text;
      chatBody.appendChild(userMsg);
      input.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.classList.add('msg', 'bot');
        botMsg.textContent = 'Oi! Como posso te ajudar hoje?';
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  });
});

//pesquisa
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const searchOptions = document.querySelectorAll(".option");

  searchOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const page = opt.getAttribute("data-page");
      const termo = searchInput.value.trim();

      if (termo !== "") {
        window.location.href = `${page}?q=${encodeURIComponent(termo)}`;
      } else {
        window.location.href = page;
      }
    });
  });

  const params = new URLSearchParams(window.location.search);
  const termoBuscado = params.get("q");
  if (termoBuscado) {
    searchInput.value = termoBuscado.toLowerCase();
  }

  const url = window.location.pathname;

  if (url.includes("catalogo.html")) {

    const cards = document.querySelectorAll(".card");

    function filtrarCatalogo() {
      const termo = searchInput.value.toLowerCase();

      cards.forEach(card => {
        const nome = card.querySelector("h3").textContent.toLowerCase();

        card.style.display = nome.includes(termo) ? "block" : "none";
      });
    }

    filtrarCatalogo();
    searchInput.addEventListener("input", filtrarCatalogo);
  }

  if (url.includes("palestras.html")) {

    const itens = document.querySelectorAll(".content");

    function filtrarPalestras() {
      const termo = searchInput.value.toLowerCase();

      itens.forEach(item => {
        const texto = item.textContent.toLowerCase();

        item.style.display = texto.includes(termo) ? "flex" : "none";
      });
    }

    filtrarPalestras();
    searchInput.addEventListener("input", filtrarPalestras);
  }

  if (url.includes("comunidade.html")) {

    const comunidades = document.querySelectorAll(".carf");

    function filtrarComunidades() {
      const termo = searchInput.value.toLowerCase();

      comunidades.forEach(item => {
        const texto = item.textContent.toLowerCase();

        item.style.display = texto.includes(termo) ? "flex" : "none";
      });
    }

    filtrarComunidades();
    searchInput.addEventListener("input", filtrarComunidades);
  }

});



