"use strict";
let numberOfFilms;

function start(){
  numberOfFilms = +prompt('сколько фильмов посмотрели?','');
  while(numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt('сколько фильмов посмотрели?','');
    console.log('23');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres:[],
  privat: false
};

function detectFilmLevel(){
  if (personalMovieDB.count<10){
    alert('просмотрено мало фильмов!');
  } else if(personalMovieDB.count>=10 && personalMovieDB.count<30) {
    alert('любитель');
  } else if (personalMovieDB.count>=30){
    alert('киноман');
  } else {
    alert('произошла ошибка');
  }
}

detectFilmLevel();

function rememberMyFilmsFirstWay (){
  for (let i = 0; i<2; i++ ){
    const a = prompt('один из последних просмотренных фильмов?', ""),
     b = prompt('на сколько оцените его?', "");
    if (a !='' && b != '' && a!= null && b!= null && a.length<50 ){
      personalMovieDB.movies[a]=b;
    } else {
      i--;
    }
  }
}
rememberMyFilmsFirstWay();

function rememberMyFilmsSecondWay(){
  let i = 0;
  while (i<2){
    const a = prompt('один из последних просмотренных фильмов?', ""),
    b = prompt('на сколько оцените его?', "");
    if (a !='' && b != '' && a!= null && b!= null && a.length<50 ){
      personalMovieDB.movies[a]=b;
    } else {
      i--;
    }
    i++;
  }
}

function rememberMyFilmsThirdWay(){
  do {
    const a = prompt('один из последних просмотренных фильмов?', ""),
     b = prompt('на сколько оцените его?', "");
    if (a !='' && b != '' && a!= null && b!= null && a.length<50 ){
      personalMovieDB.movies[a]=b;
    } else {
      i--;
    }
    i++;
  }
  while (i<2);
}

console.log(personalMovieDB);

const num = 50;

function checkNumber(num){
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
}


