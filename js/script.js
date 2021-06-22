"use strict";
let numberOfFilms;

function start(){
  numberOfFilms = +prompt('сколько фильмов посмотрели?','');
  while(numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt('сколько фильмов посмотрели?','');
  }
}

// start();

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

// detectFilmLevel();

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
// rememberMyFilmsFirstWay();
let i = 0;
function rememberMyFilmsSecondWay(){
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

function showMyDB1 (){
  if (personalMovieDB.privat==false){
    console.log(personalMovieDB);
  }
}

function showMyDB2(hidden){
  if (!hidden){
    console.log(personalMovieDB);
  }
}

// showMyDB2(personalMovieDB.privat);

function writeYourGenres(){
  for (i=1; i<4;i++){
    personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
