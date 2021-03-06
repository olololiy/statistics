let currentDate;
let currentMonth;
let currentYear;
let currentCity; 

let startConfirmed;//можно сразу типизовать
let startDeath;
let startRecovered;

let finishConfirmed;
let finishDeath;
let finishRecoverd;

let diffConfirmed;
let diffDeath;
let diffRecoverd;

const requestURL = 
'https://jeetiss.github.io/covid19-russia/timeseries.json';

// https://raw.githubusercontent.com/olololiy/statistics/main/stats.json?token=APPSQVGX6XS5NBFMWR2SXPTBKRANG//сохранили ссылку в переменную


function addRow(tableID) {
  // Get a reference to the table
  var tableRef = document.getElementById(tableID); //let в функции

  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  var newCell = newRow.insertCell(0);
  // Append a text node to the cell
  var newText = document.createTextNode(currentCity);
  newCell.appendChild(newText);

  var newCell = newRow.insertCell(1);
  // Append a text node to the cell
  var newText = document.createTextNode(currentMonth + 1);
  newCell.appendChild(newText);

  var newCell = newRow.insertCell(2);
  // Append a text node to the cell
  var newText = document.createTextNode(currentYear);
  newCell.appendChild(newText);

  var newCell = newRow.insertCell(3);
  // Append a text node to the cell
  var newText = document.createTextNode(diffConfirmed);
  newCell.appendChild(newText);

  var newCell = newRow.insertCell(4);
  // Append a text node to the cell
  var newText = document.createTextNode(diffDeath);
  newCell.appendChild(newText);

  var newCell = newRow.insertCell(5);
  // Append a text node to the cell
  var newText = document.createTextNode(diffRecoverd);
  newCell.appendChild(newText);
}


fetch(requestURL)
  .then((response) => {
     //  console.log(response);
    return response.json();
  })
   .then((data) => {
     //console.log(data);
   for (city in data){
         //let cityName = data;
         console.log(city);
           let cityData = data[city];//выдает массив объектов
           cityData.map(function(stats){
            //console.log(stats
            currentDate = stats.date;
          //  console.log(currentMonth);
          if (currentMonth == undefined){
            currentYear = new Date(currentDate).getFullYear();
            currentMonth = new Date(currentDate).getMonth();
            currentCity = city;
           
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
            
            // Call addRow() with the ID of a table
            addRow('TableA');

            currentYear = new Date(currentDate).getFullYear();
            currentMonth = new Date(currentDate).getMonth();
            currentCity = city;

            startConfirmed = finishConfirmed = stats.confirmed;
            startDeath = finishDeath = stats.deaths;
            startRecovered = finishRecoverd = stats.recovered;   
          }    
   }) 
    diffConfirmed = finishConfirmed - startConfirmed;
    diffDeath = finishDeath - startDeath;
    diffRecoverd = finishRecoverd - startRecovered;
    // Call addRow() with the ID of a table
    addRow('TableA');

  }
})