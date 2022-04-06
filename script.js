
'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания


// let numberOfFilms;


// function start() {

//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }

// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {

//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }

// }

// rememberMyFilms();


// function detectPersonalLevel() {

//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }

// }

// detectPersonalLevel();


// console.log(personalMovieDB);

// // 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// // false - выводит в консоль главный объект программы


// function showMyDB() {

//     if (!personalMovieDB.privat) {
//         console.log(personalMovieDB);
//     }

// }

// showMyDB();


// // 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// // "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// // genres

// // P.S. Функции вызывать не обязательно*/

// function writeYourGenres() {

//     for (let i=1; i<=3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }


// }

// writeYourGenres();

// console.log(personalMovieDB);

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

*/

// let numberOfFilms;




const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } 
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        // Первый вариант:
        // for (let i=1; i<=3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        //
        // Второй вариант:
            for (let i = 1; i < 2; i++) {
                let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();

                if (genres === '' || genres == null) {
                    console.log('Вы ввели некорректные данные или не ввели их вовсе');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }

        }
        personalMovieDB.genres.forEach((k, j) => {
            console.log(`Любимый жанр ${j + 1} - это ${k}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
            personalMovieDB.privat = true; 
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();