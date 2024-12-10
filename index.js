const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const numberH1 = document.getElementById('numberH1')


plusButton.addEventListener('click',add)

let number = 0
function add(){
    number = number + 1
    numberH1.innerHTML = number   
}

minusButton.addEventListener('click',subtract)
function subtract(){
    number = number - 1
    numberH1.innerHTML = number
}


