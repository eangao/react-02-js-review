const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
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
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
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
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
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

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
///////////////////////////////////////////
// Destructuring with object
//////////////////////////////////////////

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

// Now here, what's crucial is
// that we actually give these variable names here
// exactly the same name as the properties in the object.
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, author, genres);

////////////////////////////////////////////////////
// Destructuring of array
////////////////////////////////////////////////////
// const primaryGenre = genres[0];
// const secodaryGenre = genres[1];

// using array destructuring

// And then here we have the exact same result.
// So basically the first variable that we define here
// this in this way, in this destructuring
// will take the first element out of the array
// and assign it to this variable.
// And then here, of course, the second one.
// So it takes the second element out
// of the array and assigns it to this variable.

// const [primaryGenre, secodaryGenre] = genres;
// console.log(primaryGenre, secodaryGenre);

////////////////////////////////////////////////////////////
// Rest/Spread Operator
////////////////////////////////////////////////////////////

/////////////////////////////
// Rest Operator - Array
const [primaryGenre, secodaryGenre, ...otherGenres] = genres; // otherGenres sholud be place at the end of the operator
console.log(primaryGenre, secodaryGenre, otherGenres);

///////////////////////////////
// Spread Opearator - Array

// We want one array which contains all
// of these values here individually.
// So all of these six genres
// one by one and not one array, which contains five genres
// and then simply the other genre in the end.
// So what we can do is to use the spread operator.
const newGenres = [...genres, "epic fantasy"];
newGenres;

// and, of course, we could also place it at the end.
// And then epic fantasy would simply be
// at the beginning of the new array.
const newGenres2 = ["epic fantasy", ...genres];
newGenres2;

//////////////////////////////////////
// Spread Operator - Object

//  the spread operator is even more important
// because it allows us to add new properties
// and also to update existing ones.

// this is how we add new properties
// to an object using the spread operator.
const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
updatedBook;

// But, as I said in the beginning,
// we can also use it to basically update properties,
// so by simply overriding them.
// So we see that we have this pages property
// but let's imagine for some reason that it is wrong.
// And so we can simply overwrite that here.
// So let's say the number of pages is actually 1210.
// So if we inspect that again,
// then you see that now it is actually 1210.
// And the reason that works is
// because, as I mentioned in the beginning,
// this syntax here basically takes all the elements,
// so all the properties of the object, into this new object.
// And then of course will contain the original pages property.
// And so then we have two pages properties
// and so then the second one,
// so this last one, will override the first one.

// So whenever we want to do this,
// the spread-out original object needs to be first.
const updatedBook2 = {
  ...book,

  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};
updatedBook2;

// And I'm focusing so much here
// on this because this is going to be
// really, really important when we work with React
// because when we want to update objects in state,
// which you will learn later what that is,
// we will need to use this technique.
// And we will also talk
// about this a bit later again in this section.
// But for now, just keep in mind
// that when we want to create a new object
// and then add new properties to it or override existing ones
// this is how we do it.
// So we use the spread operator
// and the same is true for a race.
// So very, very important.
// So it's fundamental that you know this
// as we go through the course.

//////////////////////////////////////////////////////////
// Template Literals - ``
//////////////////////////////////////////////////////////
// So template literals are an ES6 JavaScript feature
// which allows us to very easily create strings
// that contain some JavaScript variables,
// or actually that contains any JavaScript expression,
// inside of a string.

//so anything that immediately produces a value,
// can be placed here inside this block.
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`; //
summary;

///////////////////////////////////////////////////////////
// Ternaries Instead of if/else Statement
///////////////////////////////////////////////////////////

// So, in React, we need to define values
// based on a condition all the time, and many times
// in situations where we cannot use an if else statement.
// And so let's now learn how to use
// the ternary operator instead.

const pagesRange = pages > 1000 ? "over a thousand" : " less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

/////////////////////////////////////////////////////////////
// Arrow Functions
/////////////////////////////////////////////////////////////
// So, arrow functions are a new way of writing functions
// that have been introduced into JavaScript in ES6,
// and they are very helpful for writing quick
// and short one-line functions.
// Now, many people actually use arrow functions
// for all functions now, but I personally really don't like
// that and I only find them useful for,
// well, as I said, these one-liner functions.

// function declation
// function getYear(str) {
//   return str.split("-")[0];
// }

//////////////////////////
// Arrow function

//function expresion
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

////////////////////////////////////////////////////////////////
// Short-Circuiting And Logical Operators: &&, ||, ??
////////////////////////////////////////////////////////////////

// So in JavaScript, some logical operators,
// such as the && and the || operator,
// have a feature called short circuiting.

// So short circuiting in logical operators,
// means that, in certain conditions,
// the operator will immediately return the first value
// and not even look at the second value.
// And this probably sounds confusing

console.log(true && "some string"); // no short circuit

// when the first value is false.
// So here if we have false, then there is a short circuit
// and the operator does not even look at the second value.
// So instead it immediately returns the first one here.
// And that's gonna be quite helpful
// basically in order to use this as an if.
console.log(false && "some string"); // short circuit

console.log(hasMovieAdaptation && "This book has a moview");

// truthy and falsy values.

// And this also works with so-called truthy and falsy values.
// So a truthy value is basically any value
// that is not a falsy value.
// And the falsy value, just write that here,
// is zero and, empty string, null and undefined.
// And I think there's actually one more,
// which I can't think of right now.
// So yeah, these are the ones that actually matter.
// So this one is not one of these falsy values
// and, therefore, it's a truthy value,
// which means that for the end operator,
// it is as if this was actually really a true value
// because, basically, behind the scenes
// this gets converted to true.
// And so since this is true,
// we get the second value out of the operation.
// But if we use a falsy value, let's say zero,
// then we get that first one.
// So here once again, we have short circuiting in action
// because this is a falsy value,

///////////////////////////////
//falsy: 0, '', null, undefined

// && operator
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// || operator
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// however, this can also go wrong
// because this works for all the falsy values
// such as zero as well.
// Sometimes that can have some consequences.

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// but not when it is zero.
// So when this value is zero, it is a falsy value.
// And so when this is a falsy value,
// which zero is,
// the result of this operator will be the second part,
// which in this case is, again, wrong.

// Now to solve this
// JavaScript has recently added a new logical operator
// which is called the nullish coalescing operator.

/////////////
// nullish coalescing operator - ??

// it works very similarly to the or operator,
// but it does also short circuit for falsy values.

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// So this nullish coalescing operator
// will only return the second value
// when the first value is null or undefined,
// but not when it is zero or an empty string.

////////////////////////////////////////////////////////////////////
// Optional Chaining  -  ?
////////////////////////////////////////////////////////////////////

function getTotalReviewCount(book) {
  // the problem is
  // that book dot reviews, dot libraryanything
  // right now is undefined.
  // So basically in JavaScript
  // this part will then get replaced by undefined.
  // And then essentially we are reading
  // undefined dot reviewsCount
  // which, of course, doesn't exist.
  // And then it results in this error right here.

  // But, fortunately for us, modern JavaScript has a solution
  // for this, which is called optional chaining.
  // And so with optional chaining
  // we can basically ask JavaScript to only keep asking here
  // for these next properties
  // in case that what comes before it actually exists.

  //   So what happens now is that whenever this here is undefined,
  // then JavaScript will no longer even try to
  // read reviewsCount out of this.
  // And so this is why we call this optional chaining.
  // So the chain here only continues in case
  // that this part here actually is not undefined
  // or not null.
  const goodreads = book.reviews?.goodread?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

//  this is helpful
// whenever we are not sure that all the values that we expect
// exist in an object.
// So before we had this here, we would have to first check
// if actually books dot reviews, dot libraryanything exists.
// And only then we could read reviewsCount out of that
// which would really be a lot of work.
// Because for example, let's say we're also not sure
// if even reviews dot libraryanything exists.

// So it would be even safer to do this also here.
// And why not also here?
// Because there might be some situation where
// maybe the book has no Goodreads reviews.
// So let's simply do this always,
// at least always we are not sure about the data structure
// of the data we are receiving.
