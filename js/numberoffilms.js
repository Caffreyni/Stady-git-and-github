'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

const a = prompt("Який останій фільм дивився?", ""),
      b = prompt("Як йогшо оцінюєш?", ""),
      c = prompt("Який останій фільм дивився?", ""),
      d = prompt("Як йогшо оцінюєш?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


