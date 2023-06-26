let o1 = "";
let o2 = "";
let opr = "";
let ans = 0;

let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");

let numkey = document.querySelectorAll(".num");
for(let n of numkey){
    n.addEventListener("click",function(){
        if(s2.innerHTML.length <= 9){
            if(opr == ""){
                o1 += n.innerHTML;
                s2.innerHTML = `${o1}`;
            }
            else{
                o2 += n.innerHTML;
                s2.innerHTML = `${o2}`;
            }
        }
        else{
            alert("Input limit reached!");
        }
    });
}

let oprkey = document.querySelectorAll(".opercont")
for(let o of oprkey){
    o.addEventListener("click",function(){
        if(o.innerHTML != '='){
            if(o1 != ""){
                if(o2 != ""){
                    let ans1;
                    if(opr == "+"){
                        ans1 = parseInt(o1) + parseInt(o2);
                    }
                    else if(opr == "-"){
                        ans1 = parseInt(o1) - parseInt(o2);
                    }
                    else if(opr == "÷"){
                        ans1 = parseInt(o1) / parseInt(o2);
                    }
                    else if(opr == "x"){
                        ans1 = parseInt(o1) * parseInt(o2);
                    }
                    else{
                        ans1 = parseInt(o1) % parseInt(o2);
                    }
                    o1 = ans1;
                    o2 = "";
                }
                opr = o.innerHTML;
                s2.innerHTML = ``
                s1.innerHTML = `${o1}${opr}`
            }
        }
        else{
            if(o2 != ""){
                if(opr == "+"){
                    ans = parseInt(o1) + parseInt(o2);
                }
                else if(opr == "-"){
                    ans = parseInt(o1) - parseInt(o2);
                }
                else if(opr == "÷"){
                    ans = parseInt(o1) / parseInt(o2);
                }
                else if(opr == "x"){
                    ans = parseInt(o1) * parseInt(o2);
                }
                else{
                    ans = parseInt(o1) % parseInt(o2);
                }
                s1.innerHTML = `${o1}${opr}${o2}`;
                s2.innerHTML = `${ans}`;
            }
        }
    });
}
let allclearbtn = document.querySelector("#ac");
allclearbtn.addEventListener("click",function(){
    s1.innerHTML = "";
    s2.innerHTML = "0";
    o1 = "";
    o2 = "";
    opr = "";
});

let delbtn = document.querySelector("#del");
delbtn.addEventListener("click",function(){
    if(o1 != ""){
        if(opr != ""){
            let o21 = parseInt(o2);
            o21 = Math.floor(o21/10);
            o2 = o21;
            s2.innerHTML = `${o2}`;
        }
        else{
            let o11 = parseInt(o1);
            o11 = Math.floor(o11/10);
            o1 = o11;
            s2.innerHTML = `${o1}`;
        }
    }
});


