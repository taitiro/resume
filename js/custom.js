$(document).ready(function() {
  var timer = undefined;
  function diaplayElement(num){
    var str = $('#profile'+num+'-title').text(), progress = 0;
    clearInterval(timer);
    $('.display-title').hide();
    $('.display-content').hide('slow');
    $('.display-title').removeClass('display-title');
    $('.display-content').removeClass('display-content');
    $('.active').removeClass('active');
    $('#profile'+num+'-title').addClass('display-title');
    $('#profile'+num).addClass('display-content');
    $('a[href=#profile'+num+']').addClass('active');
    $('#profile'+num).show('slow');
    $('#profile'+num+'-title').text('');
    $('#profile'+num+'-title').show();
    timer = setInterval(function() {
      $('#profile'+num+'-title').text(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
      if (progress > str.length){
        clearInterval(timer);
      }
    }, 200);
  }
  
  $('a[href=#profile1]').click(function(){
    if(!($(this).is('.active'))){
      diaplayElement(1);
    }
    return false;
  });
  
  $('a[href=#profile2]').click(function(){
    if(!($(this).is('.active'))){
      diaplayElement(2);
    }
    return false;
  });
  $('a[href=#profile3]').click(function(){
    if(!($(this).is('.active'))){
      diaplayElement(3);
    }
    return false;
  });
  $('a[href=#profile4]').click(function(){
    if(!($(this).is('.active'))){
      diaplayElement(4);
    }
    return false;
  });
  $('a[href=#profile5]').click(function(){
    if(!($(this).is('.active'))){
      diaplayElement(5);
    }
    return false;
  });
  
});