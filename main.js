function clr() {
    document.getElementById("result").value = "";
}

// This function display values
function disp(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calc() {
    var store = document.getElementById("result").value;
    var answer = eval(store);
    document.getElementById("result").value = answer;
}
function back(){
    document.getElementById("result").value= document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1);
}