// CADASTRO DE USUÁRIO
if (window.location.pathname.includes('cadastro.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      if (!nome || !email || !senha) {
        alert('Preencha todos os campos!');
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const existe = usuarios.some(user => user.email === email);

      if (existe) {
        alert('Email já cadastrado!');
        return;
      }

      usuarios.push({ nome, email, senha });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    });
  });
}

// LOGIN DE USUÁRIO
if (window.location.pathname.includes('login.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      if (!email || !senha) {
        alert('Preencha todos os campos!');
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const encontrado = usuarios.find(user => user.email === email && user.senha === senha);

      if (encontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(encontrado));
        alert('Login realizado com sucesso!');
        window.location.href = 'catalogo.html';
      } else {
        alert('Email ou senha incorretos!');
      }
    });
  });
}

// ...restante do seu scripts.js permanece igual

