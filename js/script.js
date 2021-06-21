"use strict";
const numberOfFilms = prompt('mcmlms');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres:[],
  privat: false
};

// document.write(answer);
console.log(typeof(answer));
const a = prompt('один из последних просмотренных фильмов?', ""),
  b = prompt('на сколько оцените его?', ""),
  c = prompt('один из последних просмотренных фильмов?', ""),
  d = prompt('на сколько оцените его?', "");

// git init --> git status --> git add -A --> git commit -a -m"" --> git push -u main 
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB); 
const num = 50;

switch(num){
  case 48: 
    console.log('false');
    break;
  case 50: 
    console.log('true');
    break;
  default:
    console.log('try again');
    break;
}