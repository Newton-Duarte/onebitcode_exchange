// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require popper.js
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require tether
//= require bootstrap
//= require_tree .

$(document).ready(function($) {
  function flipCurrency() {

    var val1 = $("#currency option:selected").val();
    var text1 = $("#currency option:selected").text();

    var val2 = $("#currency_destination option:selected").val();
    var text2 = $("#currency_destination option:selected").text();

    $("#currency option:selected").val(val2);
    $("#currency option:selected").text(text2);

    $("#currency_destination option:selected").val(val1);
    $("#currency_destination option:selected").text(text1);

  }

  $("#trocar").click(function(event) {
    flipCurrency();
    event.preventDefault();
  });

});
