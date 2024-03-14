let table=document.getElementById('chess');
let but=document.querySelector('button');
var changes=0;

but.onclick = () => {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    table.innerHTML = "";
    for (let i = 0; i < height; i++) {
        let newRow = table.insertRow(); 
        for (let j = 0; j < width; j++) {
            let newCell = newRow.insertCell(); 
            if ((j + i) % 2 === 0) {
                if (changes%2===0){
                    newCell.classList.add('black');
                }
                else {
                    newCell.classList.add('white');
                }
            } else {
                if (changes%2===1){
                    newCell.classList.add('black');
                }
                else {
                    newCell.classList.add('white');
                }
            }
        }           
    }
}
table.onclick=() =>{
    let black_el = document.querySelectorAll('.black');
    let white_el = document.querySelectorAll('.white');

    white_el.forEach((element) => {
        element.classList.remove('white');
        element.classList.add('black');
    });
    black_el.forEach((element) => {
        element.classList.remove('black');
        element.classList.add('white');
    });

    changes++;
}
