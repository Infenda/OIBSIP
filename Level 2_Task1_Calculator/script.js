let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function power(){
    outputScreen.value = Math.pow(outputScreen.value,2);
}

function sqrt(){
    outputScreen.value = Math.sqrt(outputScreen.value);
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Error");
    }
}