let work = document.querySelector('.daytime-7am');
let result = document.querySelector('#result');

function submitted(){
    const name = work.value;
    result.innerText = name;
}

let i = 1;
let j = 1;
let k = 1;
function add_row(){
    let myTbody = document.getElementById('myTable');
    let row = myTbody.insertRow(myTbody.rows.length);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    if((i+6)<13){
        cell1.innerHTML = `${i+6}am`;
        i++;
    } else if((i+6)>12 && j<13 ){
            cell1.innerHTML = `${j}pm`;
            j++;        
    } else {
        cell1.innerHTML = `${k}am`;
    }
}