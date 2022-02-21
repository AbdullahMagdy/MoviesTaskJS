
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
    const promisesArr = [];
    
    for(var i = 1 ; i <= totalPages ; i++ ){

        let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString+'&page=' + i;
        
        const response = fetch(url).then(response => response.json()).then(data => data['data']);
        
        promisesArr.push(response);

    }

    const arr = await Promise.all(promisesArr).then((arrayOfArrays) => {

    return [].concat.apply([], arrayOfArrays);
});


    arr.forEach((element, index, array) => {
            arrayToSort.push(element.Title);
        });
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





