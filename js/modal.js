var btn = document.querySelector("button");
var modal = document.querySelector(".fix");
var panel = document.querySelector(".panel");
btn.addEventListener("click",function(e){
  modal.style.display = "block";
  e.stopPropagation();
});
window.addEventListener("click",function(e){
  modal.style.display = "none";
});
panel.addEventListener("click",function(e){
  e.stopPropagation();
});
var close = document.querySelector(".panel>span");
close.addEventListener("click",function(){
  modal.style.display = "none";
});
var cancel = document.querySelector("footer>span");
cancel.addEventListener("click",function(e){
  modal.style.display = "none";
                        });