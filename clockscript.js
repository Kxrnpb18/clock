function updateClock() {
    const now = new Date();
    
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
  
    let d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  