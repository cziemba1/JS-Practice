/*function makeDeck() {
    const deck = [];
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
    for (let value of values.split(",")) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}*/
//Trabajando con objetos y "this"

const myDeck = {
    deck: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    drawCards: [],
    startDeck() {
        const {
            deck,
            suits,
            values
        } = this;
        for (let value in values.split(",")) {
            for (let suit in suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    suffle() {
        const {
            deck
        } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}
