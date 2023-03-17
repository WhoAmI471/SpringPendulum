const block = document.querySelector('#block');
// const pr = document.querySelector('#pr');
const container = document.querySelector('.container');

document.querySelector('#masa').oninput = masCount;
document.querySelector('#rigidity').oninput = kCount;
document.querySelector('#btn').onclick = update;

const res = document.querySelector('#answer');
const pr = document.querySelector('#pr');
const mas = document.querySelector('#mas');
const kRan = document.querySelector('#k');

let dragging = false;
let drag = false;

let T = 0;
let k = 200;
let m = 5;
// let startY = 0;

function masCount() {
    m = (this.value/1000).toFixed(2);
    mas.innerHTML = `${m} Кг.`;
    block.style.setProperty("--m", `${m*10}px`);
};

function kCount() {
    k = this.value;
    kRan.innerHTML = `${k} H/м`;
};

function update() {
    // const style2 =  window.getComputedStyle(block);

    T = (2*Math.PI*Math.sqrt(m/k)).toFixed(2);
    res.innerHTML = `T = ${T}c.`;
    block.style.setProperty("--T", `${T}s`);
    pr.style.setProperty("--T", `${T}s`);
}


// block.addEventListener('mousedown', (e) => {
//     dragging = true;

//     const style =  window.getComputedStyle(block);
//     // const style1 =  window.getComputedStyle(pr);

//     const translateY = parseInt(style.getPropertyValue('--y'));

//     startY = e.pageY - translateY;
// })

// container.addEventListener('mousemove', (e) => {
//     // Если элемент не тащат, то ничего не делаем.
//     if (!dragging) return
  
//     // Если тащат, то высчитываем новое положение,
//     // вычитая начальное положение элемента из положения курсора.
    

//     block.style.setProperty("--y", `${e.pageY - startY}px`);
//     pr.style.setProperty("--h", `${((e.pageY - startY)/170) + 1}`);
// })

// container.addEventListener('mouseup', () => {
//     dragging = false;
//     // block.style.setProperty("--y", `${0}px`);
//     pr.style.setProperty("--h", `${1}`);
// })


// formula.innerHTML = `$$ T = 2 π \\sqrt {${m} \\over k} $$`;




