const nums = document.querySelectorAll('.numButtons');
const displayText = document.querySelector('.displayText');

let first,second,total,operator = 0;

nums.forEach(num => {
    num.addEventListener('click', ()=> {
        if(displayText.textContent == 0 || displayText.textContent == operator){
            displayText.textContent = num.textContent;
        }else{
        displayText.textContent += num.textContent;}
    })
})

const operators = document.querySelectorAll('.opButtons');

operators.forEach(op => {
    op.addEventListener('click',()=> {
        switch (op.textContent) {
            case '/':
                if(operator != 0){
                    operate()
                    first = total;
                    operator = '/';
                    displayText.textContent = operator;
                    break;

                    
                }
                first = parseFloat(displayText.textContent);
                operator = '/';
                displayText.textContent = operator;
                break;

            case 'X':
                if(operator != 0){
                    operate()
                    operator = 'X';
                    first = total;
                    displayText.textContent = operator;
                    break;

                }
                first = parseFloat(displayText.textContent);
                operator = 'X';
                displayText.textContent = operator;
                break;

            case '-':
                if(operator != 0){
                    operate()
                    operator = '-';
                    first = total;
                    displayText.textContent = operator;
                    break;
                }
                first = parseFloat(displayText.textContent);
                operator = '-';
                displayText.textContent = operator;
                break;

            case '+':
                if(operator != 0){
                    operate()
                    operator = '+';
                    first = total;
                    displayText.textContent = operator;
                    break;
                }
                first = parseFloat(displayText.textContent);
                operator = '+';
                displayText.textContent = operator;
                break;

            case 'DEL':
                console.log('delete')
                displayText.textContent = displayText.textContent.slice(0,-1);
                break;
        
            default:
                break;
        }
    })
})

const equal = document.getElementById('equal');
const reset = document.getElementById('reset');

reset.addEventListener('click',()=> {
    displayText.textContent =0;
    first = 0;
    second = 0;
    operator = 0;
    total = 0;
})

equal.addEventListener('click',operate);


function operate(){
    second = parseFloat(displayText.textContent);
    switch (operator) {
        case '/':
            total = division(first,second);
            displayText.textContent= total;
            break;

        case 'X':
            total = multiply(first,second);
            displayText.textContent= total;
            break;

        case '-':
            total = subtract(first,second);
            displayText.textContent= total;
            break;

        case '+':
            total = add(first,second);
            displayText.textContent= total;
            break;
    
        default:
            break;
    }
}



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
