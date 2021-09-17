// const header = document.querySelector('header');                                //захватывают какие то ссылки на элементы header
// const section = document.querySelector('section'); 
  //console.log(cityName);//название города
         
        //for (let cityData in data[cityName]){
          //console.log(cityData);//выводит номер массива
         // for (let stats in cityData){
           // console.log(stats);
          //}
        //}                            //ссылки на section(откуда берется document)
let currentDate
let currentMonth;
let currentYear;
let currentCity; 

let startConfirmed;
let startDeath;
let startRecovered;

let finishConfirmed;
let finishDeath;
let finishRecoverd;

let diffConfirmed;
let diffDeath;
let diffRecoverd;

const requestURL = 
'https://raw.githubusercontent.com/olololiy/statistics/main/stats.json?token=APPSQVEYYGTC367CTM4XJ63BJCA7M';    //сохранили ссылку в переменную


fetch(requestURL)
  .then((response) => {
     //  console.log(response);
    return response.json();
  })
   .then((data) => {
     //console.log(data);
   for (currentCity in data){
         //let cityName = data;
         console.log(currentCity);
           let cityData = data[currentCity];//выдает массив объектов
           cityData.map(function(stats){
            //console.log(stats
            currentDate = stats.date;
          //  console.log(currentMonth);
          if (currentMonth == undefined){
            currentYear = new Date(currentDate).getFullYear();
            currentMonth = new Date(currentDate).getMonth();
           
            startConfirmed = finishConfirmed = stats.confirmed;
            startDeath = finishDeath = stats.deaths;
            startRecovered = finishRecoverd = stats.recovered;
            //console.log(currentMonth);
            //записываем все значения стартовые
          }
          else if(currentMonth == (new Date(currentDate).getMonth())){
            finishConfirmed = stats.confirmed;
            finishDeath = stats.deaths;
            finishRecoverd = stats.recovered;
            //обновляем finish
          }
          else{//(currentMonth != (new Date(currentDate).getMonth))
            //выводим на экран разницу финиш и старт
            //новые значения записываем в стар и финиш
            diffConfirmed = finishConfirmed - startConfirmed;
            diffDeath = finishDeath - startDeath;
            diffRecoverd = finishRecoverd - startRecovered;
           // console.log(diffRecoverd);
            

            currentYear = new Date(currentDate).getFullYear();
            currentMonth = new Date(currentDate).getMonth();

            startConfirmed = finishConfirmed = stats.confirmed;
            startDeath = finishDeath = stats.deaths;
            startRecovered = finishRecoverd = stats.recovered;

            
          }
         
          


            // let year = new Date(currentDate).getYear();
            // console.log(year);
            
            // if (currentMonth < (new Date(currentDate).getMonth)){
            //   //выводим месяц
            //   //обновляем месяц
            //   //мапаем
            // }
            // else{
            //   currentMonth = 2 ;}
            //обновляем якобыфинишные значения
   }) 
  }
})
/*
хватаем объект 
записываем год в currentYear
 
если месяц другой. То мы считаем разницу и выводим её
записываем Month
и все остальное
*/
      
      //записываем год в переменную
            //начальная статистика месяца
            //console.log(stats);
            // day = stats.date;
            // let age = new Date(day).getFullYear();
            // сonsole.log(age);
            // console.log(stats.date);
            // console.log(stats.confirmed);
            // console.log(stats.deaths);
            // console.log(stats.recovered);
          //console.log(stats);
// })  //заводим переменную с название города
           // console.log(cityData);
           // let stats = cityData;// что за бред




//console.log(new Date('2020-03-22').getFullYear())
//2020
//     let cityDataMoscow = data["Москва"];
    //  //   console.log(cityDataMoscow);

    //     cityDataMoscow.map(function(stats){
    //     console.log(stats.confirmed);
    //     })

//   data['Москва'].map(function(stats){
//      console.log(stats.confirmed)
//   }


     // for (cityName in data){
     //      console.log(city);
     //const cityData = data[cityName]
     // cityData.map(function(stats){
     //      console.log(stats)
     // })
//         //console.log(cityData);
//          // data.city.map(stats => console.log(stats.date))
//     }
//   });

//  var request = new XMLHttpRequest();                                             /*не понимаю что здесь происходит!
// // создаётся новый экземпляр объекта запроса из конструктора XMLHttpRequest. 
// // То есть чтобы начать работать с XMLHttpRequest, нужно создать запрос. 
// // Чуть позже изучи этот запрос
// // */
// // // alert(requestURL[0]);
// // var indexes = Object.keys(requestURL);
// // alert(indexes[0]);
// // alert(indexes[1]);
// request.open('GET', requestURL); //теперь идет запрос в URL. Команду OPEN можно изучить
// request.responseType = 'json';// также в этом экземплере указываем что сервер(какой?) будет возвращать JSON
//      request.send();//отправляем запрос(куда?)
//      request.onload = function() {
//      var massib = request.response;
//      }
//  request.onload = function() {
//      var superHeroes = request.response;//Здесь мы сохраняем ответ на наш запрос (доступный в свойстве response)
//     populateHeader(superHeroes);//передаем объект(superHeroes) в функцию populateHeader.
//     showHeroes(superHeroes);//тоже самое
 //}
// function populateHeader(jsonObj) {
//     var myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj['squadName'];
//     header.appendChild(myH1);

//     var myPara = document.createElement('p');
//     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(myPara);
// }
// function showHeroes(jsonObj) {
// var heroes = jsonObj['members'];

// for (var i = 0; i < heroes.length; i++) {
// var myArticle = document.createElement('article');
// var myH2 = document.createElement('h2');
// var myPara1 = document.createElement('p');
// var myPara2 = document.createElement('p');
// var myPara3 = document.createElement('p');
// var myList = document.createElement('ul');

// myH2.textContent = heroes[i].name;
// myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
// myPara2.textContent = 'Age: ' + heroes[i].age;
// myPara3.textContent = 'Superpowers:';

// var superPowers = heroes[i].powers;
// for (var j = 0; j < superPowers.length; j++) {
//   var listItem = document.createElement('li');
//   listItem.textContent = superPowers[j];
//   myList.appendChild(listItem);
// }

// myArticle.appendChild(myH2);
// myArticle.appendChild(myPara1);
// myArticle.appendChild(myPara2);
// myArticle.appendChild(myPara3);
// myArticle.appendChild(myList);

// section.appendChild(myArticle);
// }
// }
// var obj = {"date": "2020-03-22", "confirmed": "191", "deaths": "0", "recovered": "8"};
 
    
// alert(Object.keys[1]);
//var obj = {"success":"You are welcome"};
//var keys = Object.keys(massib);
