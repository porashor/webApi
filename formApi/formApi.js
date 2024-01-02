function myFunction() {
    const inpObj = document.getElementById("age");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }