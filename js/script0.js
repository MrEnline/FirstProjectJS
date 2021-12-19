"use strict"

let numberOfFilms;
//numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?");
//console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
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

//let a, b;
//let count = 0;

// while(true) {
//     a = prompt("Какой фильм Вы посмотрели последним?", "");
//     if (a.length == 0 || a.length > 50){
//         prompt("Попробуйте ввести название фильма еще раз");
//         break;
//     }
//     b = prompt("Насколько оцените его?", "");
//     personalMovieDB.movies[a] = b;
//     if (count++ < 3){
//         break;
//     }
// }   

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой фильм Вы посмотрели последним?", ""),
              b = prompt("Насколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        }
        else {
            i--;
            console.log("error");
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < array.length; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


