/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. 
Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать 
на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается 
в массив данных genres

P.S. Функции вызывать не обязательно*/

(function () {
    'use strict';
}());


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
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

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {

        const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
            movieRating = +prompt("На сколько оцените его?", "");

        if (lastMovie != null && movieRating != null && lastMovie != "" &&
            movieRating != "" && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = movieRating;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

/* rememberMyFilms(); */

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

/* detectPersonalLevel(); */

/* function showMyDataDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
 }
 showMyDataDB(); */

 