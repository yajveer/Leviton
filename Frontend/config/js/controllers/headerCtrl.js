app.controller('headerCtrl',function($scope,$cookies,$location){
  console.log($location.url());
  if($location.url() === "/management"){
      $(".header").css({"background":"#354052"});
  }
  /********************* code for controlling sidenav animation starts ******************************************/
$('.menuLogo').click(function(){
    ($('div.sidenav').css('display') === "block") ? $('div.sidenav').css('display','none') : $('div.sidenav').css('display','block');

    });
    $('.menuLogo').click(function(){($('.sidenav').css('display') === "block") ? $('.dashboardContentHolder').css({'padding':'15px 0 0 193px'}) :$('.dashboardContentHolder').css({'padding':'15px 0 0 0'});});
 /******************** code for controlling sidenav animation ends     *******************************************/

      $scope.logout = function(){
              console.log("logged out");
                $cookies.remove("accessToken");
                $cookies.remove("successLogin");
                  if($cookies.get("accessToken") !== "" && $cookies.get("successLogin") !== ""){
                           $cookies.remove("accessToken");
                           $cookies.remove("successLogin");
                           $location.path("/login");
                           console.log("removed");
                            }
                }

  });
