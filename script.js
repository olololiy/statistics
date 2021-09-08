const header = document.querySelector('header');                                //захватывают какие то ссылки на элементы header
const section = document.querySelector('section');                              //ссылки на section(откуда берется document)
var requestURL = 
'https://jeetiss.github.io/covid19-russia/timeseries.json';    //сохранили ссылку в переменную
var request = new XMLHttpRequest();                                             /*не понимаю что здесь происходит!
создаётся новый экземпляр объекта запроса из конструктора XMLHttpRequest. 
То есть чтобы начать работать с XMLHttpRequest, нужно создать запрос. 
Чуть позже изучи этот запрос
*/
request.open('GET', requestURL); //теперь идет запрос в URL. Команду OPEN можно изучить
request.responseType = 'json';// также в этом экземплере указываем что сервер(какой?) будет возвращать JSON
    request.send();//отправляем запрос(куда?)
request.onload = function() {
    var superHeroes = request.response;//Здесь мы сохраняем ответ на наш запрос (доступный в свойстве response)
    populateHeader(superHeroes);//передаем объект(superHeroes) в функцию populateHeader.
    showHeroes(superHeroes);//тоже самое
}
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
function showHeroes(jsonObj) {
var heroes = jsonObj['members'];

for (var i = 0; i < heroes.length; i++) {
var myArticle = document.createElement('article');
var myH2 = document.createElement('h2');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');
var myList = document.createElement('ul');

myH2.textContent = heroes[i].name;
myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
myPara2.textContent = 'Age: ' + heroes[i].age;
myPara3.textContent = 'Superpowers:';

var superPowers = heroes[i].powers;
for (var j = 0; j < superPowers.length; j++) {
  var listItem = document.createElement('li');
  listItem.textContent = superPowers[j];
  myList.appendChild(listItem);
}

myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myList);

section.appendChild(myArticle);
}
}