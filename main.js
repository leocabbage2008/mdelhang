//paste this into console, not self xss :)
// interval, iterates over and over and over... 500 ms pause
const del = setInterval(function func(){
  //gets the members info
  document.getElementsByClassName('dwrYTb PK')[0].click();
  // get's members delete buttons >:D
  var l = document.getElementsByClassName('iCWmEc');
  // might leave some outcasts, rerun to finish em off
  try{
    // presses delete button
    l[0].click();
    // presses yes i do
    document.getElementsByClassName('LbWtad cmX6We Wxsg2c hH1ADf z-b-ua')[0].click();
  }
  catch{
    //pass
  }
}, 500)
document.body.addEventListener("click", function f(){clearInterval(del)});
