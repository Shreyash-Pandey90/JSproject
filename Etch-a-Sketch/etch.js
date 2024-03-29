let size1 = document.querySelector("#size");
let togg = document.querySelector("#togle");
let btnPar = document.querySelector('#btn');
let blck = document.querySelector('#black');
let brd = document.querySelector('.board');
blck.style.backgroundColor = 'yellow';



let click = false;

let b = true;
let color = 'black';
brd.addEventListener('click', () => {
    click = !click
});
size1.addEventListener('input', grid);
togg.addEventListener('click', toggle);
btnPar.addEventListener('click', btnFxn);


function grid() {
    let size = size1.value;
    let range = document.querySelector("#range");
    range.innerHTML = `${size} X ${size}`;

    let grid1 = document.querySelector(".board");
    let square = grid1.querySelectorAll("div");
    square.forEach((div) => div.remove())

    grid1.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid1.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', giveColor);
        grid1.appendChild(square);
    }

    applyBorder();
}

function toggle() {
    b = !b;
    applyBorder();
}

function applyBorder() {
    let gr = document.querySelector(".board");
    let sq = gr.querySelectorAll("div");

    sq.forEach((div) => {
        if (b) {
            div.style.border = '1px solid rgba(194, 200, 205, 0.644)';
        } else {
            div.style.border = '0px';
        }
    });
}


function giveColor() {
    if (click) {
        if (color === 'random')
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        else
            this.style.backgroundColor = `${color}`;
    }
}




function btnFxn(event) {
    let buttons = document.querySelectorAll('button');
    click = false;
    buttons.forEach(button => {
        if (button.id === 'black' || button.id === 'erase' || button.id === 'rainbow') {
            if (button.id === event.target.id) {
                button.style.backgroundColor = 'yellow';
            } else if (event.target.id != 'rang' && event.target.id != 'size' && event.target.id != 'togle' && event.target.id != 'reset') {
                button.style.backgroundColor = '';
            }
        }
    });


    let target = event.target;
    console.log(target.id);
    switch (target.id) {
        case 'togle':
            applyBorder();
            break;

        case 'black':
            color = 'black';
            giveColor();
            break;

        case 'erase':
            color = 'white';
            giveColor();
            break;

        case 'rainbow':
            color = 'random';
            giveColor();
            break;
        case 'reset':
            grid();
            break;
    }

}



grid();