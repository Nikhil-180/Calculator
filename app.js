const keys= document.querySelectorAll(".key");
let ip = document.querySelector(".textbox input");
const clear1=document.querySelector(".clear1");
const clear2=document.querySelector(".clear2");
let opr="";


const cleartext =
keys.forEach((key) => {
    key.addEventListener("click", () => {
        if(key.value==="=")
        {
            ip.value=eval(ip.value);
        }
        else{
            if(ip.value==="0" || ip.value==="")
            {
                ip.value=key.value;
                opr=key.value;
            }
            else if((key.value==="+" || key.value==="-" || key.value==="/" || key.value==="*") && (opr==="+" || opr==="*" || opr==="/" || opr==="-"))
            {
                ip.value=ip.value.slice(0, -1);
                ip.value+=key.value;
                opr=key.value;
            }
            else{
                ip.value+=key.value;
                opr=key.value;
            }
        }
    });
});

clear1.addEventListener("click", ()=>
{
    ip.value="0";
    opr="";
});
clear2.addEventListener("click", ()=>
{
        ip.value=ip.value.slice(0, -1);
});