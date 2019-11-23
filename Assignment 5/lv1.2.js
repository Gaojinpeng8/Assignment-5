(function(){
    let ul=document.getElementById('ul-list');
    let list=ul.getElementsByTagName('li');
    let i;
    for(i=0;i<list.length;i++){
        if(i%2==0){
            list[i].style.color="red";
        }else{
            list[i].style.color="green";
        }
    }
    for(i=0;i<list.length;i++){
        list[i].addEventListener('click',show,false);
    }
    
    function  show(e){
        var x=e.target;
        console.log(x.innerHTML);
    }
})()