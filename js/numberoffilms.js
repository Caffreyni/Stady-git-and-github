'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто дуже мало фільмів");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Ви дуже класний глядач");
    }else if (personalMovieDB.count > 30) {
        console.log("Ви кіноман");
    }else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) { 
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGeners();







