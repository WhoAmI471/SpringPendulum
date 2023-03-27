const root = document.querySelector(':root');
const block = document.querySelector('#block');
const res = document.querySelector('#answer');
const pr = document.querySelector('#pr');
const mas = document.querySelector('#mas');
const kRan = document.querySelector('#k');


document.querySelector('#masa').oninput = masCount;
document.querySelector('#rigidity').oninput = kCount;
document.querySelector('#btn').onclick = update;


let T = 0;
let k = 200;
let m = 5;

let x = 1;
let h = 170;

let a = x * 100 //перевод в сантиметры

function checedSystem(){
    var dis = document.querySelector('#masa').disabled;
    if (dis) {
        document.querySelector('#masa').disabled = false;
        document.querySelector('#rigidity').disabled = false;
        document.querySelector('#X').disabled = true;
        document.querySelector('#V').disabled = true;
    } else {
        document.querySelector('#masa').disabled = true;
        document.querySelector('#rigidity').disabled = true;
        document.querySelector('#X').disabled = false;
        document.querySelector('#V').disabled = false;
    }
    document.querySelector('#rigidity');
}

function masCount() {
    m = (this.value/1000).toFixed(2);
    mas.innerHTML = `${m} Кг.`;
    block.style.setProperty("--m", `${m*10}px`);
    update();
};

function kCount() {
    k = this.value;
    console.log(k);
    kRan.innerHTML = `${k} H/м`;
    update();
};

function update() {
    T = (2*Math.PI*Math.sqrt(m/k)).toFixed(2);

    res.innerHTML = `T = ${T}c.`;
    pr.style.setProperty("--T", `${T}s`);

    //высота пружины и амплитуда сжатия
    root.style.setProperty("--h", `${h}px`);
    
    a = x * 100 //перевод в сантиметры
    root.style.setProperty("--x0", `${h+a}px`);
    root.style.setProperty("--x1", `${h-a}px`);
}

function Stop(){
    pr.style.setProperty("--T", `${0}s`);
}

function getkInTable(id){
    k = parseFloat(document.querySelector(`#${id}`).textContent);

    kRan.innerHTML = `${k} H/м`;
    update();
}
