// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 11 = Dezembro (Natal)

    const difference = christmas - now;
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        document.getElementById('countdown-text').textContent = "Feliz Natal!";
    }
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Efeito de neve (posicionamento aleatório e animação)
const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach(snowflake => {
    const startX = Math.random() * 100; // Posição inicial aleatória na horizontal
    const duration = Math.random() * 5 + 5; // Duração aleatória da animação de queda

    snowflake.style.left = `${startX}%`;
    snowflake.style.animationDuration = `${duration}s`; // A cada floco de neve, o tempo de queda é aleatório
});

// Função para tocar música ao clicar no botão
function playMusic() {
    const player = document.getElementById('player');
    player.src = "https://www.youtube.com/embed/1gAXqRu_wqQ?autoplay=1"; // Link do vídeo com autoplay ativado
    document.getElementById('youtube-player').style.display = "block"; // Mostra o iframe do YouTube
}
