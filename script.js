window.addEventListener('load', getQuote)

const quote = document.querySelector(".quote");
const newQuote = document.querySelector(".button");
const author = document.querySelector("h2");
const profession = document.querySelector(".profession");
const date = document.querySelector(".date");


newQuote.addEventListener("click", getQuote);



function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
    profession.innerHTML = quotes[randomNumber].profession;
    date.innerHTML = quotes[randomNumber].date;
    
}

const quotes = [
    {
        quote: "Celui qui cherche une femme belle, bonne et intelligente, n'en cherche pas une mais trois.",
        author: "Oscar Wilde",
        profession: "Artiste, écrivain",
        date: "1854 - 1900"
    },
    {
        quote: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        author: "Antoine De Saint-Exupéry",
        profession: "Artiste, Aviateur, écrivain",
        date: "1900 - 1944"
    },
    {
        quote: "Enfer chrétien, du feu. Enfer païen, du feu. Enfer mahométan, du feu. Enfer hindou, des flammes. A en croire les religions, Dieu est né rôtisseur.",
        author: "Victor Hugo",
        profession: "Artiste, écrivain, Poète, Romancier",
        date: "1802 - 1885"
    },
    {
        quote: "Il n'y a point de bonheur sans courage, ni de vertu sans combat.",
        author: "Jean-Jacques Rousseau",
        profession: "Artiste, Auteur d'ouvrages philosophiques, écrivain, Philosophe",
        date: "1712 - 1778"
    },
    {
        quote: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
        author: "Jean-Paul Sartre",
        profession: "Artiste, écrivain, Philosophe, Romancier ",
        date: "1905 - 1980"
    },
    {
        quote: "Tu dois devenir l'homme que tu es. Fais ce que toi seul peux faire. Deviens sans cesse celui que tu es, sois le maître et le sculpteur de toi-même.",
        author: "Friedrich Nietzsche",
        profession: "Artiste, écrivain, Philosophe",
        date: "1844 - 1900"
    },

        
];
