'use strict'



const arrayToSort = [' '];
const index = 0;

async function getMoviesPerPages(subString) {

    for(var i = 1 ; i <= 10 ; i++ ){

            let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+subString+'&page=' + i;
            fetch(url)
            .then(res => res.json())
            .then(data => {

            const entries = data['data'];
            return entries;
          }).then(await function(entries){

            entries.forEach((element, index, array) => {

                document.getElementById('div1').innerHTML += element.Title + '<br/>';

                if(element.Title.includes(subString)){
                    arrayToSort.push(element.Title);
                    //index++;
                }
            })

            
          })

    }


    return arrayToSort;
}




function sortArrayFn(arrayToSort) {
    
    let sorted = arrayToSort.sort();
    for(const v of sorted ) {
    //document.getElementById('div2').innerHTML += v + '<br/>';
    console.log(v);
    }

}


getMoviesPerPages("spider").then(sortArrayFn(arrayToSort));





