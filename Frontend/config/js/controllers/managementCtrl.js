app.controller('managementCtrl',function($scope,$cookies,loginService,$location){
  if($location.url() === "/management"){
      $(".header").css({"background":"#354052"});
      $("button.navbtn1").css({"color":"white"});
      $("button.navbtn").css({"color":"white"});
  }
       console.log($cookies.get("accessToken")+" in management"+ "logged in"+$cookies.get("successLogin"));
     console.log($location.url());
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
