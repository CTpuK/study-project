/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - 
вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический 
зритель", а если 
больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

(function () {
    'use strict';
}());


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}


/* let i = 0;

while (i < 2) {

    const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
        movieRating = +prompt("На сколько оцените его?", "");

    if (lastMovie != null && movieRating != null && lastMovie != "" 
    && movieRating != "" && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = movieRating;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    
    i++;
}

console.log(personalMovieDB); */

/* let i = 0;
do {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
        movieRating = +prompt("На сколько оцените его?", "");

    if (lastMovie != null && movieRating != null && lastMovie != "" 
    && movieRating != "" && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = movieRating;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    i++;
} while (i < 2);

console.log(personalMovieDB); */



