function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var l = document.getElementById("text2").value;
    var f = document.getElementById("text1").value;
    if (input.value.match(validRegex)) 
    {
  
        //alert("Valid email address " + f);
        window.location.href="1.html";
        //opened.document.write("<html><head><title>Welcome</title></head><body>Welcome</body></html>");
        //document.form1.text3.focus();
  
      return true;
  
    } 
    else {
  
      alert("Invalid email address " + l);
  
      document.form1.text3.focus();
  
      return false;
  
    }
  
  }