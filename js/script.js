const block = document.querySelector('#block');
const res = document.querySelector('#answer');
const pr = document.querySelector('#pr');
const mas = document.querySelector('#mas');
const kRan = document.querySelector('#k');
// const check = document.querySelector('#check');
const root = document.querySelector(':root');


document.querySelector('#masa').oninput = masCount;
document.querySelector('#rigidity').oninput = kCount;
document.querySelector('#btn').onclick = update;

// check.onclick = checedSystem;


let m0 = 0;

let T = 0;
let k = 200;
let m = 5;
let V = 1;

let x = 1;
let h = 170;

let x0 = 270;
let x1 = 70;
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
    
    //root.style.setProperty("--z");если понадобится сделать увеличение толщены пружины

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


// часть полностью на переделку

function eventX(value) {
   x = parseFloat(value)/10;
   document.querySelector('#statusX').innerHTML = `x = ${x}м`
   kCountStage2();
}

function eventV(value) {
   V = Number(value);
   document.querySelector('#statusV').innerHTML = `V = ${V}см.куб.`
   block.style.setProperty("--m", `${50+(value*2)}px`);
   kCountStage2();
}

function getMasInTable(id) {
    
    if (check.checked){
        m = parseFloat(document.querySelector(`#${id}`).textContent)/1000;
        m0 = m;
        kCountStage2();
    }
}

function kCountStage2() {
    if (check.checked){
        m0 = m;

        m0 = (m * V).toFixed(3);
        console.log();
        document.querySelector('#m').innerHTML = `${m0} кг.`;
        document.querySelector('#mas').innerHTML = `${m0} кг.`;
        let F = (m0 * 9.8).toFixed(2);
        // console.log(Number(F));
        document.querySelector('#F').innerHTML = `${F} Н`;

        k = (F / x).toFixed(2);

        console.log("x: " + x);
        console.log("m: " + m);
        console.log("F: " + F);
        console.log("k: " + k);

        // document.querySelector('#K').innerHTML = `${k} Н/м`;
        kRan.innerHTML = `${k} Н/м`;
        update();
    }
}
