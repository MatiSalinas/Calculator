const nums = document.querySelectorAll('.numButtons');
const displayText = document.querySelector('.displayText');
console.log(nums)
nums.forEach(num => {
    num.addEventListener('click', ()=> {
        displayText.textContent += num.textContent;
    })
})
    






function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b ;
}

function division(a,b){
    return a / b;
}

function exponent(a,b){
    return a ** b;
}

console.log(exponent(4,2));