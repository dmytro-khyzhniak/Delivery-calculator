let btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    frag = document.querySelector('#frag'),
    weight = document.querySelector('#weight'),
    range = document.querySelector('#range'),
    del = document.querySelector('#del'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    distance = document.querySelector('.distance'),
    //цена каждого в рублях
    kub = 3500,
    kg = 5.5,
    km = 2;

    range.onchange = function() {
        distance.innerHTML = range.value;
    };

    btn.onclick = function() {
        if (!isNaN(weight.value) && !isNaN(vol.value) && weight.value != 0 && vol.value != 0) {
            let sum = Number(vol.value) * 3500 + Number(weight.value) * 5.5 + range.value * 2; 
                if (load.checked) {
                    sum += 1500;
                }
            if (del.checked) {
                sum += 3500;
            }
                if (frag.checked) {
                    sum += 2000;
                }
            out.innerText = sum;
        } else {
            alert('Заполните поля корректно!');
        }
    };