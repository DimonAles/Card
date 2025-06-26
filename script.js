// Чекаємо, поки вся HTML-структура сторінки завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // Знаходимо на сторінці елементи руки гравця та ігрового столу
    const playerHand = document.getElementById('player-hand');
    const playArea = document.getElementById('play-area');

    // --- ФУНКЦІЯ ДЛЯ СТВОРЕННЯ КАРТИ ---
    function createCard(cardValue) {
        // Створюємо новий HTML-елемент <div>
        const cardElement = document.createElement('div');
        
        // Додаємо йому клас 'card' для застосування стилів з CSS
        cardElement.classList.add('card');
        
        // Встановлюємо фонове зображення. Назва файлу береться з аргументу.
        cardElement.style.backgroundImage = `url(${cardValue}.svg)`;
        
        // Зберігаємо значення карти в data-атрибуті (це знадобиться в майбутньому)
        cardElement.dataset.cardValue = cardValue;
        
        // Додаємо обробник події "клік" для цієї карти
        cardElement.addEventListener('click', onCardClick);
        
        return cardElement;
    }

    // --- ФУНКЦІЯ, ЯКА ВИКОНУЄТЬСЯ ПРИ КЛІЦІ НА КАРТУ ---
    function onCardClick() {
        // 'this' тут вказує на карту, по якій клікнули (cardElement)
        
        // Перевіряємо, де зараз знаходиться карта: в руці чи на столі
        if (this.parentElement === playerHand) {
            // Якщо карта в руці, переміщуємо її на стіл
            console.log(`Кидаємо карту ${this.dataset.cardValue} на стіл.`);
            playArea.appendChild(this);
        } else {
            // Якщо карта вже на столі, повертаємо її назад в руку
            console.log(`Забираємо карту ${this.dataset.cardValue} зі столу.`);
            playerHand.appendChild(this);
        }
    }

    // --- ПОЧАТОК ГРИ ---
    // Створюємо карту Туз Пік
    const aceOfSpades = createCard('1S');
    // Створюємо карту Туз Хрестовий (Туз Треф)
    const aceOfClubs = createCard('1C'); // <-- НОВИЙ РЯДОК

    // Додаємо обидві карти в руку гравця
    playerHand.appendChild(aceOfSpades);
    playerHand.appendChild(aceOfClubs); // <-- НОВИЙ РЯДОК

});
