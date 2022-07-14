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
const time = 500;


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

//  INITIATED WINDOW NEW QUOTE
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

    console.log(`This is the first quote Index: ${i}`);
    console.log(`Quote: ${tempNewQuote[i].quote}`);
}


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
    // console.log(tempNewQuote);
    // console.log(`This is the before quote Index: ${i}`);
    // console.log(`Quote: ${tempNewQuote[i].quote}`);
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
        quote: "Connais-toi toi-même.",
        author: "Socrate",
        profession: "Philosophe",
        date: "(469 - 399 av. n. è.)"
    },
    {
        quote: "Ce que je sais, c’est que je ne sais rien.",
        author: "Socrate",
        profession: "Philosophe",
        date: "(469 - 399 av. n. è.)"
    },
    {
        quote: "Il faut apprendre à philosopher, et non pas la philosophie.",
        author: "Emmanuel Kant",
        profession: "Philosophe",
        date: "(1724 - 1804)"
    },
    {
        quote: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
        author: "Jean-Paul Sartre",
        profession: "Artiste, écrivain, Philosophe, Romancier ",
        date: "(1905 - 1980)"
    },
    {
        quote: "Nul n'est méchant volontairement.",
        author: "Platon",
        profession: "Philosophe",
        date: "(427 - 348 av. n. è.)"
    },
    {
        quote: "La connaissance de l'homme ne peut pas s'étendre au-delà de son expérience propre.",
        author: "John Locke",
        profession: "Philosophe",
        date: "(1632 - 1704)"
    },
    {
        quote: "Les philosophes n'ont fait qu'interpréter le monde, nous avons maintenant à le transformer.",
        author: "Karl Marx",
        profession: "Philosophe, historien, sociologue, économiste, journaliste, théoricien de la révolution, socialiste et communiste prussien.",
        date: "(1818 - 1883)"
    },
    {
        quote: "Si tu n'es pas Socrate, tu dois vivre comme si tu voulais être Socrate.",
        author: "Épicure",
        profession: "Philosophe",
        date: "(341 - 270 av. n. è.)"
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
        profession: "Philosophe, mathématicien, physicien, inventeur, philosophe, moraliste et théologien français",
        date: "(1623 - 1662)"
    },
    {
        quote: "La liberté est le droit de faire tout ce que les lois permettent.",
        author: "Montesquieu",
        profession: "Philosophe, penseur politique, précurseur de la sociologie et écrivain français des Lumières",
        date: "(1689 - 1755)"
    },
    {
        quote: "N’attends pas que les événements arrivent comme tu le souhaites ; décide de vouloir ce qui arrive et tu seras heureux.",
        author: "Épictète",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "On ne se baigne jamais deux fois dans le même fleuve.",
        author: "Héraclite",
        profession: "Philosophe",
        date: "(385 - 322 av. n. è.)"
    },
    {
        quote: "Celui qui cherche la sagesse est un sage, celui qui croit l'avoir trouvée est un fou.",
        author: "Sénèque",
        profession: "Philosophe, dramaturge, poète et écrivain",
        date: "(8 - 65)"
    },
    {
        quote: "Il n'y a qu'une route vers le bonheur : c'est de renoncer aux choses qui ne dépendent pas de notre volonté.",
        author: "Épictète",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "C'est un homme sage celui qui ne regrette pas ce qu'il n'a pas mais se réjouit de ce qu'il possède.",
        author: "Épictète",
        profession: "Philosophe",
        date: "(50 - 125)"
    },
    {
        quote: "Ce ne sont pas les événements qui perturbent l'homme mais sa façon de les interpréter.",
        author: "Épictète",
        profession: "Philosophe",
        date: "50 - 125"
    },
    {
        quote: "Celui qui est le maître de lui même est plus grand que celui qui est le maître du monde.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. è.)"
    },
    {
        quote: "Ne demeure pas dans le passé, ne rêve pas du futur, concentre ton esprit sur le moment présent.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. è.)"
    },
    {
        quote: "Vivons donc heureusement, sans haïr ceux qui nous haïssent.",
        author: "Bouddha",
        profession: "Chef spirituel, Religieux",
        date: "(623 - 543 av. n. è.)"
    },
    {
        quote: "Vous devez être le changement que vous voulez voir dans ce monde.",
        author: "Gandhi",
        profession: "Homme politique, Philosophe, Révolutionnaire ",
        date: "(1869 - 1948)"
    },
    // {
    //     quote: ".",
    //     author: "",
    //     profession: "",
    //     date: ""
    // },


];
