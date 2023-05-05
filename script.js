const inputEl = document.getElementById("input")
const errorEl = document.getElementById("errorEl")
const resultEl = document.getElementById("resultEl")

// console.log(weightEl)
let timeOut;
function getResult() {
    // console.log("connected");
    // console.log(inputEl.value);

   
    clearTimeout(timeOut);
    if (inputEl.value <=0 || isNaN(inputEl.value)) {

        errorEl.innerText = "Error!! Enter a valid positive Number";
        
        timeOut = setTimeout(() => {
            errorEl.innerText = "";
            inputEl.value = "";
        }, 1700);
    } else {
        resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);

        timeOut = setTimeout(() => {
            resultEl.innerText = "";
            inputEl.value = "";
        }, 5000);
    }
}


inputEl.addEventListener("input", getResult);