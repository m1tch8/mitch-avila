
    const burger= document.querySelector('.toggle');
    const menu= document.querySelector('.burger');
function toggleMenu(){
    

    burger.classList.toggle('active');
    menu.classList.toggle('active');

    let checkbox=document.getElementById('checkbox');
}

function toggleClose(){

    menu.classList.remove('active');

    burger.classList.remove('active');

    let checkbox=document.getElementById('checkbox');

    console.log(burger);
    if (checkbox.checked===true){
        checkbox.checked=false;
    }
}

/* const resetBtn=document.querySelector('.reset-btn');

resetBtn.addEventListener('click', ()=>{
    const samplecheck = document.querySelector('.samplecheck');
    
    if (samplecheck.checked===true){
        samplecheck.checked=false;
    }
}) */

