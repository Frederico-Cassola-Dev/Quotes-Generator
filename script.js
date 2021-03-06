window.addEventListener('load', getQuote);
window.addEventListener('load', startInterval);

const quote = document.querySelector(".quote");
const newQuote = document.querySelector("#btn-new-quote");
const pause = document.querySelector("#btn-pause");
const start = document.querySelector("#btn-start");
const before = document.querySelector("#btn-before");
const author = document.querySelector("h2");
const profession = document.querySelector(".profession");
const date = document.querySelector(".date");

// INTERVAL TIME
const time = 7000;

//  CLICK ACTION
newQuote.addEventListener("click", getQuote);
pause.addEventListener("click", pauseQuote);
before.addEventListener("click", beforeQuote);
start.addEventListener("click", startInterval);

//  TIMER RANDOM QUOTE
let timeInterval;
//  TEMPORARY QUOTE
const tempNewQuote = [];
//  RANDOM INDEX QUOTE
let randomNumber;

let i = -1;

//  INITIATE WINDOWS NEW QUOTE
function getQuote() {
    // timeInterval = setInterval(getQuote, time);

    //create a random number to chose a quote
    randomNumber = Math.floor(Math.random() * quotes.length);

    i++;

    //Print the quote chosen with the randomNumber
    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
    profession.innerHTML = quotes[randomNumber].profession;
    date.innerHTML = quotes[randomNumber].date;

    // Save the showen object in to tempNewQuote
    tempNewQuote.push(quotes[randomNumber]);
}

//  SHOW THE BEFORE QUOTE
function beforeQuote() {
    if (i <= 0) {
        i = 0;
        quote.innerHTML = tempNewQuote[i].quote;
        author.innerHTML = tempNewQuote[i].author;
        profession.innerHTML = tempNewQuote[i].profession;
        date.innerHTML = tempNewQuote[i].date;
    } else {
        i -= 1;
        quote.innerHTML = tempNewQuote[i].quote;
        author.innerHTML = tempNewQuote[i].author;
        profession.innerHTML = tempNewQuote[i].profession;
        date.innerHTML = tempNewQuote[i].date;
        tempNewQuote.pop(i)
    }
}

//  START TIME RANDOM QUOTE
function startInterval() {
    timeInterval = setInterval(getQuote, time)
}

// PAUSE TIME RANDOM QUOTE
function pauseQuote() {
    clearInterval(timeInterval);
}

const quotes = [
    {
        quote: "Connais-toi toi-m??me.",
        author: "Socrate",
        profession: "Philosophe",
        date: "(469 - 399 av. n. ??.)"
    },
    {
        quote: "Ce que je sais, c???est que je ne sais rien.",
        author: "Socrate",
        profession: "Philosophe",
        date: "(469 - 399 av. n. ??.)"
    },
    {
        quote: "Il faut apprendre ?? philosopher, et non pas la philosophie.",
        author: "Emmanuel Kant",
        profession: "Philosophe",
        date: "(1724 - 1804)"
    },
    {
        quote: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
        author: "Jean-Paul Sartre",
        profession: "Artiste, ??crivain, Philosophe, Romancier ",
        date: "(1905 - 1980)"
    },
    {
        quote: "Nul n'est m??chant volontairement.",
        author: "Platon",
        profession: "Philosophe",
        date: "(427 - 348 av. n. ??.)"
    },
    {
        quote: "La connaissance de l'homme ne peut pas s'??tendre au-del?? de son exp??rience propre.",
        author: "John Locke",
        profession: "Philosophe",
        date: "(1632 - 1704)"
    },
    {
        quote: "Les philosophes n'ont fait qu'interpr??ter le monde, nous avons maintenant ?? le transformer.",
        author: "Karl Marx",
        profession: "Philosophe, historien, sociologue, ??conomiste, journaliste, th??oricien de la r??volution, socialiste et communiste prussien.",
        date: "(1818 - 1883)"
    },
    {
        quote: "Si tu n'es pas Socrate, tu dois vivre comme si tu voulais ??tre Socrate.",
        author: "??picure",
        profession: "Philosophe",
        date: "(341 - 270 av. n. ??.)"
    },
    {
        quote: "Rien de grand ne s'est fait dans le monde sans passion.",
        author: "Hegel",
        profession: "Philosophe",
        date: "(1770 - 1831)"
    },
    {
        quote: "Le coeur a ses raisons que la raison ignore.",
        author: "Blaise Pascal",
        profession: "Philosophe, math??maticien, physicien, inventeur, philosophe, moraliste et th??ologien fran??ais",
        date: "(1623 - 1662)"
    },
    {
        quote: "La libert?? est le droit de faire tout ce que les lois permettent.",
        author: "Montesquieu",
        profession: "Philosophe, penseur politique, pr??curseur de la sociologie et ??crivain fran??ais des Lumi??res",
        date: "(1689 - 1755)"
    },
    {
        quote: "N???attends pas que les ??v??nements arrivent comme tu le souhaites ; d??cide de vouloir ce qui arrive et tu seras heureux.",
        author: "??pict??te",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "On ne se baigne jamais deux fois dans le m??me fleuve.",
        author: "H??raclite",
        profession: "Philosophe",
        date: "(385 - 322 av. n. ??.)"
    },
    {
        quote: "Celui qui cherche la sagesse est un sage, celui qui croit l'avoir trouv??e est un fou.",
        author: "S??n??que",
        profession: "Philosophe, dramaturge, po??te et ??crivain",
        date: "(8 - 65)"
    },
    {
        quote: "Il n'y a qu'une route vers le bonheur : c'est de renoncer aux choses qui ne d??pendent pas de notre volont??.",
        author: "??pict??te",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "C'est un homme sage celui qui ne regrette pas ce qu'il n'a pas mais se r??jouit de ce qu'il poss??de.",
        author: "??pict??te",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "Ce ne sont pas les ??v??nements qui perturbent l'homme mais sa fa??on de les interpr??ter.",
        author: "??pict??te",
        profession: "Philosophe",
        date: "50 - 125"
    },
    {
        quote: "Celui qui est le ma??tre de lui m??me est plus grand que celui qui est le ma??tre du monde.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. ??.)"
    },
    {
        quote: "Ne demeure pas dans le pass??, ne r??ve pas du futur, concentre ton esprit sur le moment pr??sent.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. ??.)"
    },
    {
        quote: "Vivons donc heureusement, sans ha??r ceux qui nous ha??ssent.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. ??.)"
    },
    {
        quote: "Vous devez ??tre le changement que vous voulez voir dans ce monde.",
        author: "Gandhi",
        profession: "Homme politique, Philosophe, R??volutionnaire ",
        date: "(1869 - 1948)"
    }
];
