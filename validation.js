function myFunctionNumber() {
    
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 9999999999) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
  }