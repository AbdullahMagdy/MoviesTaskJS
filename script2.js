
'use strict'


const subString = "spider"
const arrayToSort = [];
const index = 0;

async function getMoviesPerPages(subString) {

    for(var i = 1 ; i <= 10 ; i++ ){

            let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString+'&page=' + i;
            await fetch(url)
            .then(res => res.json())
            .then(data => {
            console.log("result returned for page" + i);
            const entries = data['data'];
            return entries;
          }).then(function(entries){

            entries.forEach((element, index, array) => {

                document.getElementById('div1').innerHTML += element.Title + '<br/>';
                //console.log(element.Title);
                arrayToSort.push(element.Title);
            })

            
          })

    }

    return arrayToSort;



}




async function sortArrayFn() {

    let arr = await getMoviesPerPages(subString);
    let sorted = arr.sort();
    for(const v of sorted ) {
    console.log(v);
    document.getElementById('div2').innerHTML += v + '<br/>';
    }

}


sortArrayFn();





