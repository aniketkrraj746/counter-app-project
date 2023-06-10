const countValue=document.querySelector('#counter');

// const increment=() => {
//     let value = parseInt(countValue.innerText);
//     value=value+1;
//     countValue.innerText = value;
// }; 
// const decrement=() => {
//     let value = parseInt(countValue.innerText);
//     value=value-1;
//     countValue.innerText = value;
// };


// function increment(){
//     let value = parseInt(countValue.innerText);
//     value=value+1;
//     countValue.innerText = value;
// };

function decrement(){
    let value = parseInt(countValue.innerHTML);
    value=value-1;
    countValue.innerHTML = value;
};


function increment (){
    let value = parseInt(countValue.innerHTML);
    value=value+1;
    countValue.innerHTML = value;
};
