app.controller('sidenavCtrl',function($scope,$location){
  console.log($location.url());
  if($location.url() === "/dashboard"){
    $("#dashboard").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('#dashboard > span >img').attr('src',base+'images/dashboard/wdashboard.png');
  }
  else if ($location.url() === "/propertymanagement") {
    $("#propertymanagement").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('#propertymanagement > span >img').attr('src',base+'images/dashboard/wdashboard.png');
  }else if ($location.url() === "/tenant") {
    $(".tenanticon").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $( '.tenanticon > span >img').attr('src',base+'images/dashboard/whitetenantmgnt.png');
  }else if ($location.url() === "/tenantBill") {
    $(".tenantbill").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.tenantbill > span >img').attr('src',base+'images/dashboard/whitetenantbill.png');
  }else if ($location.url() === "/addTenant") {
    $(".tenanticon").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $( '.tenanticon > span >img').attr('src',base+'images/dashboard/whitetenantmgnt.png');
  }else if ($location.url() === "/addTenant") {
    $(".tenanticon").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $( '.tenanticon > span >img').attr('src',base+'images/dashboard/whitetenantmgnt.png');
  }else if ($location.url().indexOf("/editTenant") !== -1) {
    $(".tenanticon").css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $( '.tenanticon > span >img').attr('src',base+'images/dashboard/whitetenantmgnt.png');
  }
var base = "http://52.220.4.26:8080/";
$("a[href='http://www.amcharts.com/javascript-charts/']").css('visibility','hidden')
  $('.dashboard').click(function(){
  $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.dashboard > span >img').attr('src',base+'images/dashboard/wdashboard.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
      $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
        $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
          $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
            $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
            $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
              $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.tenanticon').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $( '.tenanticon > span >img').attr('src',base+'images/dashboard/whitetenantmgnt.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
        $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
          $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
            $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
            $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
              $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.energyanalysis').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.energyanalysis > span >img').attr('src',base+'images/dashboard/whiteenergy.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
          $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
            $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
            $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
              $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.costanalysis').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.costanalysis > span >img').attr('src',base+'images/dashboard/whitecost.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
  $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
            $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
            $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
              $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.tenantbill').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.tenantbill > span >img').attr('src',base+'images/dashboard/whitetenantbill.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
      $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
            $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
              $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.alarms').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.alarms > span >img').attr('src',base+'images/dashboard/whitealarm.png');
    $('.tenantbill > span >img').attr('src',base+'images/dashboard/whitetenantbill.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
      $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
        $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
              $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.meter-reading').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.meter-reading > span >img').attr('src',base+'images/dashboard/whitemeter.png');
    $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
    $('.tenantbill > span >img').attr('src',base+'images/dashboard/whitetenantbill.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
      $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
        $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');
                $('.reports').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
                  $('.reports > span > img').attr('src',base+'images/dashboard/reports.png');
  });

  $('.reports').click(function(){
    $(".sidenav").css({"display":"none"});
    $(this).css({'border-left':'4px solid #8cc63e','background':'#2c3543','color':'white'});
    $('.reports > span >img').attr('src',base+'images/dashboard/whitereport.png');
    $('.meter-reading').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.meter-reading > span > img').attr('src',base+'images/dashboard/meter-reading.png');
    $('.alarms').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.alarms > span > img').attr('src',base+'images/dashboard/alarms.png');
    $('.tenantbill > span >img').attr('src',base+'images/dashboard/whitetenantbill.png');
    $('.tenanticon').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.tenanticon > span > img').attr('src',base+'images/dashboard/tenanticon.png');
    $('.dashboard > span >img').attr('src',base+'images/dashboard/dashboard.png');
    $('.dashboard').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
    $('.energyanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
      $('.energyanalysis > span > img').attr('src',base+'images/dashboard/energyanalysis.png');
      $('.costanalysis').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
        $('.costanalysis > span > img').attr('src',base+'images/dashboard/costanalysis.png');
        $('.tenantbill').css({'border-left':'4px solid transparent','color':'#a0abbf','background':'transparent'});
          $('.tenantbill > span > img').attr('src',base+'images/dashboard/tenantbill.png');

  });
});
