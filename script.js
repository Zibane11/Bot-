const users = [
  { username: 'usuario1', password: 'senha1' },
  { username: 'usuario2', password: 'senha2' },
  { username: 'usuario3', password: 'senha3' }
];

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginScreen = document.querySelector('.login-screen');
  const mainScreen = document.querySelector('.main-screen');
  const loginError = document.getElementById('login-error');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      loginScreen.classList.add('d-none');
      mainScreen.classList.remove('d-none');
      generateRandomTime();
    } else {
      loginError.textContent = 'Usuário ou senha incorretos.';
    }
  });
});
function generateRandomTime() {
  const now = new Date(); // Obtém a hora atual do sistema
  const hours = now.getHours();
  const minutes = generateRandomMinutes(now.getMinutes());
  const seconds = generateRandomSeconds(now.getSeconds());

  generateTimeMatrix();

  const randomTimeElement = document.getElementById('random-time');
  randomTimeElement.textContent = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
  randomTimeElement.style.color = 'black'; // Cor preta
}

function generateTimeMatrix() {
  const matrixBody = document.getElementById('time-matrix');
  matrixBody.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    const now = new Date(); // Obtém a hora atual do sistema
    const hours = now.getHours();
    const minutes = generateRandomMinutes(now.getMinutes());
    const seconds = generateRandomSeconds(now.getSeconds());

    const cellHours = document.createElement('td');
    const cellMinutes = document.createElement('td');
    const cellSeconds = document.createElement('td');
    const cellPrevisao = document.createElement('td'); // Nova coluna

    cellHours.textContent = formatTimeComponent(hours);
    cellMinutes.textContent = formatTimeComponent(minutes);
    cellSeconds.textContent = formatTimeComponent(seconds);

    cellHours.style.color = 'black'; // Cor preta
    cellMinutes.style.color = 'black'; // Cor preta
    cellSeconds.style.color = 'black'; // Cor preta

    cellPrevisao.textContent = generateRandomPrevisao(); // Gerar informação de Previsão
    row.classList.add(`row-color-${i + 1}`); // Adicionar a classe de cor aleatória à linha

    row.appendChild(cellHours);
    row.appendChild(cellMinutes);
    row.appendChild(cellSeconds);
    row.appendChild(cellPrevisao); // Adicionar a célula de Previsão à linha

    matrixBody.appendChild(row);
  }
}

// Função auxiliar para formatar componentes de tempo (horas, minutos, segundos)
function formatTimeComponent(timeComponent) {
  return timeComponent.toString().padStart(2, '0'); // Adiciona um zero à esquerda se for menor que 10
}

function getRandomColor() {
  const colors = ['#e91e63', '#9c27b0'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Função para gerar informações aleatórias de Previsão
function generateRandomPrevisao() {
  const previsoes = [
    'Rosa 20X a ...',
    'Rosa 10X a ...',
    'Roxo 2X a 3X',
    'Roxo 3X a 7X',
    'Roxo 3X a 5X',
    'Roxo 2X a 7X',
    'Roxo 2X a 8X',
    'Roxo 2X a 6X',
    'Roxo 3X a 4X',
    'Roxo 2X a 4X'
  ];

  return previsoes[Math.floor(Math.random() * previsoes.length)];
}

// Função para gerar minutos em ordem crescente
function generateRandomMinutes(startingMinutes) {
  return startingMinutes + Math.floor(Math.random() * (60 - startingMinutes));
}

// Função para gerar segundos em ordem crescente
function generateRandomSeconds(startingSeconds) {
  return startingSeconds + Math.floor(Math.random() * (60 - startingSeconds));
}
