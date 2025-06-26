// Чекаємо, поки вся HTML-структура сторінки завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // Знаходимо на сторінці елементи руки гравця та ігрового столу
    const playerHand = document.getElementById('player-hand');
    const playArea = document.getElementById('play-area');

    // --- ФУНКЦІЯ ДЛЯ СТВОРЕННЯ КАРТИ ---
    function createCard(cardValue) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        
        // Використовуємо правильну назву файлу
        cardElement.style.backgroundImage = `url(${cardValue}.svg)`;
        
        cardElement.dataset.cardValue = cardValue;
        cardElement.addEventListener('click', onCardClick);
        
        return cardElement;
    }

    // --- ФУНКЦІЯ, ЯКА ВИКОНУЄТЬСЯ ПРИ КЛІЦІ НА КАРТУ ---
    function onCardClick() {
        if (this.parentElement === playerHand) {
            console.log(`Кидаємо карту ${this.dataset.cardValue} на стіл.`);
            playArea.appendChild(this);
        } else {
            console.log(`Забираємо карту ${this.dataset.cardValue} зі столу.`);
            playerHand.appendChild(this);
        }
    }

    // --- ПОЧАТОК ГРИ ---
    // Створюємо карти, використовуючи правильні назви файлів
    const aceOfSpades = createCard('AS'); // <-- ЗМІНЕНО з '1S'
    const aceOfClubs = createCard('AC');   // <-- ЗМІНЕНО з '1C'

    // Додаємо обидві карти в руку гравця
    playerHand.appendChild(aceOfSpades);
    playerHand.appendChild(aceOfClubs);

});
