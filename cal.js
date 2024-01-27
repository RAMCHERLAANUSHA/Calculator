let result = document.getElementById("inputbox");
function calculate(number){
    result.value+=number;
}

function Result(){
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input");
    }
}
function clr(){
    result.value='';
}

function del(){
    result.value = result.value.slice(0,-1);
}
