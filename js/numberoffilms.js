'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt("Який останій фільм дивився?", ""),
          b = prompt("Як йогшо оцінюєш?", "");
    if (a != null && b != null && a != '' && b !='' && a.length <50 ){
        personalMovieDB.movies[a] = b;
        console.log("Done");
    }else {
        console.log("Error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Переглянуто дуже мало фільмів");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log("Ви дуже класний глядач");
}else if (personalMovieDB.count > 30) {
    console.log("Ви кіноман");
}else {
    console.log("Error");
}

console.log(personalMovieDB);






