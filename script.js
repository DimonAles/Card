document.addEventListener('DOMContentLoaded', () => {
    // --- ЗНАХОДИМО ЕЛЕМЕНТИ НА СТОРІНЦІ ---
    const playerHand = document.getElementById('player-hand');
    const playArea = document.getElementById('play-area');
    const deckPile = document.getElementById('deck-pile');

    // --- НАШІ КАРТИ (ПОКИ ЩО ВРУЧНУ) ---
    // В майбутньому ми будемо генерувати це автоматично
    const initialCards = [
        'AS', 'AC', 'AH', 'AD', // Тузи
        'KS', 'KC', 'KH', 'KD'  // Королі
    ];

    // --- ФУНКЦІЯ ТАСУВАННЯ КОЛОДИ (алгоритм Фішера-Єйтса) ---
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Обмін елементів
        }
    }

    // --- ФУНКЦІЯ ДЛЯ СТВОРЕННЯ КАРТИ ---
    // (залишається майже без змін)
    function createCard(cardValue) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage = `url(${cardValue}.svg)`;
        cardElement.dataset.cardValue = cardValue;
        cardElement.addEventListener('click', onCardClick);
        return cardElement;
    }

    // --- ФУНКЦІЯ, ЯКА ВИКОНУЄТЬСЯ ПРИ КЛІЦІ НА КАРТУ ---
    // (залишається без змін)
    function onCardClick() {
        if (this.parentElement === playerHand) {
            playArea.appendChild(this);
        } else {
            playerHand.appendChild(this);
        }
    }
    
    // --- ФУНКЦІЯ ОНОВЛЕННЯ ВИГЛЯДУ КОЛОДИ ---
    function updateDeckView(deck) {
        // Очищуємо попередній вигляд колоди
        deckPile.innerHTML = '';

        if (deck.length > 0) {
            // Якщо карти є, створюємо сорочку
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            deckPile.appendChild(cardBack);

            // Створюємо і додаємо лічильник
            const counter = document.createElement('div');
            counter.id = 'deck-counter';
            counter.textContent = deck.length;
            deckPile.appendChild(counter);
        }
    }

    // --- ПОЧАТОК ГРИ ---

    // 1. Створюємо нашу ігрову колоду з початкових карт
    let gameDeck = [...initialCards];

    // 2. Тасуємо колоду
    shuffle(gameDeck);
    console.log("Перетасована колода:", gameDeck);

    // 3. Роздаємо гравцеві 6 карт
    const cardsToDeal = 6;
    for (let i = 0; i < cardsToDeal; i++) {
        // Беремо карту з кінця колоди
        const cardValue = gameDeck.pop();
        if (cardValue) { // Перевірка, чи колода не порожня
            const cardElement = createCard(cardValue);
            playerHand.appendChild(cardElement);
        }
    }
    
    console.log("Карти в руці гравця роздано.");
    console.log("Залишок в колоді:", gameDeck);
    
    // 4. Оновлюємо вигляд колоди на столі (показуємо сорочку і лічильник)
    updateDeckView(gameDeck);

});
