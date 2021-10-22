function Calculator(e) {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let output = document.getElementById("output");

  num1 = parseInt(num1.value);
  num2 = parseInt(num2.value);

  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quot = num1 / num2;
  output.innerHTML =
    "Sum: " +
    sum +
    "\nDifference: " +
    diff +
    "\nProduct: " +
    product +
    "\nquotient: " +
    quot;
  //console.log("Sum :" + sum);
  //console.log("Difference :" + diff);
  //console.log("Product :" + product);
  //console.log("quotient :" + quot);

  console.log("Type of quotient:" + typeof quot);
}

let navbar_icon = document.getElementById("navbar-icon");
navbar_icon.addEventListener("click", function () {
  let collapse = document.getElementById("collapse");
  if (collapse.style.display == "none") collapse.style.display = "flex";
  else collapse.style.display = "nonw";
});
