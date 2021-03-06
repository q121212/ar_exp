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
    // console.log(row, col, val);
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
        if (matrix.children[(row-1)*20+col-1].style.background == 'blue'){
            window.ships--;
            remainsItems.innerText='Remains: '+window.ships;
        };
        setCell(row,col,true);
        if (window.ships == 0)
        {
            setTimeout(function(){
                alert('Win. Congrats!');
                location.reload();
            },100);
        }
    });
}


function randomXY(){
    var [row, col] = [Math.floor(Math.random()*20), Math.floor(Math.random()*20)];
    if (row!=0 && col!=0){
        return [row, col]
    } else {
        return randomXY();
    }
}

function setRandomWorms(){
    var matrix = document.getElementById('matrix');
    // console.log(row, col);
    var countItems = Math.floor(Math.random()*25)+2;
    // console.log(countItems)
    for (i=0; i< countItems; i++) {
        [row, col] = randomXY();
        setCell(row, col, true, 'blue');
    }
    //TODO: need to correct countItems;
    window.ships=countItems;
    return countItems;
}

window.onload = function()
{
    var row = 1, col = 1;
    var curEvent = document.getElementById('curEvent');
    var remainsItems = document.getElementById('remainsItems');
    createMatrix();
    setCell(row, col, true);
    getCell(row, col);
    var countItems = setRandomWorms();
    console.log(countItems);
    keysHandler(row,col);
}
