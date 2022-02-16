'use strict'



const subString = ''
const arrayToSort = [''];
const index = 0;

const getMovieTitles = (subString , myCallBack) => {
    

let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + subString;

fetch(url)
.then(res => res.json())
.then(data => {

const entries = data['data']
entries.forEach((element, index, array) => {
document.getElementById('div1').innerHTML += element.Title  +': ' + index + '<br/>';
arrayToSort[index] = element.Title;
index++;
})

 myCallBack(arrayToSort);

})
.catch(error => {
console.log(error.message);
})


}

function sortArrayFn(arrayToSort) {
    arrayToSort.sort();
    for(const v of arrayToSort ) {
    document.getElementById('div2').innerHTML += v + '<br/>';
}
}


getMovieTitles("behind" , sortArrayFn);


