let timeleft = 5;
let downloadTimer = setInterval(function(){
  if(timeleft === 0){
    window.location.replace('question3.html')
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").innerHTML = timeleft ;
  timeleft -= 1;
}, 1000);
