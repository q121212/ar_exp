document.onload = function(){};
var regenerateDataBtn = document.getElementById('regenerateData');
var addRow = document.getElementById('addRow');
var dataTableTable = document.getElementById('dataTableTable').lastElementChild; // due tbody

function createOneRow() {
    var randomTimestamp = Math.floor((Date.now()-24*3600 +  Math.floor(Math.random() * 1000000))/1000),
        randomCount = Math.floor(Math.random() * 10),
        randomType =  Math.floor(Math.random() * 2) ? 'enter' : 'exit';
    var lastRow = dataTableTable.insertRow(-1);
    lastRow.id = randomTimestamp;
    var cell1 = lastRow.insertCell(0),
        cell2 = lastRow.insertCell(1),
        cell3 = lastRow.insertCell(2);
    cell1.innerHTML = randomTimestamp;
    cell2.innerHTML = randomCount;
    cell3.innerHTML = randomType;
}

addRow.addEventListener('click', createOneRow);

regenerateDataBtn.addEventListener('click', function () {
    var numOfRows = dataTableTable.rows.length;
    var firstEl = dataTableTable.firstElementChild;
    dataTableTable.childNodes.remove;
    // console.log(dataTableTable.childNodes);
    dataTableTable.innerHTML='';
    for(i=0; i < numOfRows; i++){
       createOneRow();
   }
});