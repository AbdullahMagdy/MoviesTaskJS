
'use strict'


const subString = "spider"
const arrayToSort = [];
const index = 0;


function numOfPages(){

  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString;

            return new Promise( resolve => {
              setTimeout( function() {
              resolve(fetch(url).then(result => result.json()).then(data => data['total']))

            } , 1000) })

}

async function getMoviesPerPages() {


    const totalPages = await numOfPages();

    for(var i = 1 ; i <= totalPages ; i++ ){

            let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString+'&page=' + i;
            return new Promise( resolve => {

              setTimeout( function() {
              resolve(fetch(url).then(result => result.json()).then(data => data['data']))

            } , 1000) })

    }
}

async function fetchData(){

  const result = await getMoviesPerPages();

  for(const record of result){
    arrayToSort.push(record.Title);
  }

  arrayToSort.sort();

  for(const sortedTitle of arrayToSort){
  console.log(sortedTitle);
  }

}


fetchData();





