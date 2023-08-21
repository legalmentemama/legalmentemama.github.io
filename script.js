$(document).ready(function() {
  $(".units-btn").on("click", function() {
    $(this).parent().find(".active").toggleClass("active");
    $(this).toggleClass("active");

    if ($("#lyserg").hasClass("active")) {
      $(".units").text("μg");
      $("#dose").attr("step", "5");
    } else if ($("#mushy").hasClass("active")) {
      $(".units").text("g");
      $("#dose").attr("step", "1");
    }

  });

});

// JS BELOW ENTIERLY TAKEN FROM https://psychedeliccalc.herokuapp.com

function calculate() {
  var x = document.getElementById("dose").value;
  var n = document.getElementById("days").value;

  var estimatedDosage = (x / 100) * 280.059565 * (Math.pow(n, -0.412565956));
  // the ternary is because this equation will potentially return a value lower than the last value if the days since is long enough.
  var newAmount = ((estimatedDosage < x) ? x : estimatedDosage);
  document.getElementById("result").value = Math.round(newAmount * 10) / 10; //added rounding
}