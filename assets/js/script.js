function calculate() {
  var personas = document.getElementById("personas").value;
  var campodos = document.getElementById("campodos").value;
    
    var multiplicacion = personas * campodos;
    document.getElementById("resultado").value = multiplicacion;
}