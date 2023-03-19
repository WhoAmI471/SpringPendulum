const block = document.querySelector('#block');
const res = document.querySelector('#answer');
const pr = document.querySelector('#pr');
const mas = document.querySelector('#mas');
const kRan = document.querySelector('#k');
const check = document.querySelector('#check');
const root = document.querySelector(':root');


document.querySelector('#masa').oninput = masCount;
document.querySelector('#rigidity').oninput = kCount;
document.querySelector('#btn').onclick = update;

check.onclick = checedSystem;


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
    // 
};

function kCount() {
    k = this.value;
    console.log(k);
    kRan.innerHTML = `${k} H/м`;
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

function eventX(value) {
   x = parseFloat(value)/10;
   document.querySelector('#statusX').innerHTML = `x = ${x}м`
   update();
  }

function eventV(value) {
   V = Number(value);
   document.querySelector('#statusV').innerHTML = `V = ${V}см.куб.`
   block.style.setProperty("--m", `${50+(value*2)}px`);
   update();
  }

function kCountStage2(id) {
    if (check.checked){
        m = ((parseFloat(document.querySelector(`#${id}`).textContent) * V)/1000).toFixed(3);
        // console.log(parseFloat(num));
        document.querySelector('#m').innerHTML = `${m} кг.`;
        document.querySelector('#mas').innerHTML = `${m} кг.`;

        let F = (m * 9.8).toFixed(2);
        // console.log(Number(F));
        document.querySelector('#F').innerHTML = `${F} Н`;

        k = (F / x).toFixed(2);

        console.log("x: "+x);
        console.log("m: "+m);
        console.log("F: "+F);
        console.log("k: "+k);

        // document.querySelector('#K').innerHTML = `${k} Н/м`;
        kRan.innerHTML = `${k} Н/м`;
        update();
    }
}
