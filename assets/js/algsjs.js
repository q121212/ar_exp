// general functions
var summaryList = document.getElementById('tasksList');
summaryList.addEventListener('click', function (e) {
    var articleId = e.srcElement.id.substr(0,e.srcElement.id.length-2);
    var articleIdItem = document.getElementById(articleId);
    if(articleId){
        articleIdItem.classList.toggle("visHidden");
    }
});


// functions for busiestPeriod task description and solution
var regenerateDataBtn = document.getElementById('regenerateData');
var addRow = document.getElementById('addRow');
var dataTableTable = document.getElementById('dataTableTable').lastElementChild; // due tbody

function createOneRow() {
    var randomTimestamp = Math.floor((Date.now() - 24 * 3600 + Math.floor(Math.random() * 1000000)) / 1000),
        randomCount = Math.floor(Math.random() * 10),
        randomType = Math.floor(Math.random() * 2) ? 'enter' : 'exit';
    var lastRow = dataTableTable.insertRow(-1);
    lastRow.id = randomTimestamp;
    var cell1 = lastRow.insertCell(0),
        cell2 = lastRow.insertCell(1),
        cell3 = lastRow.insertCell(2);
    cell1.innerHTML = randomTimestamp;
    cell2.innerHTML = randomCount;
    cell3.innerHTML = randomType;
    updateSolutionTable();
}

addRow.addEventListener('click', createOneRow);

regenerateDataBtn.addEventListener('click', function () {
    var numOfRows = dataTableTable.rows.length;
    var firstEl = dataTableTable.firstElementChild;
    dataTableTable.childNodes.remove;
    // console.log(dataTableTable.childNodes);
    dataTableTable.innerHTML = '';
    for (var i = 0; i < numOfRows; i++) {
        createOneRow();
        console.log(i);
    }
    var numOfRows = dataTableTable.rows.length;
console.log(numOfRows);
    updateSolutionTable();
});

function updateSolutionTable() {
    var busiestPeriodSolution = document.getElementById('busiestPeriodSolution');
    var dataTableTableWithHeader = document.getElementById('dataTableTable');
    var clonedTable = dataTableTableWithHeader.cloneNode(true);

    var rowsArray = [],
        tableHeader = clonedTable.rows[0];

    for (var i=1; i<clonedTable.rows.length; i++) {
        rowsArray[i] = {timestamp: '',count:'',type:''};
      for (var j=0; j<clonedTable.rows[i].cells.length; j++){
          switch (j){
              case 0: {
                  rowsArray[i].timestamp = clonedTable.rows[i].cells[j].innerHTML;
              }
              case 1: {
                  rowsArray[i].count = clonedTable.rows[i].cells[j].innerHTML;
              }
              case 2: {
                  rowsArray[i].type = clonedTable.rows[i].cells[j].innerHTML;
              }
          }
      }
    }
    // console.table(rowsArray);
    var sortedRowsArray = rowsArray.sort(function (a,b) {
        return a.timestamp > b.timestamp;
    });
    // console.table(sortedRowsArray);
    var sortedTable = document.createElement('table');
    var tblBody = document.createElement('tbody');
    console.log(sortedRowsArray);
    var sumEnter =0,
        sumExit=0;
    sortedRowsArray.forEach(function (item,index) {
       item['type']==='enter' ? sumEnter+=parseInt(item['count']) : sumExit+=parseInt(item['count']);
        console.log(busiestPeriodSolution);

    });


    var peopleInBuilding = sumExit,
        maxPeopleInBulding = {maxValue: 0, timestamp: []},
        maxPeopleInBuildingPeriods = [{'prevTimestamp': [], 'timestamp': []}];

    sortedRowsArray.forEach(function (item,index) {
       var tr = document.createElement('tr');
       var tstd = document.createElement('td');
       tstd.innerHTML=item['timestamp'];
       var count = document.createElement('td');
       count.innerHTML = item['count'];
       var type = document.createElement('type');
       type.innerHTML=item['type'];
       item['type'] === 'enter' ? peopleInBuilding+=parseInt(item['count']) : peopleInBuilding-=parseInt(item['count']);
       if (peopleInBuilding>maxPeopleInBulding['maxValue']) {
           maxPeopleInBulding['maxValue'] = peopleInBuilding;
           maxPeopleInBulding['timestamp'] = [item['timestamp']];
       } else if (peopleInBuilding === maxPeopleInBulding['maxValue']) {
           maxPeopleInBulding['timestamp'].push(item['timestamp']);
       }
       console.log(maxPeopleInBulding);
        maxPeopleInBulding['timestamp'].forEach(function (item, index) {
           sortedRowsArray.forEach(function (it, ind) {

               if (item === it['timestamp']) {
                  if(ind>0) {
                      maxPeopleInBuildingPeriods['prevTimestamp']=sortedRowsArray[ind-1]['timestamp'];
                      maxPeopleInBuildingPeriods['timestamp']=item;
                  } else {
                      maxPeopleInBuildingPeriods['prevTimestamp']= item;
                      maxPeopleInBuildingPeriods['timestamp']=item;
                  }
                   console.log(maxPeopleInBuildingPeriods);
               }
           });
        });

       var peopleInBuildingTd = document.createElement('td');
       peopleInBuildingTd.innerHTML = peopleInBuilding;
       tr.appendChild(tstd);
       tr.appendChild(count);
       tr.appendChild(type);
       tr.appendChild(peopleInBuildingTd);
       tblBody.appendChild(tr);
    });
    var th = document.createElement('th');
    th.innerHTML='People in the Building';
    var header = tableHeader.appendChild(th);
    sortedTable.appendChild(tableHeader);
    sortedTable.appendChild(tblBody);
    if(busiestPeriodSolution.innerHTML) busiestPeriodSolution.innerHTML='';
    busiestPeriodSolution.appendChild(sortedTable);
    var textNode = document.createTextNode(`Total people entered to Building: ${sumEnter}. Total leaves building: ${sumExit}`);
    textNode.id = 'divResult';
    var entExCounts = document.getElementById('entExCounts');
    if(entExCounts) entExCounts.innerHTML='';
    busiestPeriodSolution.insertAdjacentHTML('afterend',
        `<div id="entExCounts">
        <p>Total people entered to Building: ${sumEnter}. Total leaves building: ${sumExit}.
        <p>Periods of the maximum people in the Building, namely ${maxPeopleInBulding['maxValue']} people was:
        <p>${maxPeopleInBuildingPeriods['prevTimestamp']} - ${maxPeopleInBuildingPeriods['timestamp']}
        </div>`);
    console.log(textNode);
}
updateSolutionTable();
