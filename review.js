/* READ THIS :  
please install Quokka.js ext in your VS code to run the javaScript code inside VS code 
after install click on search tab that is on top and write : >Quokka.js : Start on Current file 
  :)*/


/* NOTE: THIS ARRAY contain the movies data ,each movie info are stored or represented in one single attribute inside an object with unique id (movie id) 
EX: Death Race movie have  id: 3  
Some attributes contain an array value (Data structure) 
dw it's possible :)*/

const data = [
  {
    id: 1,
    title: "The Lord of the Rings: The Fellowship of the ring",
    publicationDate: "2001-12-19",
    director: "Peter Jackson",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasBookAdaptation: true,
    runningTime: 178,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.8,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },

  {
    id: 2,
    title: "Interstellar",
    publicationDate: "2014-10-26",
    director: "Christopher Nolan",
    genres: [
      "science fiction",
      "documentary",
      "Adventure",
      "Action",
      "fantasy",
      "drama",
      "crime fiction",
    ],
    hasBookAdaptation: false,
    runningTime: 169,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.5,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.5,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },

  {
    id: 3,
    title: "Death Race",
    publicationDate: "2008-08-22",
    director: "Paul W. S. Anderson",
    genres: ["Action", "novel", "adventure", "drama"],
    hasBookAdaptation: false,
    runningTime: 111,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 3.7,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },

  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "2001-11-04",
    director: "	Chris Columbus",
    genres: ["fantasy", "adventure"],
    hasBookAdaptation: true,
    runningTime: 152,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },

  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "2011-04-17",
    director: "David Benioff",
    genres: ["Action", "Adventure", "Fantasy", "Serial drama", "Tragedy"],
    hasBookAdaptation: true,
    runningTime: 82,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/* NOTE: getMovies function return just the data*/
function getMovies() {
  return data;
}

/* CONCEPT: to reach an movie by ID that lives inside an BIG ARRAY we need to create an function that takes "id as PROP" and use the FIND ARRAY METHOD that return the movie object */

function getMovie(id) {
  return data.find((d) => d.id === id);
}


const movie = getMovie(3);
const {title ,director,publicationDate, runningTime , hasBookAdaptation} = movie

// SHORT CIRCUT

//falsy values null , undefined 

function getTotalReviewMovie(movie) {
  const goodreads = movie.reviews?.goodreads?.reviewsCount ?? 0
  const librarything = movie.reviews?.librarything?.reviewsCount ?? 0
 
  return goodreads + librarything
}


const totalReview = getTotalReviewMovie(movie)

totalReview// not a number (NaN)










































//const movie = getMovie(1);
//const {title, director,reviews,geners} = movie



// destructor 
/*
  ---------------------------------------------------------------------------
  || object ||

  // BEFORE //
  const title = movie.title;
  const director = movie.director;
  const reviews = movie.reviews;
  const geners = movie.geners

  title
  director
  reviews 
  geners
  

  // AFTER //
  const {title, director,reviews,geners} = movie

  title
  director
  reviews 
  geners

  ---------------------------------------------------------------------------
  || Array ||

  // BEFORE //
  const primaryGenere = genres[0]
  const secondaryGenere = genres[1]
  
  primaryGenere
  secondaryGenere

  // AFTER //
  const [primaryGenere,secondaryGenere] = geners
  primaryGenere
  secondaryGenere

  ---------------------------------------------------------------------------
  
*/



//Rest/spread operator

/*
  ---------------------------------------------------------------------------
  || REST ||

  //BEFORE//
  const primaryGenere = genres[0]
  const secondaryGenere = genres[1]

  const otherGeneres without primaryGenere and secondaryGenere ? 

  //AFTER REST OPERATOR//

  const [primaryGenere,secondaryGenere, ...otherGeneres] = geners

  primaryGenere
  secondaryGenere
  otherGeneres

  NOTE : U CAN ONLY PLACE IT IN THE END!



  ---------------------------------------------------------------------------
  || SPREAD ||
  now we want to add new geners value to our geners array how can we do that?
  ---------------------------------------------------------------------------

  || Array ||

  // BEFORE // 
  const newGeners = [geners, 'action']
  newGeners //we have two array here !! not what we want !


  // AFTER //
  const newGeners = [...geners, 'action']
  newGeners 

  NOTE: WE CAN ALSO PLACE IT IN THE END
  const newGeners = ['action', ...geners]
  newGeners 


  ---------------------------------------------------------------------------
  || object ||

  //spread operator with objects (Adding new prop or updating existing one !)
  
  // BEFORE // 
  const updatedMovie = {movie, bookDatePublication : '2005-10-26'}
  updatedMovie //  { {all the old props} , bookDatePublication : ...} 

  // AFTER // 

  const updatedMovie = {...movie, bookDatePublication : '2005-10-26', director : 'Mehdi'}
  updatedMovie //  { all the old props, director : 'Mehdi' , bookDatePublication : ...} 

  ---------------------------------------------------------------------------
*/



// TEMPLATE LITERALS

/*
   ---------------------------------------------------------------------------



  const movie = getMovie(2);
  const {title, director,runningTime, publicationDate , hasBookAdaptation} = movie

  
  const summary = `${title}  is a movie,
  that was directed by ${director} , 
  and published in ${publicationDate.split('-')[0]}`;

  summary 
  //Interstellar is a movie... directed by Nolan... 
  // published in 2014
 
  ---------------------------------------------------------------------------

*/






//----------------------------------------------------------------------------------------------------------------------------------

// TERNARIES INSTEAD OF IF/ELSE STATEMENTS

/*
  --------------------------------------------------------------------------- 
  const movie = getMovie(2);
  const {title, director,runningTime, publicationDate , hasBookAdaptation} = movie

  runningTime //169
  const movieDuration = runningTime >= 120 ? "over than 2 hour" : "less than 2 hour"
  movieDuration // 'over than 2 hour'


  const summary = `${title}  is a movie,
  that was directed by ${director} , 
  and published in ${publicationDate.split('-')[0]},
  the movie was ${hasBookAdaptation ? '' : 'not'} adapted from a book`;

  summary
  //Interstellar is a movie... directed by Nolan... 
  // published in 2014 , has not adapted from a book

  ---------------------------------------------------------------------------
*/


// ARROW FUNCTION

/*
  ---------------------------------------------------------------------------
  //BEFORE ARROW FUN //

  const movie = getMovie(2);
  const {title, director, publicationDate} = movie

  function getYear(str){
    return str.split("-")[0];
  }

  const Year = getYear(publicationDate);
  Year //2014



  //AFTER ARROW FUN //

  const getYear = (str)=> str.split("-")[0];

  const Year = getYear(publicationDate);
  Year //2014


  //Using curly braces //

  const getMonthYear = (str) => {
    return str.split("-")[1] +'-'+ str.split("-")[0]
  };

  const Year = getMonthYear(publicationDate);
  Year //10-2014

  ---------------------------------------------------------------------------
*/




// Short-Circuiting And Logical Operators: &&, ||, ??

/*
  ---------------------------------------------------------------------------

  // THE AND OPERATOR //

  const movie = getMovie(2)
  const {title, director,hasBookAdaptation} = movie

  console.log(true && "Some string"); //Some string
  console.log(false && "Some string"); //false
  hasBookAdaptation // false
  console.log(hasBookAdaptation && "was adapted from book"); // false


  const movie = getMovie(2)
  const {title, director,hasBookAdaptation, publicationDate,name} = movie


  // falsy : 0, '', null, undefined 
  console.log(0 && 'Some string') //0
  console.log(name && 'Some string') //undefined
  console.log(null && 'Some string') //null
  console.log('' && 'Some string') //''

  ---------------------------------------------------------------------------


  // THE OR OPERATOR //

  const movie = getMovie(2);
  movie.reviews.librarything.reviewsCount; // 0
  

  console.log(false || "Some string"); //Some string
  console.log(true || "Some string"); //true
  hasBookAdaptation // true
  console.log(hasBookAdaptation || "was adapted from book"); // true


  console.log(movie.translations.arabic) // undefined
  const arabicTranslation = movie.translations.arabic || "Not translated"

  arabicTranslation //Not translated


  // PROBLEM Zero is a falsy value //

  const count = movie.reviews.librarything.reviewsCount || 'No data';
  count //452

  ---------------------------------------------------------------------------


  // THE ?? OPERATOR //

  falsy : null , undefined

  const count = movie.reviews.librarything.reviewsCount ?? 'No data';
  count //0

  ---------------------------------------------------------------------------

*/


// Optional Chaining

  
/*
  //BEFORE//
  
  function getTotalReviewMovie(movie){
    const goodreads = movie.reviews.goodreads.reviewsCount
    
    const librarything = movie.reviews.
    librarything.reviewsCount //Cannot read prop of undefined

    return goodreads + librarything
  }
  console.log(getTotalReviewMovie(movie)) //Cannot read prop of undefined

  // AFTER //

  const movie = getMovie(3)
  function getTotalReviewMovie(movie){
    const goodreads = movie.reviews?.goodreads?.reviewsCount ?? 0
    
    const librarything = movie.reviews?.librarything?.reviewsCount ?? 0

    return goodreads + librarything
  }
  console.log(getTotalReviewMovie(movie)) //49701

  ---------------------------------------------------------------------------
*/


 