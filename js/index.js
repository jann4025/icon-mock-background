var clr = {
  h: Number($('#hue').val()),
  s: Number($('#sat').val()),
  l: Number($('#lig').val()),
}

br = String( Number($('#border').val() / 10 ) ) + 'vh';

function updateUI(){
  var centerColor = 'hsl('+clr.h+','+clr.s+'%,'+clr.l+'%)';
  var centerShadow = '0px 1vh 3vh hsla('+(clr.h-30)+','+(clr.s*0.7)+'%,'+(clr.l*0.5)+'%, 0.3)';
  $('.center').css('background-color', centerColor);
  $('.center').css('box-shadow', centerShadow);
  $('.center').css('border-radius', br);

  var backDark = 'hsl('+(clr.h-30)+','+(clr.s*0.8)+'%,'+(clr.l*0.9)+'%)';
  var backLight = 'hsl('+(clr.h+30)+','+(clr.s*1.2)+'%,'+(clr.l*1.1)+'%)';
  var backGrad = 'linear-gradient( 35deg, '+backDark+', '+backLight+' )';
  $('.back').css('background', backGrad);
}

$('#hue').on('mousemove change', function(){
  clr.h = Number($('#hue').val());
  updateUI();
})
$('#sat').on('mousemove change', function(){
  clr.s = Number($('#sat').val());
  updateUI();
})
$('#lig').on('mousemove change', function(){
  clr.l = Number($('#lig').val());
  updateUI();
})
$('#border').on('mousemove change', function(){
  br = String( Number($('#border').val() / 10 ) ) + 'vh';
  updateUI();
})

$('#hide-controls').on('click', function(){
  $('.pair, #hide-controls').fadeOut();
  $('.center').addClass('faded');
})
$('.center').on('click', function(){
  $('.pair, #hide-controls').fadeIn();
  $('.center').removeClass('faded');
})


$(document).ready(function(){
  var direction = -1;
  var ease = 1.01;
  var testSlide = setInterval(function(){
    clr.h += direction;
    direction *= ease;
    direction
    $('#hue').val( clr.h );
    if (clr.h <= 180){
      ease = 0.99;
    }
    if (clr.h <= 0){
      clearInterval(testSlide);
    }
    updateUI();
  },20);

})
