function Calculator(e) {
  let num1 = document.getElementById("num1");
  let num1 = document.getElementById("num1");

  num1 = parseInt(num1.value);
  num2 = parseInt(num2.value);

  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quot = num1 / num2;

  //console.log("Sum :" + sum);
  //console.log("Difference :" + diff);
  //console.log("Product :" + product);
  //console.log("quotient :" + quot);

  console.log("Type of quotient:" + typeof quot);
}

Calculator(200, 56);
