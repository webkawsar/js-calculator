
document.getElementById("one").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 1 : isIncludeEqual ? display.innerText : display.innerText += 1;

})

document.getElementById("two").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 2 : isIncludeEqual ? display.innerText : display.innerText += 2;
})

document.getElementById("three").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 3 : isIncludeEqual ? display.innerText : display.innerText += 3;
})

document.getElementById("four").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 4 : isIncludeEqual ? display.innerText : display.innerText += 4;
})

document.getElementById("five").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 5 : isIncludeEqual ? display.innerText : display.innerText += 5;
})

document.getElementById("six").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 6 : isIncludeEqual ? display.innerText : display.innerText += 6;
})

document.getElementById("seven").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 7 : isIncludeEqual ? display.innerText : display.innerText += 7;
})

document.getElementById("eight").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 8 : isIncludeEqual ? display.innerText : display.innerText += 8;
})

document.getElementById("nine").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 9 : isIncludeEqual ? display.innerText : display.innerText += 9;
})

document.getElementById("zero").addEventListener("click", () => {

    const display = document.getElementById("display");
    const isIncludeEqual = display.innerText.includes("=");
    display.innerText = display.innerText == 0 ? 0 : isIncludeEqual ? display.innerText : display.innerText += 0;
})

document.getElementById("clear").addEventListener("click", () => {

    const display = document.getElementById("display");
    display.innerText = 0;
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
    const regex = /[^0-9=' ']{1}/ig;
    const position = display.innerText.search(regex);
    const operator = display.innerText.match(regex);

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























