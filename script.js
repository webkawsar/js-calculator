
document.getElementById("one").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 1 : display.innerText += 1;

})

document.getElementById("two").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 2 : display.innerText += 2;
})

document.getElementById("three").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 3 : display.innerText += 3;
})

document.getElementById("four").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 4 : display.innerText += 4;
})

document.getElementById("five").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 5 : display.innerText += 5;
})

document.getElementById("six").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 6 : display.innerText += 6;
})

document.getElementById("seven").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 7 : display.innerText += 7;
})

document.getElementById("eight").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 8 : display.innerText += 8;
})

document.getElementById("nine").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 9 : display.innerText += 9;
})

document.getElementById("zero").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText =  isIncludeEqual ? display.innerText : display.innerText === '0' ? 0 : display.innerText += 0;
})

document.getElementById("clear").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = 0;
})


document.getElementById("dot").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");

    const findDotOperator = display.innerText.match(/[^0-9=' ']/ig);
    const findArithOperator = display.innerText.match(/[^0-9=' '\.]{1}/ig);

    if(isIncludeEqual){

        display.innerText = display.innerText;
    } else if(findDotOperator === null){

        display.innerText += '.';
    } else if(findArithOperator === null){

        display.innerText = display.innerText;
    }else if(findArithOperator){

        const position = display.innerText.indexOf(findArithOperator[0]);
        const restNum = display.innerText.slice((position + 1));
        const isDot = restNum.includes('.');

        if(!isDot){

            display.innerText += '.';
        }

    } else {

        display.innerText += '.';
    }
    
})



// **************** operator area *********/

document.getElementById("plus").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = display.innerText > 0 ? display.innerText += '+' : display.innerText;
})

document.getElementById("minus").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = display.innerText > 0 ? display.innerText += '-' : display.innerText;
})

document.getElementById("multiply").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = display.innerText > 0 ? display.innerText += '*' : display.innerText;
})

document.getElementById("divide").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = display.innerText > 0 ? display.innerHTML += '/' : display.innerText;
})



document.getElementById("calculate").addEventListener("click", () => {

    const display = document.getElementById("display");
    const position = display.innerText.search(/[^0-9=' '\.]{1}/ig);
    const operator = display.innerText.match(/[^0-9=' '\.]{1}/ig);

    if(position == -1 && operator == null){
        return;
    }

    const beforeNum = display.innerText.slice(0, position);
    const endNum = display.innerText.slice((position + 1), display.innerText.length);

    let total = 0;
    if(operator[0] === '+'){

        total = parseFloat(beforeNum) + parseFloat(endNum);
    } else if(operator[0] === '-'){

        total = parseFloat(beforeNum) - parseFloat(endNum);
    } else if(operator[0] === '*'){

        total = parseFloat(beforeNum) * parseFloat(endNum);
    } else if(operator[0] === '/') {

        total = parseFloat(beforeNum) / parseFloat(endNum);
    }

    display.innerText = `= ${total}`;
})

