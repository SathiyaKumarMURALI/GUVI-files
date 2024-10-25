


function sumofnumber(num1,num2){
    let result = num1+num2;
    console.log(result);
}



function sumofsubtract(num1,num2){
    let result = num1-num2;
    console.log(result);
}



function multiply(num1,num2){
    let result = num1*num2;
    console.log(result);
}



function divide(a,b){
    let result=a/b;
    console.log(result);
}




function modulus (a,b){
    let result= (a%b);
    console.log(result);
}

function calculate(opt,num1,num2){
    if (opt =="add"){
        console.log("add",num1+num2);
    }else if (opt=="sub"){
        console.log("sub", num1-num2);
    }else if (opt =="mul"){
       console.log("mul",num1*num2);
    } else if (opt=="div"){
        console.log("div",num1/num2);
    } else {
        console.log("please provide proper operations")
    }

}

function Switch(opt,num1,num2) {
    if (num1&&num2){
        switch(opt){
            case "add" :
                console.log("add", num1 + num2);
                break;
            case "sub" :
                console.log("sub", num1 -num2);
                break;
            case "mul" :
                console.log("mul", num1 * num2);
                break;
            case "div" :
                console.log("div", num1 / num2);
            default :
            console.log ("Please provide proper operation");

        }
    }else {
        console.log("please provide at least 2 arguments");
    }

}

sumofnumber(5,6);
sumofsubtract(6,1);
multiply(5,3);
divide(4,2);
modulus(5,2);

console.log ("................._______>>>>>>>>>>>>>......")

calculate("add", 15,16);
calculate("sub", 16,17);
calculate("mul", 5,6);
calculate("div", 4,2);
calculate("add", 4,);

console.log("--------------------------------------")

Switch("add", 15,16);
Switch("sub", 16,12);
Switch("mul", 5,4);
Switch("div", 4,3);
Switch("say hi", 45454,)
Switch("dfsbatrfba")



for (let i = 0; i <= 5; i++){
    console.log("for",i);
}

let j = 0;
while (j <= 5){
    console.log("while", j);
    j++;
}


