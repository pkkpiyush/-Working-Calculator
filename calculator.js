let nums = document.querySelectorAll(".numBox");
let ans = document.querySelector("#ans");

nums.forEach(num =>{
    num.addEventListener("click",function(){
        ans.innerText += num.innerText;
    });
});

let signs = document.querySelectorAll(".sign");

signs.forEach(sign =>{
    sign.addEventListener("click",function(){
        ans.innerText += sign.innerText;
    });
});

let percent = document.querySelectorAll("#percent");

percent.forEach(percentage=>{
    percentage.addEventListener("click",function(){
        ans.innerText += percentage.innerText;
    });
});

let divide = document.querySelectorAll("#divide");

divide.forEach(division=>{
    division.addEventListener("click",function(){
        ans.innerText += division.innerText;
    });
});

let clear = document.querySelector("#ac");
clear.addEventListener("click",function(){
    ans.innerText = null;
});

let back = document.querySelector("#back");

back.addEventListener("click",function(){
    ans.innerText = ans.innerText.slice(0,-1);
});

let equal = document.querySelector("#equals");

equal.addEventListener("click",function(){
    let exp = ans.innerText;

    try{
        let result = eval(exp);
        ans.innerText = result;
    }catch(error){
        ans.innerText = "Maths error";
    }
});