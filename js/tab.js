var tabHead = document.querySelector(".tab-header");
tabHead.addEventListener("click",function(e){
  var lis = document.querySelectorAll(".tab-header>li");
  [].forEach.call(lis,function(item){
    item.classList.remove("active");
  });
  if(e.target.tagName === "LI"){
    e.target.classList.add("active");
  }
  var i = [].indexOf.call(lis,e.target);
  var lis2 = document.querySelectorAll(".tab-content>li");
  [].forEach.call(lis2,function(item){
    item.classList.remove("active");
  });
  lis2[i].classList.add("active");
});