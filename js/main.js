
document.addEventListener("DOMContentLoaded", function(){
    var listElements = document.querySelectorAll(".menu>ul>li");

    for(var i=0; i<listElements.length; i++){
            console.log("i am in ")
        listElements[i].addEventListener("mouseover", function(event){
            var subList = this.querySelector("ul");
            if(subList !== null){
                subList.style.display = "block";
            }
        });

        listElements[i].addEventListener("mouseout", function(event){
                console.log("i am ut ")
            var subList = this.querySelector("ul");
            if(subList !== null){
                subList.style.display = "none";
            }
        });
    }
});
//$(".menu>ul>li").on("mouseover", function(){
//    $(".sub-menu").toggle();
  //  console.log("a");
//});

$("#pic1").on("mouseenter",function() {
$("#pic1 .panel").toggle();
});

$("#pic2").on("mouseenter",function() {
$("#pic2 .panel").toggle();
});

var slideNo = 0;

$(".arrow-left").on("click",function(){
  if (slideNo>0) {
    slideNo--;
    $(".slide_container").animate({
      left: "+=980",
    }, 1000);
  } else {
    slideNo = 2;
    $(".slide_container").animate({
      left: "-=1960",
    }, 1000);
  }
})

$(".arrow-right").on("click",function(){
  if (slideNo<2) {
    slideNo++;
    $(".slide_container").animate({
        left: "-=980",
      }, 1000);
  }else {
    slideNo = 0;
    $(".slide_container").animate({
      left: "+=1960",
    }, 1000);
  }

})



$(document).ready(function(){
var typeOfChair=$('#typeOfChair');
var colorOfChair=$('#colorOfChair');
var materialOfChair=$('#materialOfChair');
var transportOfChair=$('#transportOfChair');

var nameDisplay1=$('#nameDisplay1');
var nameDisplay2=$('#nameDisplay2');
var nameDisplay3=$('#nameDisplay3');
var priceDisplay = $('#priceDisplay');


var priceOfTypeDisplay = $('#priceOfTypeDisplay');
var priceOfColorDisplay = $('#priceOfColorDisplay');
var priceOfMaterialDisplay = $('#priceOfMaterialDisplay');
var priceOfTransportDisplay = $('#priceOfTransportDisplay');

    typeOfChair.on('change', function() {
    nameDisplay1.text(typeOfChair.val());
    nameDisplay2.text(colorOfChair.val());
    nameDisplay3.text(materialOfChair.val());
    var color=colorOfChair.find('option:selected').data().color1;
    var type=typeOfChair.find('option:selected').data().type1;
    var material=materialOfChair.find('option:selected').data().material1;
    if ( $('#transportOfChair').is(':checked')){
      transport=20;
    }
    else{
      transport=0;
    }


    price=parseInt(color)+parseInt(type)+parseInt(material)+parseInt(transport);

    priceDisplay.text(price+'zl');

    priceOfTypeDisplay.text(type+'zl');
      if (typeof color !== 'undefined'){
    priceOfColorDisplay.text(color+'zl');
  }
  if (typeof material !== 'undefined'){
    priceOfMaterialDisplay.text(material+'zl');
  }
  if (typeof transport !== 'undefined'){
    priceOfTransportDisplay.text(transport+'zl');
  }
});

colorOfChair.on('change', function() {
nameDisplay1.text(typeOfChair.val());
nameDisplay2.text(colorOfChair.val());
nameDisplay3.text(materialOfChair.val());
var color=colorOfChair.find('option:selected').data().color1;
var type=typeOfChair.find('option:selected').data().type1;
var material=materialOfChair.find('option:selected').data().material1;
//  var transport=typeOfChair.find('input:checked').data().transport1;
//transport?
if (  $('#transportOfChair').is(':checked')){
  transport=20;
}
else{
  transport=0;
}


price=parseInt(color)+parseInt(type)+parseInt(material)+parseInt(transport);
priceDisplay.text(price+'zl');


priceDisplay.text(price+'zl');
priceOfTypeDisplay.text(type+'zl');
  if (typeof color !== 'undefined'){
priceOfColorDisplay.text(color+'zl');
}
if (typeof material !== 'undefined'){
priceOfMaterialDisplay.text(material+'zl');
}
if (typeof transport !== 'undefined'){
priceOfTransportDisplay.text(transport+'zl');
}
});

materialOfChair.on('change', function() {
nameDisplay1.text(typeOfChair.val());
nameDisplay2.text(colorOfChair.val());
nameDisplay3.text(materialOfChair.val());
var color=colorOfChair.find('option:selected').data().color1;
var type=typeOfChair.find('option:selected').data().type1;
var material=materialOfChair.find('option:selected').data().material1;
if ( $('#transportOfChair').is(':checked')){
  transport=20;
}
else{
  transport=0;
}

//transport?
console.log(material);
console.log(material+color+type);
price=parseInt(color)+parseInt(type)+parseInt(material)+parseInt(transport);
priceDisplay.text(price+'zl');
priceDisplay.text(price+'zl');
priceOfTypeDisplay.text(type+'zl');
  if (typeof color !== 'undefined'){
priceOfColorDisplay.text(color+'zl');
}
if (typeof material !== 'undefined'){
priceOfMaterialDisplay.text(material+'zl');
}
if (typeof transport !== 'undefined'){
priceOfTransportDisplay.text(transport+'zl');
}
});


transportOfChair.on('change', function() {
nameDisplay1.text(typeOfChair.val());
nameDisplay2.text(colorOfChair.val());
nameDisplay3.text(materialOfChair.val());
var color=colorOfChair.find('option:selected').data().color1;
var type=typeOfChair.find('option:selected').data().type1;
var material=materialOfChair.find('option:selected').data().material1;
if ( $('#transportOfChair').is(':checked')){
  transport=20;
}
else{
  transport=0;
}

//transport?
console.log(material);
console.log(material+color+type);
price=parseInt(color)+parseInt(type)+parseInt(material)+parseInt(transport);
priceDisplay.text(price+'zl');

priceOfTypeDisplay.text(type+'zl');
  if (typeof color !== 'undefined'){
priceOfColorDisplay.text(color+'zl');
}
if (typeof material !== 'undefined'){
priceOfMaterialDisplay.text(material+'zl');
}
if (typeof transport !== 'undefined'){
priceOfTransportDisplay.text(transport+'zl');
}
});

});

function dosth(){
  if($(this).val() == "") {
    $(this).addClass("empty");
  } else {
    $(this).removeClass("empty").children('.placeholder').remove();
  }
};


$("select").on('change', dosth);
