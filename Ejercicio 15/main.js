function trueAnswer(){
    document.getElementById("1").style.display = "none";
    document.getElementById("a2").style.display = "inline";
    document.getElementById("a3").style.display = "none";
}

function falseAnswer(){
    document.getElementById("1").style.display = "none";
    document.getElementById("a3").style.display = "inline";
    document.getElementById("a2").style.display = "none"
}


function nextQuestion(){
    document.getElementById("1").style.display = "block";
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
}


