const s1 = document.querySelectorAll('#s1');
const s2 = document.querySelectorAll('#s2');
const s3 = document.querySelectorAll('#s3');
let index = 0;
let lista = [s1, s2, s3];
function Inapoi(){
    if(index == 0){
        actual_index = 2;
    }
    else{
        actual_index = index - 1;
    }
    console.log(index);
    console.log(actual_index);
    lista[index].forEach(element => {
        element.classList.remove('active')
    });
    lista[actual_index].forEach(element => {
        element.classList.add('active')
    });

    index = actual_index;
}

function Inainte(){
    if(index == 2){
        actual_index = 0;
    }
    else{
        actual_index = index + 1;
    }
    lista[index].forEach(element => {
        element.classList.remove('active')
    });
    console.log(lista[actual_index])
    lista[actual_index].forEach(element => {
        element.classList.add('active')
    });

    index = actual_index;
}

