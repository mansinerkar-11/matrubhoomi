


var quotes = [
    "\" Water is the driving force of all nature \" <br> - Leonardo da Vinci",
    "\" Thousands have lived without love, not one without water \" <br> - W. H. Auden",
    "\" Water is life's mater and matrix, mother and medium. There is no life without water\" <br> - Albert Szent Györgyi",
    "\" When the well is dry, we learn the worth of water \" <br> - Benjamin Franklin",
    "\" The wars of the twenty<br> -first century will be fought over water \" <br> - Ismail Serageldin",
    "\" Water, the Hub of Life. Water is its mater and matrix, mother and medium. Water is the most extraordinary substance! Practically all its properties are anomalous, which enabled life to use it as building material for its machinery \" <br> - Albert Szent<br> -Györgyi",
    "\" We forget that the water cycle and the life cycle are one \" <br> - Jacques Yves Cousteau",
    "\" Water is the best of all things \" <br> - Pindar",
    "\" Water links us to our neighbor in a way more profound and complex than any other \" <br> - John Thorson",
    "\" By means of water, we give life to everything \" <br> - Koran",
    "\" The cure for anything is salt water: sweat, tears, or the sea \" <br> - Isak Dinesen",
    "\" Life is like the ocean. It can be calm or still, and rough or rigid, but in the end, it is always beautiful \" <br> - Unknown",
    "\" Water is the soul of the Earth \" <br> - W.H. Auden",
    "\" Water is the most perfect traveler because when it travels, it becomes the path itself! \" <br> - Mehmet Murat ildan",
    "\" Water is the mirror of nature \" <br> - Marty Rubin",
    "\" Water is life, and clean water means health \" <br> - Audrey Hepburn",
    "\" Water is the driving force in nature \" <br> - Pierre Teilhard de Chardin",
    "\" Water is the elixir of life \" <br> - Unknown",
    "\" A river is more than an amenity, it is a treasure \" <br> - Oliver Wendell Holmes",
    "\" Water, the precious liquid of life \" <br> - Lailah Gifty Akita",

];

var h1Element = document.getElementById("quotes");

var randomIndex = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomIndex];

h1Element.innerHTML = randomQuote;