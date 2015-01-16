var buttonNodes = document.getElementsByClassName("button");
var displayNode = document.getElementById("result_display_value")

var valuesArray = [];
for (var i = 0; i < buttonNodes.length; i++) {
  buttonNodes[i].addEventListener('click', function() {
    var currentValue = this.innerHTML;

    valuesArray.push(currentValue);
    displayStuff(valuesArray.join(""));
    if (currentValue === "ENT") {
      var result = doMath(currentValue, valuesArray);
      displayStuff(result);
    }

    else if (currentValue === "CLR") {
      valuesArray = [];
      displayStuff('');
    }

  })
}

function doMath (currentValue, valuesArray) {
  valuesArray.pop();
  var equation = valuesArray.join("");
  var operation = new Function("return " + equation);
  return operation();
}

function displayStuff (values) {
  displayNode.innerHTML = values;
}
