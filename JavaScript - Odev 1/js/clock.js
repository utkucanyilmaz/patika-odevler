function showTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dd = date.getDay();
    let day;

    if (dd == 1){
        day = "Pazartesi";
    } else if (dd == 2) {
        day = "Salı";
    } else if (dd == 3) {
        day = "Çarşamba";
    } else if (dd == 4) {
        day = "Perşembe";
    } else if (dd == 5) {
        day = "Cuma";
    } else if (dd == 6) {
        day = "Cumartesi";
    } else if (dd == 7) {
        day = "Pazar";
    }

  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + day;
  
    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ showTime() }, 1000); 
  
  }
  
showTime();

  let myName = prompt("Adınız Nedir?")
  document.getElementById("myName").innerText = `${myName}` 