//paste this into console, not self xss :)
const del = setInterval(function func(){
  document.getElementsByClassName('dwrYTb PK')[0].click();
  var l = document.getElementsByClassName('iCWmEc');
  try{
    l[0].click();
    document.getElementsByClassName('LbWtad cmX6We Wxsg2c hH1ADf z-b-ua')[0].click();
  }
  catch{
    //pass
  }
}, 500)
document.body.addEventListener("click", function f(){clearInterval(del)});
