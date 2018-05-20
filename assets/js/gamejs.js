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

function setCell(row, col, val)
{
    // принимаем координаты ячейки
    // если val == true, закрашивает ячейку
    // иначе убирает закраску
    var cell_num = (row-1)*20+col-1;
    var matrix = document.getElementById('matrix');
    var backgr = val ? matrix.children[cell_num].style.background='green' : matrix.children[cell_num].style.background='transparent ';
}


// function keysHandler (keyName, row, col){
//
// }

window.onload = function()
{
    var row = 1, col = 1;
    var curEvent = document.getElementById('curEvent');
    createMatrix();
    setCell(row, col, true);
    getCell(row, col);
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
