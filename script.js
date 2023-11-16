function validEmail(email) {
    if (
    email == "" ||
    email == null ||
    email.endsWith(".") ||
    email.indexOf("@") == -1
  ) {
    return false;
  }

  let splitted = email.split("@");
  console.log(splitted);
  if (splitted[0].length == 0 || splitted[1].length == 0) {
    return false;
  }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
