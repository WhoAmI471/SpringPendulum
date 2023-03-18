const block = document.querySelector('#block');
const res = document.querySelector('#answer');
const pr = document.querySelector('#pr');
const mas = document.querySelector('#mas');
const kRan = document.querySelector('#k');

document.querySelector('#masa').oninput = masCount;
document.querySelector('#rigidity').oninput = kCount;
document.querySelector('#btn').onclick = update;


let dragging = false;
let drag = false;

let T = 0;
let k = 200;
let m = 5;

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

    T = (2*Math.PI*Math.sqrt(m/k)).toFixed(2);
    res.innerHTML = `T = ${T}c.`;
    block.style.setProperty("--T", `${T}s`);
    pr.style.setProperty("--T", `${T}s`);
}
