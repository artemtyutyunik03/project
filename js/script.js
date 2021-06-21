"use strict";
const numberOfFilms = prompt('mcmlms');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres:[],
  privat: false
};

for (let i = 0; i<2; i++ ){
  const a = prompt('один из последних просмотренных фильмов?', ""),
   b = prompt('на сколько оцените его?', "");
  if (a !='' && b != '' && a!= null && b!= null && a.length<50 ){
    personalMovieDB.movies[a]=b;
  } else {
    i--;
  }
}

console.log(personalMovieDB);


const num = 50;
switch(num){
  case 48: 
    console.log('false');
    break;
  case 50: 
    // console.log('true');
    break;
  default:
    console.log('try again');
    break;
}
