window.onload = function(){
    createMatrix();
    // var matrix = document.getElementById('matrix');
    // matrix.addEventListener('click',activeItem);
    //
    // var body = document.body;
    // body.addEventListener('click', activeItem);


    var cells = document.querySelectorAll('.cell');
    for (var i=0; i<cells.length; i++){
        cells[i].addEventListener('mouseout', activeItem);
    }

    var gameHeader = document.getElementById('gameHeader');
    var timer = new Timer(20,gameHeader);
    var looper = setInterval(function () {
        timer.tick();
        if (timer.time == 0) clearInterval(looper);
    }, 1000);

    var inpTextArea = document.getElementById('inpTextArea');
    var output = document.getElementById('output');
    inpTextArea.addEventListener('input', function (){
        output.innerHTML= inpTextArea.value;
        console.log(output);
    });

    output.addEventListener('click', function () {
       // TODO: Parser for vars in text
        alert(1);

    });

}

function activeItem() {
    this.classList.toggle('item-active');
    // console.log(this);
}

// Замыкание: при объявлении одной функции в другой внутренняя функция имеет доступ ко всем переменным внешней.

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

function Timer(time, elem) {
    this.time = time;
    this.elem = elem;

    this.tick = function () {
        this.time--;
        this.elem.innerHTML = this.time;
    }
}