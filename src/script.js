var digit_one = 0;
var digit_two = 0;
var operator = 0;
var float = false;
var float_house = 0;
var digitone = true;
function clickdigit(number)
{   
    if(float == true){
        var times = 0;
        while(times < float_house){
            if(digitone == true){
                digit_one = digit_one*10;
            }else{
                digit_two = digit_two*10;
            }
            times = times + 1;
        }
    }
    if(digitone == true){
        if(digit_one <= 9999999){
            if(digit_one == 0){
                digit_one += number;
            }else{
                digit_one = digit_one*10 + number;
            }
        }
        document.getElementById("answer").innerHTML = digit_one;
    }else{
        if(digit_two <= 9999999){
            if(digit_two == 0){
                digit_two += number;
            }else{
                digit_two = digit_two*10 + number;
            }
        }
        document.getElementById("answer").innerHTML = digit_two;
    }
    number = 0;
    console.log("digit one: "+digit_one);
    console.log("digit two: "+digit_two);



    if(float == true){
        float_house = float_house + 1;
        var times = 0;
        while(times < float_house){
            if(digitone == true){
                digit_one = digit_one/10;
                document.getElementById("answer").innerHTML = digit_one;
            }else{
                digit_two = digit_two/10;
                document.getElementById("answer").innerHTML = digit_two;
            }
            times = times + 1;
        }
    }
}
function clickoperator(operatorsign)
{
    operator = operatorsign;
    digitone = false;
    float = false;
    float_house = 0;
}
function getResult()
{
    if(operator == '+'){
        digit_one = digit_one + digit_two;
    }else if(operator == '-'){
        digit_one = digit_one - digit_two;
    }else if(operator == 'X'){
        digit_one = digit_one*digit_two;
    }else if(operator == '/'){
        digit_one = digit_one / digit_two;
    }
    if(digit_one <= 9999999){
        document.getElementById("answer").innerHTML = digit_one;
    }else{
        document.getElementById("answer").innerHTML = "ERR";
    }
    digit_two = 0;
}

function clear(type)
{
    console.log(type);
    if(type == "ac"){
        digit_one = 0;
        digit_two = 0;
        operator = 0;
        float = false;
        float_house = 0;
        digitone = true;
        document.getElementById("answer").innerHTML = 0;
        console.log("reconvexo");
    }else{
        if(digitone == true){
            digit_one = 0;
            document.getElementById("answer").innerHTML = 0;
            console.log("reconvexo1");
        }else{
            digit_two = 0;
            document.getElementById("answer").innerHTML = 0;
            console.log("reconvexo3");
        }
    }
}
function AC(){
    clear("ac");
}
function pan(){
    if(digitone == true){
        digit_one = digit_one*-1;
        document.getElementById("answer").innerHTML = digit_one;
    }else{
        digit_two = digit_two*-1;
        document.getElementById("answer").innerHTML = digit_two;
    }
}
document.getElementById("AC").addEventListener("click", AC);
document.getElementById("C").addEventListener("click", clear);
function floatfunc()
{
    float = !float;
    console.log(float);
}