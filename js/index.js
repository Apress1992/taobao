/**
 * Created by Lantern on 2017/6/1.
 */
var tab=document.getElementById('nav-right');
//顶部右侧hover下拉效果函数调用及其封装
 tabHover(tab);
function tabHover(tab){
    var tabChild=tab.getElementsByTagName('li');
    for(var i=0;i<tabChild.length;i++){
        tabChild[i].onmouseover=function(){

            var hideBlock=this.getElementsByClassName('nav-hide')[0];
            if(hideBlock){
                hideBlock.style.display='block';
            }
        }
        tabChild[i].onmouseout=function(){
            var hideBlock=this.getElementsByClassName('nav-hide')[0];
            if(hideBlock){
                hideBlock.style.display='none';
            }
        }
    }
}

