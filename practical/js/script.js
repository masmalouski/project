"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let answers = [];

answers[1] = prompt("Один из последних просмотренных фильмов?","");
answers[2] = prompt("Насколько оцените его?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(`${answers[1]}:${answers[2]}`);


/* console.log(1);

let number = 5;
number = 10;

console.log(number);

let number1 = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = `5`;

const bool = true;

console.log(something);

let und;
console.log(und);


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]); 

alert('Hello');

const result = confirm('Are you leave?');
console.log(result);

const answer = +prompt("Вам есть 18?","18");
console.log(answer + 5);

const answer = [];

answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Как ваша фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');
console.log(typeof(answer));

const category = 'toys';

console.log(`https://google.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);*/