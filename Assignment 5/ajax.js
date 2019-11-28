function ajax(url,fnSucc,fnFaild)
{
    if(window.XMLHttpRequest)
    {
        var xhr=new XMLHttpRequest();
    }else{
       var xhr=new ActiveXObject("Microsoft.XMLHttp");
    }
    xhr.open('GET',url,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4)
        {
            if(xhr.status==200){//读取成功  http请求状态
                fnSucc(xhr.responseText);//响应数据类型
            }
            else         //失败
            {
                if(fnFaild){//判断是否传入函数
                    fnFaild(xhr.status);//调用
                }
                
            }

        }
    }
}
  
window.onload=function(){
    var btu=document.getElementById('search');

    btu.onclick=function()
    {
        ajax('https://music.niubishanshan.top/api/v2/music/search/%E5%94%90%E4%BA%BA/1/10',function (str){
           /* var content=document.getElementById("content");
            var cnt=content.value;
            var ka=document.getElementById("kuang");*/
            var json=JSON.parse(str);
            /*var json2=json.data.page.songList;
            for(var i=0;i=json2.length;i++){
                if(cnt.value==json2[i].singer){
                    var P=document.createElement("p");
                    P.innerHTML=json2[i].singer+json2[i].songName;
                    ka.appendChild(P);
                }
            }*/
            console.log(json);
         },function (e){
            alert(e);
         })
    };
}
