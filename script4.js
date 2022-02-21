
'use strict'


const subString = "spider"
const arrayToSort = [];
const index = 0;


async function numOfPages(){

  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString;

             
  const response = await fetch(url);
  const data = await response.json();
  const totalNumsOfPages = data['total'];
  return totalNumsOfPages;     

}

async function getMoviesPerPages() {


    const totalPages = await numOfPages();

    for(var i = 1 ; i <= totalPages ; i++ ){

        let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString+'&page=' + i;

        const response = await fetch(url);
        const jsonData = await response.json();
        const data = jsonData['data'];
        data.forEach((element, index, array) => {
                arrayToSort.push(element.Title);
            });


    }

    return arrayToSort;

}

async function fetchData(){

  const result = await getMoviesPerPages();

  arrayToSort.sort();

  for(const sortedTitle of arrayToSort){
  console.log(sortedTitle);
  }

}


fetchData();





