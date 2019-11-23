let a=0;
function background(){
    let div1=document.getElementById('main');
    let div2=document.getElementById('wawa');
    let div3=document.getElementsByClassName('haha');
    div1.style.backgroundColor='pink';    
    div2.style.backgroundColor='rgb(236, 131, 222)';
    for(let i=0;i<div3.length;i++){
        div3[i].style.backgroundColor='rgb(236, 131, 166)';
    }
}

function change(font,a,b,c){
    let gao=document.getElementById('hehe');
    let jin=document.getElementById('wawa2');
    let odiv=document.getElementById('less');
    let peng=odiv.getElementsByTagName('p');
    gao.style[font]=a;
    jin.style[font]=b;
    for(let i=0;i<peng.length;i++){
        peng[i].style[font]=c;
    }

}