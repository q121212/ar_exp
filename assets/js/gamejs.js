function createMatrix()
{
    var matrix = document.getElementById('matrix');
    var n = 20 * 20;

    for (var i = 0; i < n; i++)
    {
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
    }
}

function getCell(row, col)
{
    // принимает координаты ячейки.
    // должна вернуть true, если она закрашена
    // false, если не закрашена
    var cell_num = row*col-1;
    var matrix = document.getElementById('matrix');
    var backgr = matrix.children[cell_num].style.background;
    return backgr ? true : false;
}

function setCell(row, col, val, color='green')
{
    var wasFilled = 0;
    // принимаем координаты ячейки
    // если val == true, закрашивает ячейку
    // иначе убирает закраску
    var cell_num = (row-1)*20+col-1;
    var matrix = document.getElementById('matrix');
    if (val) {
        var backgr = matrix.children[cell_num].style.background = color;
        wasFilled = 1;
    } else {
        matrix.children[cell_num].style.background='transparent ';
    }
    return wasFilled;
}




function keysHandler (row, col){
    document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        // alert('keydown event\n\n' + 'key: ' + keyName);
        setCell(row,col, false);
        console.log(keyName);
        curEvent.innerText=keyName;
        switch (keyName){
            case 'ArrowUp':
                if (row>1)
                    row--;
                break;
            case 'ArrowDown':
                if (row<20)
                    row++;
                break;
            case 'ArrowRight':
                if (col<20)
                    col++;
                break;
            case 'ArrowLeft':
                if (col>1)
                    col--;
                break;
        }
        setCell(row,col,true);
    });
}


function setRandomWorms(){
    var matrix = document.getElementById('matrix');
    // console.log(row, col);
    var countItems = Math.floor(Math.random()*20);
    for (i=0; i< Math.floor(Math.random()*100)+2; i++) {
        var [row, col] = [Math.floor(Math.random()*20), Math.floor(Math.random()*20)];
        setCell(row, col, true, 'blue');
    }
    //TODO: need to correct countItems;
    return countItems;
}

window.onload = function()
{
    var row = 1, col = 1;
    var curEvent = document.getElementById('curEvent');
    createMatrix();
    setCell(row, col, true);
    getCell(row, col);
    var countItems = setRandomWorms();
    keysHandler(row,col);
}
