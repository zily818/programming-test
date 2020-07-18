window.onload=function () {
    //添加删除键
    var  myli=document.getElementsByTagName("li");
    for(var i=0;i<myli.length;i++){
        var span=document.createElement("span");
        var txt=document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(txt);
        myli[i].appendChild(span);
    }
    //清除功能
    var close=document.getElementsByClassName("close");
    for(var i=0;i<close.length;i++){
        close[i].onclick=function () {
        var div=this.parentElement;
        div.style.display="none";
    }
    }
    var list=document.querySelector("ul");
    list.addEventListener("click",function (ev) {
        if(ev.target.tagName==="LI"){
            ev.target.classList.toggle("checked")
        }
    },false);
    //添加功能
    var add=document.getElementsByClassName("addBtn")[0];
    add.onclick=function () {
    var ul=document.getElementById("myUL");
    var li=document.createElement("li");
    var inputvalue =document.getElementById("myInput").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue==""){
        alert("请输入要添加的事项");
    }else {
        ul.appendChild(li);
    }
    document.getElementById("myInput").value="";
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
        span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    for(var i=0;i<close.length;i++){
        close[i].onclick=function () {
            var div=this.parentElement;
            div.style.display="none";
        }
    }
    }
	//
}
