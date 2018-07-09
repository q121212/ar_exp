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
        // console.log(output);
    });

    var paramsChanger = document.getElementById('paramsChanger');
    output.addEventListener('click', function () {
        paramsChanger.style.display == 'block' ? paramsChanger.style.display = 'none' : paramsChanger.style.display = 'block';
        var closeBtn = document.getElementById('closeBtn');
        var cancelBtn = document.getElementById('cancelBtn');
        closeBtn.addEventListener('click', function () {
            paramsChanger.style.display = 'none';

        });
        cancelBtn.addEventListener('click', function () {
            paramsChanger.style.display = 'none';
        });

        var applyBtn = document.getElementById('applyBtn');
        applyBtn.addEventListener('click', function () {
            paramsChanger.style.display = 'none';


            // TODO: Parser for vars in text
            // function numsHandler(){
            //     console.log(output.value.split(/\r?\n|\s/g));
            // }
            // numsHandler();


            output.innerHTML='Updated text';

        });

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