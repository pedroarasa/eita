const images = [
    "https://cdn.pixabay.com/animation/2025/06/02/00/11/00-11-22-330_512.gif",
    "https://cdn.pixabay.com/animation/2025/04/29/23/55/23-55-02-125_512.gif",
    "https://cdn.pixabay.com/animation/2024/07/30/00/20/00-20-15-644_512.gif",
    "https://cdn.pixabay.com/animation/2025/05/11/01/07/01-07-40-349_512.gif",
    "https://cdn.pixabay.com/animation/2023/05/04/16/12/16-12-04-538_512.gif",
    "https://cdn.pixabay.com/animation/2022/10/25/12/11/12-11-02-585_512.gif",
    "https://cdn.pixabay.com/animation/2024/01/19/00/53/00-53-56-818_512.gif",
    "https://cdn.pixabay.com/animation/2024/11/04/11/13/11-13-55-982_512.gif",
    "https://cdn.pixabay.com/animation/2024/10/29/00/47/00-47-41-487_512.gif",
    "https://cdn.pixabay.com/animation/2025/04/15/01/46/01-46-47-585_512.gif",
    "https://cdn.pixabay.com/animation/2024/11/24/21/05/21-05-33-467_512.gif",
    "https://cdn.pixabay.com/animation/2025/01/13/17/58/17-58-14-229_512.gif",
    "https://cdn.pixabay.com/animation/2023/05/17/16/04/16-04-26-783_512.gif",
    "https://cdn.pixabay.com/animation/2024/12/18/01/23/01-23-42-647_512.gif"
];

// Duplicar imagens para formar pares
let cards = [...images, ...images];

// Embaralhar cartas
cards.sort(() => Math.random() - 0.5);

const game = document.getElementById("game");

let flipped = [];
let locked = false;

// Criar as cartas
cards.forEach(src => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="face front" style="background-image: url('${src}')"></div>
        <div class="face back">?</div>
    `;

    card.addEventListener("click", () => flipCard(card, src));

    game.appendChild(card);
});

function flipCard(card, src) {
    if (locked || card.classList.contains("flip")) return;

    card.classList.add("flip");
    flipped.push({ card, src });

    if (flipped.length === 2) {
        locked = true;

        setTimeout(() => {
            if (flipped[0].src === flipped[1].src) {
                flipped[0].card.classList.add("match");
                flipped[1].card.classList.add("match");
                flipped = [];
                locked = false;
            } else {
                flipped[0].card.classList.remove("flip");
                flipped[1].card.classList.remove("flip");
                flipped = [];
                locked = false;
            }
        }, 900);
    }
}
