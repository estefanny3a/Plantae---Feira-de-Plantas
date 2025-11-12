//filtros
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

//chatbot

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.chat-toggle');
  const chatWindow = document.querySelector('.chat-window');
  const sendBtn = document.getElementById('chatSend');
  const input = document.getElementById('chatText');
  const chatBody = document.getElementById('chatBody');

  // Abre / fecha o chat
  toggle.addEventListener('click', () => {
    if (chatWindow.style.display === 'flex') {
      chatWindow.style.display = 'none';
    } else {
      chatWindow.style.display = 'flex';
    }
  });

  // Envia mensagem do usuário
  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== '') {
      const userMsg = document.createElement('div');
      userMsg.classList.add('msg', 'user');
      userMsg.textContent = text;
      chatBody.appendChild(userMsg);
      input.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;

      // Resposta automática
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
