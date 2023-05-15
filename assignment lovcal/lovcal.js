function lovecal() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
      display("Enter name please...!!");
      return;
    }
    if (name1.length <= 2 || name2.length <= 2) {
      display("Enter name with three letters words up...!!");
      return;
    }
    if (!isNaN(name1) || !isNaN(name2)) {
      display("Numbers are not allowed...!!");
      return;
    }
  
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    countDown(lovdata + "%");

if (lovdata < 50) {
      document.getElementById("playme").innerHTML = "Display in few seconds!!";
      timeOut("You and your pattener needs delivrances");
      return;
    }
    else
    if (lovdata >= 80) {
        document.getElementById("playme").innerHTML = "Display in few seconds!!";
      timeOut("Love in perfection \n Keep growing in love");
      return;
    }
    else
   if (lovdata >= 50 && lovdata <= 79) {
    document.getElementById("playme").innerHTML = "Display in few seconds!!";
      timeOut("Build more love...! \n Keep growing in love");
    }
  
  }



// .....my function declerations----------!

  function display(msg) {
    document.getElementById("display").innerHTML = msg;
  }

  function settime(msg){
    document.getElementById("loveinfor").innerHTML = msg;
  }

  function timeOut(msg){ setTimeout(function() {
    document.getElementById("display").innerHTML = msg;
  }, 4000);
}

  function countDown(result) {
    let count = 5;
    const countdown = setInterval(() => {
        settime(count);
      if (count == 0) {
        settime(result);
        return;
      }
      count--;

      if (count < 0) {
        clearInterval(countdown);
      }
    }, 500);
  }