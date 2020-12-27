let num1 = "0";
let num2 = "";
let operation = "";

// event listeners
let btns = document.querySelectorAll(".btn");

let nums = document.querySelectorAll(".num");

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", (item) => {
        let id = nums[i].getAttribute("id");
        if (operation === "") {
            if (num1 === "0") {
                num1 = id;
            } else {
                num1 += id;
            }
        } else {
            
            num2 += id;
            
        }
    })
}

let opObj = {
    "divide": divide,
    "multiply": multiply,
    "minus": subtract,
    "plus": add,
    "exp": expt,
};

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (operation != "") {
        num1 = "" + operate(opObj[operation], num1, num2);
        num2 = "";
        operation = "";
    }
});

let division = document.querySelector("#divide");

let mult = document.querySelector("#multiply");

let minus = document.querySelector("#minus");

let plus = document.querySelector("#plus");

let exp = document.querySelector("#exp");

let opArr = [division, mult, minus, plus, exp];
opArr.forEach((item) => {
    item.addEventListener("click", () => {

        if (num2 != "" && operation != "") {
            num1 = "" + operate(opObj[operation], +num1, +num2);
            num2 = "";
        }

        operation = item.getAttribute("id");
        
    })
});


let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (operation != "") {
        if(num2.indexOf(".") == -1) {
            if (num2 == "") {
                num2 += "0";
            }
            num2 += ".";
        }
    } else {
        if(num1.indexOf(".") == -1) {
            num1 += ".";
        } 
    }
});

let plusminus = document.querySelector("#plusminus");
plusminus.addEventListener("click", () => {
    if (operation != "" && num2 != "") {
        if(num2[0] == "-") {
            num2 = num2.substring(1);
        } else {
            num2 = "-" + num2;
        }
    } else {
        if(num1[0] == "-") {
            num1 = num1.substring(1);
        } else {
            num1 = "-" + num1;
        }
    }
});

let ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
    num1 = "0";
    num2 = "";
    operation = "";
})

let factor = document.querySelector("#fact");
factor.addEventListener("click", () => {
    if (operation != "" && num2 != "") {
        num2 = fact(num2);
    } else {
        num1 = fact(num1);
    }
})


function updateCSS() {
    let display = document.querySelector("#display");
    if (operation != "" && num2 != "") {
        display.textContent = num2;
    } else {
        display.textContent = num1;
    }
}

// operation functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function expt(a, b) {
    return (+a) ** (+b);
}

function fact(a) {
    if (+a < 0) {
        return NaN;
    } else if (+a >= 2) {
        return "" + (+a * fact(+a-1));
    } else {
        return "1";
    }
}

function operate(func, a, b) {
    return func(+a, +b);
}

// update css every time a button is clicked

btns.forEach((item) => {
    item.addEventListener("click", updateCSS);
});