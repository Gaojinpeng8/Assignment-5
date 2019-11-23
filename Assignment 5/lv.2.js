
function  liuyan(){
    let kuang=document.getElementById("xie");
    let ban=document.getElementById("saying");
    let P=document.createElement("p");
    let Kve=kuang.value;
    ban.appendChild(P);
    P.innerHTML=Kve;
    Kve="请留言";
}
