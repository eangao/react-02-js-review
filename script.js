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
// // ///////////////////////////////////////////
// // // Destructuring with object
// // //////////////////////////////////////////

// // const book = getBook(3);
// // book;

// // // const title = book.title;
// // // const author = book.author;

// // // Now here, what's crucial is
// // // that we actually give these variable names here
// // // exactly the same name as the properties in the object.
// // const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
// //   book;

// // console.log(author, author, genres);

// // ////////////////////////////////////////////////////
// // // Destructuring of array
// // ////////////////////////////////////////////////////
// // // const primaryGenre = genres[0];
// // // const secodaryGenre = genres[1];

// // // using array destructuring

// // // And then here we have the exact same result.
// // // So basically the first variable that we define here
// // // this in this way, in this destructuring
// // // will take the first element out of the array
// // // and assign it to this variable.
// // // And then here, of course, the second one.
// // // So it takes the second element out
// // // of the array and assigns it to this variable.

// // // const [primaryGenre, secodaryGenre] = genres;
// // // console.log(primaryGenre, secodaryGenre);

// // ////////////////////////////////////////////////////////////
// // // Rest/Spread Operator
// // ////////////////////////////////////////////////////////////

// // /////////////////////////////
// // // Rest Operator - Array
// // const [primaryGenre, secodaryGenre, ...otherGenres] = genres; // otherGenres sholud be place at the end of the operator
// // console.log(primaryGenre, secodaryGenre, otherGenres);

// // ///////////////////////////////
// // // Spread Opearator - Array

// // // We want one array which contains all
// // // of these values here individually.
// // // So all of these six genres
// // // one by one and not one array, which contains five genres
// // // and then simply the other genre in the end.
// // // So what we can do is to use the spread operator.
// // const newGenres = [...genres, "epic fantasy"];
// // newGenres;

// // // and, of course, we could also place it at the end.
// // // And then epic fantasy would simply be
// // // at the beginning of the new array.
// // const newGenres2 = ["epic fantasy", ...genres];
// // newGenres2;

// // //////////////////////////////////////
// // // Spread Operator - Object

// // //  the spread operator is even more important
// // // because it allows us to add new properties
// // // and also to update existing ones.

// // // this is how we add new properties
// // // to an object using the spread operator.
// // const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
// // updatedBook;

// // // But, as I said in the beginning,
// // // we can also use it to basically update properties,
// // // so by simply overriding them.
// // // So we see that we have this pages property
// // // but let's imagine for some reason that it is wrong.
// // // And so we can simply overwrite that here.
// // // So let's say the number of pages is actually 1210.
// // // So if we inspect that again,
// // // then you see that now it is actually 1210.
// // // And the reason that works is
// // // because, as I mentioned in the beginning,
// // // this syntax here basically takes all the elements,
// // // so all the properties of the object, into this new object.
// // // And then of course will contain the original pages property.
// // // And so then we have two pages properties
// // // and so then the second one,
// // // so this last one, will override the first one.

// // // So whenever we want to do this,
// // // the spread-out original object needs to be first.
// // const updatedBook2 = {
// //   ...book,

// //   // Adding a new property
// //   moviePublicationDate: "2001-12-19",

// //   // Overwriting an existing property
// //   pages: 1210,
// // };
// // updatedBook2;

// // // And I'm focusing so much here
// // // on this because this is going to be
// // // really, really important when we work with React
// // // because when we want to update objects in state,
// // // which you will learn later what that is,
// // // we will need to use this technique.
// // // And we will also talk
// // // about this a bit later again in this section.
// // // But for now, just keep in mind
// // // that when we want to create a new object
// // // and then add new properties to it or override existing ones
// // // this is how we do it.
// // // So we use the spread operator
// // // and the same is true for a race.
// // // So very, very important.
// // // So it's fundamental that you know this
// // // as we go through the course.

// // //////////////////////////////////////////////////////////
// // // Template Literals - ``
// // //////////////////////////////////////////////////////////
// // // So template literals are an ES6 JavaScript feature
// // // which allows us to very easily create strings
// // // that contain some JavaScript variables,
// // // or actually that contains any JavaScript expression,
// // // inside of a string.

// // //so anything that immediately produces a value,
// // // can be placed here inside this block.
// // const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
// //   publicationDate.split("-")[0]
// // }`; //
// // summary;

// // ///////////////////////////////////////////////////////////
// // // Ternaries Instead of if/else Statement
// // ///////////////////////////////////////////////////////////

// // // So, in React, we need to define values
// // // based on a condition all the time, and many times
// // // in situations where we cannot use an if else statement.
// // // And so let's now learn how to use
// // // the ternary operator instead.

// // const pagesRange = pages > 1000 ? "over a thousand" : " less than 1000";
// // pagesRange;
// // console.log(`The book has ${pagesRange} pages.`);

// // /////////////////////////////////////////////////////////////
// // // Arrow Functions
// // /////////////////////////////////////////////////////////////
// // // So, arrow functions are a new way of writing functions
// // // that have been introduced into JavaScript in ES6,
// // // and they are very helpful for writing quick
// // // and short one-line functions.
// // // Now, many people actually use arrow functions
// // // for all functions now, but I personally really don't like
// // // that and I only find them useful for,
// // // well, as I said, these one-liner functions.

// // // function declation
// // // function getYear(str) {
// // //   return str.split("-")[0];
// // // }

// // //////////////////////////
// // // Arrow function

// // //function expresion
// // const getYear = (str) => str.split("-")[0];

// // console.log(getYear(publicationDate));

// // ////////////////////////////////////////////////////////////////
// // // Short-Circuiting And Logical Operators: &&, ||, ??
// // ////////////////////////////////////////////////////////////////

// // // So in JavaScript, some logical operators,
// // // such as the && and the || operator,
// // // have a feature called short circuiting.

// // // So short circuiting in logical operators,
// // // means that, in certain conditions,
// // // the operator will immediately return the first value
// // // and not even look at the second value.
// // // And this probably sounds confusing

// // console.log(true && "some string"); // no short circuit

// // // when the first value is false.
// // // So here if we have false, then there is a short circuit
// // // and the operator does not even look at the second value.
// // // So instead it immediately returns the first one here.
// // // And that's gonna be quite helpful
// // // basically in order to use this as an if.
// // console.log(false && "some string"); // short circuit

// // console.log(hasMovieAdaptation && "This book has a moview");

// // // truthy and falsy values.

// // // And this also works with so-called truthy and falsy values.
// // // So a truthy value is basically any value
// // // that is not a falsy value.
// // // And the falsy value, just write that here,
// // // is zero and, empty string, null and undefined.
// // // And I think there's actually one more,
// // // which I can't think of right now.
// // // So yeah, these are the ones that actually matter.
// // // So this one is not one of these falsy values
// // // and, therefore, it's a truthy value,
// // // which means that for the end operator,
// // // it is as if this was actually really a true value
// // // because, basically, behind the scenes
// // // this gets converted to true.
// // // And so since this is true,
// // // we get the second value out of the operation.
// // // But if we use a falsy value, let's say zero,
// // // then we get that first one.
// // // So here once again, we have short circuiting in action
// // // because this is a falsy value,

// // ///////////////////////////////
// // //falsy: 0, '', null, undefined

// // // && operator
// // console.log("jonas" && "Some string");
// // console.log(0 && "Some string");

// // // || operator
// // console.log(true || "Some string");
// // console.log(false || "Some string");

// // console.log(book.translations.spanish);

// // const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// // spanishTranslation;

// // // however, this can also go wrong
// // // because this works for all the falsy values
// // // such as zero as well.
// // // Sometimes that can have some consequences.

// // // console.log(book.reviews.librarything.reviewsCount);
// // // const countWrong = book.reviews.librarything.reviewsCount || "no data";
// // // countWrong;

// // // but not when it is zero.
// // // So when this value is zero, it is a falsy value.
// // // And so when this is a falsy value,
// // // which zero is,
// // // the result of this operator will be the second part,
// // // which in this case is, again, wrong.

// // // Now to solve this
// // // JavaScript has recently added a new logical operator
// // // which is called the nullish coalescing operator.

// // /////////////
// // // nullish coalescing operator - ??

// // // it works very similarly to the or operator,
// // // but it does also short circuit for falsy values.

// // // const count = book.reviews.librarything.reviewsCount ?? "no data";
// // // count;

// // // So this nullish coalescing operator
// // // will only return the second value
// // // when the first value is null or undefined,
// // // but not when it is zero or an empty string.

// // ////////////////////////////////////////////////////////////////////
// // // Optional Chaining  -  ?
// // ////////////////////////////////////////////////////////////////////

// // function getTotalReviewCount(book) {
// //   // the problem is
// //   // that book dot reviews, dot libraryanything
// //   // right now is undefined.
// //   // So basically in JavaScript
// //   // this part will then get replaced by undefined.
// //   // And then essentially we are reading
// //   // undefined dot reviewsCount
// //   // which, of course, doesn't exist.
// //   // And then it results in this error right here.

// //   // But, fortunately for us, modern JavaScript has a solution
// //   // for this, which is called optional chaining.
// //   // And so with optional chaining
// //   // we can basically ask JavaScript to only keep asking here
// //   // for these next properties
// //   // in case that what comes before it actually exists.

// //   //   So what happens now is that whenever this here is undefined,
// //   // then JavaScript will no longer even try to
// //   // read reviewsCount out of this.
// //   // And so this is why we call this optional chaining.
// //   // So the chain here only continues in case
// //   // that this part here actually is not undefined
// //   // or not null.
// //   const goodreads = book.reviews?.goodread?.reviewsCount ?? 0;
// //   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

// //   return goodreads + librarything;
// // }

// // console.log(getTotalReviewCount(book));

// // //  this is helpful
// // // whenever we are not sure that all the values that we expect
// // // exist in an object.
// // // So before we had this here, we would have to first check
// // // if actually books dot reviews, dot libraryanything exists.
// // // And only then we could read reviewsCount out of that
// // // which would really be a lot of work.
// // // Because for example, let's say we're also not sure
// // // if even reviews dot libraryanything exists.

// // // So it would be even safer to do this also here.
// // // And why not also here?
// // // Because there might be some situation where
// // // maybe the book has no Goodreads reviews.
// // // So let's simply do this always,
// // // at least always we are not sure about the data structure
// // // of the data we are receiving.

// //////////////////////////////////////////////////////////////
// // The Array map Method
// //////////////////////////////////////////////////////////////

// // Now, before you can start building
// // any meaningful React application,
// // you need to be a true master
// // of the three functional array methods in JavaScript
// // which are

// // map,
// // filter,
// // reduce.

// // And I call them functional array methods
// // because these methods do not mutate the original array
// // but do instead return a new array based on the original one.

// ////////////
// // map method

// // And so now we are ready to use the map method on that array.
// // So what does the map method actually do?
// // Well, basically, the map method will loop over an array
// // and return a new array
// // with the same length with some operation applied
// // to each of the elements of the original array.

// // And so now map expects a callback function,
// // which is a function that will be called
// // for each of these elements of the array.

// // And so now here are these arrow functions that we talked
// // about earlier become really handy,
// // 'cause now we can simply use an arrow function here,

// // So again, we passed in this callback function,
// // which is a function that gets called for each
// // of the elements of this array.
// // And in this callback function, the element parameter
// // will always be the current element of the array.
// // So for this first element here, el will become one.
// // And then here we simply return one times two, which is two.
// // So that's then placed in the array and we move on
// // to the next one.

// // the map method is basically to create a new array
// // based on the original array with some operation applied
// // to each element of the original array.
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);

// // So this was just some demo here
// // but now what I want to do is to create an array
// // that contains simply all the titles of all the books.
// // So instead of having this huge array,
// // which contains all these objects,
// // all I want is an array, which simply has all the titles.

// const books = getBooks();
// books;

// // Here simply what we return
// // for each book element is book.title.
// // And so that then gets placed into the array.
// // So the new output array,
// // which then gets stored into these titles.
// const titles = books.map((book) => book.title);
// titles;

// // And let's say that we wanted to basically only
// // get the essential data for each of these book objects.
// // So we want an array with objects still, but now we only want
// // like the title and the author maybe

// // whenever we use these curly braces like this,
// // the arrow function will think
// // that this is a declaration block, right?
// // So this is not returning an object.
// // So if we wrote like x: 23,
// // this would not be returning anything
// // because again, the arrow function simply thinks
// // that this here is the function block.
// // So we can solve this in two ways.
// // First, we can simply then return the object
// // from here manually.
// // So we can now say title is book.title
// // and author is book.author.
// // Let's take a look at that.
// // And yeah, that works.
// // So now for each of the books
// // we only have the author and the title and nothing else.
// // So that worked, so that's great.

// // But yeah, here we have a bit too much code.
// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

// essentialData;

// // So let's get rid of this return again.
// // And so the trick is to simply wrap this here
// // in a parenthesis.
// // So we don't need any of this.
// // And so now that works the same.
// // And so by using these parenthesis first instead
// // of the curly braces, then again we are automatically
// // returning this object from here.

// const essentialData2 = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// essentialData2;

// //////////////////////////////////////////////////////////////////
// // The Array filter Method
// //////////////////////////////////////////////////////////////////

// // the filter method.
// // And, as the name says,
// // we can use the filter method in order to filter out
// // some elements of the array based on a condition.

// // So let's say that we want to create an array
// // which only has books that have more than 500 pages.

// const longBooks = books.filter((book) => book.pages > 500);
// longBooks;

// // So after this filter, we can chain on another filter.
// // And that's possible simply because this one here
// // returns a new array.
// // And on arrays, we can call filter, right?
// // And, therefore, we can call filter here again.
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter(
//     (book) => book.genres.includes("adventure") //So includes always returns either true or false,
//   )
//   .map((book) => book.title);
// adventureBooks;

// /////////////////////////////////////////////////////////////
// // The Array reduce Method
// /////////////////////////////////////////////////////////////
// // All right, so we tackled the map
// // and the filter method
// // and so, now, it's time for the one method
// // that rules them all, which is the reduced method.

// // So, the reduced method is really the most versatile
// // and the most powerful of all array methods in JavaScript.
// // So, in fact, we could, probably, implement
// // all the other methods, simply using the reduced method,
// // but that would be a little bit too much work.
// // And so, that's why we have all of these other methods
// // which are a lot easier to use.

// // So, I will really not go deep into the reduced method, here,
// // because we could spend hours just with this method,
// // but I will just show you one of the most common use cases,
// // which is to add together numbers
// // or, basically, to perform any operation,
// // or mathematical operations, with numbers.

// // So, let's say that, for some reason,
// // we wanted to read all of the books in the array
// // and we wanted to know how many pages we would have to read.
// // So, the solution is to add together
// // all of these pages properties
// // of all of the books in the array, right?
// // And so, for that, we can use the reduce method.

// // Now, the reduce method also takes in a callback function
// // which will be executed for each element of the array.
// // And, as a second argument,
// // it also takes in a starter value, basically.
// // But before we go into these,
// // let's, actually, understand what the reduce method does
// // and what it's used for.
// // So, it is called the reduce method
// // because the goal of reduce is to reduce, basically,
// // the entire array to just one value.

// // But, here, the callback function
// // will be a little bit different.
// // So, the function that we pass in, here,
// // will not only get caught with the current element
// // but also with the current value of the accumulator
// // which starts at zero.

// // So, basically, in this case,
// // the pages of all the books combined, which starts at zero.
// // And so, in the first iteration
// // the accumulator will still be zero.
// // So, this function, here, will get called
// // for the first element and then the accumulator will be zero
// // and the book will be the current book.
// // And so, then we add together the current accumulator,
// // so the current pages or books, so to say,
// // which is still zero plus these 1,216.
// // And so, we can imagine that the second value, here,
// // then becomes 1,216 after this first iteration.

// // And so, therefore, in the next iteration,
// // when we go to the second object,
// // the current accumulator is already 1,216.
// // So here, again, it will, in the second iteration,
// // be already 1,216.
// // And then, on top of that, we add 295.
// // So, that's then the current book pages.

// // And so, then, in the next iteration
// // the accumulator will already be 1,216 plus 295
// // which is like 1,500 something.
// // And then, on top of that, we add this number of pages,
// // and so it goes, all the way, until the end.

// // Now, here, I just like to, in this case,
// // to replace the accumulator value with sum,
// // so calling it just sum,
// // because that is what it's actually doing.
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// // But we can also do very, very complex things,
// // as I said, in the beginning,
// // because this initial value, here,
// // doesn't have to be a number.
// // It could also be an array or it could be an object.
// // And so, what this means
// // is that we could do, really,
// // anything that we do with map or filter
// // also with a reduce.
// const pagesAllBooks2 = books.reduce((acc, book) => acc + book.pages, []);
// pagesAllBooks2;

// /////////////////////////////////////////////////////////
// // The Array sort Method
// /////////////////////////////////////////////////////////
// const arr = [3, 7, 1, 9, 6];

// //sort in ascending way
// const ascSorted = arr.sort((a, b) => a - b);

// // And indeed, it is now sorted in an ascending way.
// // So starting from the lowest number,
// // all the way to the highest.
// // Now very, very briefly, what happens here is that
// // basically JavaScript goes over the array,
// // so it loops through it, and it caught this function here.
// // And a and b are always the current value and the next value.
// // And then here in the callback function,
// // when we return a negative value,
// // then these two numbers will basically be sorted
// // in an ascending way.
// // So the small number will come first,
// // and then the biggest number will come afterwards.
// // And if we do the opposite,
// // so if we return a positive number,
// // then while the opposite will happen,
// // then these two values will be sorted in a descending way.
// // And so, we return these positive or negative numbers
// // simply by subtracting one minus the other.
// // So here a and b in this example will be three and seven,
// // and so then three minus seven is minus four.
// // And so, yeah, they will then be sorted in an ascending way,
// // as I said before.
// // But that's not really important.
// // You should just basically follow this as a recipe.
// // So when you do a minus b,
// // it will be sorted in an ascending way.
// ascSorted;

// ////
// //
// //sort in descending way

// // So when you do a minus b,
// // it will be sorted in an ascending way.
// // When you do b minus a, then descending.
// // So indeed, now, we start with nine and with one.

// const descSorted = arr.sort((a, b) => b - a);
// descSorted;

// // Now, what's very surprising about the sort method
// // is what happens when we now check out arr.
// // So arr itself has been sorted, as well, right?
// arr;

// // arr.sort - sort  -> mutate the data

// // 'Cause it already changed this original array anyway.
// // However, usually we do not want that to happen,
// // especially in a front end framework like React,
// // which really does not like us mutating data.
// // So, a nice trick that we can do here
// // is to first take a copy of the array,

// const arr2 = [3, 7, 1, 9, 6];

// const sorted = arr2.slice().sort((a, b) => a - b);
// sorted;
// arr2;

// // But now going back to a more practical examples,
// // because rarely we have an array like this
// // that we need to sort,
// // but usually we always have an array of objects.

// // sorted in an ascending way
// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// /////////////////////////////////////////////////////
// // Working With Immutable Arrays
// /////////////////////////////////////////////////////

// // In React, many operations need
// // to be immutable so operations
// // where we do not manipulate the underlying data structure.
// // And so therefore, it's quite important
// // to know how to add element to a race,
// // how to delete elements, and also to update elements
// // all without mutating the original underlying array.
// // Now these techniques that we're going to learn here
// // are absolutely essential for React development
// // but the good news is that they always work in the same way.
// // And so if you understand here how it works,
// // then you will be well prepared for the rest of the course.
// // So as I mentioned, what we want to do here is to learn how
// // to add elements, how to delete elements,
// // and how to update elements of an array
// // without changing the original one.

// // 1) Add book object to array
// const newBook = {
//   id: 6,
//   title: "harry Potter and the Chanmber of Secrets",
//   author: "J. K. Rowling",
// };

// // And so all we need to do is to spread all the books here
// // into this newly created array,
// // and then simply add another book, so another object.
// // And then we take a look at this right here.
// // You see that now we have six of them
// // and the last one is this one that we just created.
// // And again, we could add this also to the beginning.
// // So right here, but it's most common to simply add a new book
// // right to the end of the array.

// // And so now here we add another one.
// // And in fact, we did already learn how we create a new array
// // based on an original array
// // and then adding some other element.
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2) Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3) Update book object in the array
// const bookAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// bookAfterUpdate;

//////////////////////////////////////////////////////////////////
// Asynchronous JavaScript: Promises
//////////////////////////////////////////////////////////////////

//dummy aoi
// https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("elmar");
