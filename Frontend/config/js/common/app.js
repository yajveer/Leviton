
//  angular app starts
var app = angular.module('leviton',['ngRoute','angular-chartist','ngCookies']);
app.filter('urlEncode', [function() {
  return window.encodeURIComponent;
}]);




//for setting routing starts
app.config(function($routeProvider,$locationProvider){

  $routeProvider.when('/login',{
            templateUrl :'partials/login.html',
            controller:'loginCtrl',
           resolve : {
           check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/management");
             }else{

                $location.path("/login");
             }
      }

    }

  })
  .when('/dashboard',{
    templateUrl:'partials/dashboard.html',
    controller :'dashboardCtrl',
    resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/dashboard");
             }else{
                 $location.path("/dashboard");
               /* $location.path("/login"); */
             }
      }

    }
  })
  .when('/tenant',{
    templateUrl:'partials/tenantmanagement.html',
    controller:'tenantCtrl',
    resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/tenant");
             }else{

                $location.path("/login");
             }
      }

    }
  })
  .when('/editTenant/:token/:tid',{
    templateUrl:'partials/editTenant.html',
    controller:'editTenantCtrl',
/*    resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){
               console.log(123+"tenantdetail");
               $location.path("/editTenant");
             }else{
                console.log(567+"unsuccessfull");
                $location.path("/login");
             }
      }

    }*/

  })

  .when('/addTenant',{
    templateUrl:'partials/addTenant.html',
    controller:'tenantCtrl',
    resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/addTenant");
             }else{

                $location.path("/login");
             }
      }

    }
  })
  .when('/tenantdetail',{
    templateUrl:'partials/tenantdetail.html',
    controller:'tenantCtrl',
    /*resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/tenantdetail");
             }else{

                $location.path("/login");
             }
      }

    } */
  })
  .when('/tenantBill',{
    templateUrl:'partials/tenantbill.html',
    controller:'tenantbillCtrl',
    resolve : {
      check : function(loginService,$location){
             if(loginService.isLoggedIn()){

               $location.path("/tenantBill");
             }else{

                $location.path("/login");
             }
      }

    }
  })
 .when('/propertymanagement',{
      templateUrl:'partials/propertymanagement.html',
      controller:'propertyCtrl',
      resolve : {
        check : function(loginService,$location){
               if(loginService.isLoggedIn()){

                 $location.path("/propertymanagement");
               }else{

                  $location.path("/login");
               }
        }

      }
    }).when('/addProperty',{
      templateUrl:'partials/addProperty.html',
      controller:'propertyCtrl',
      resolve : {
        check : function(loginService,$location){
               if(loginService.isLoggedIn()){

                 $location.path("/addProperty");
               }else{

                  $location.path("/login");
               }
        }

      }
    }).when('/editProperty',{
      templateUrl:'partials/editProperty.html',
      controller:'propertyCtrl',
      resolve : {
        check : function(loginService,$location){
               if(loginService.isLoggedIn()){

                 $location.path("/editProperty");
               }else{

                  $location.path("/login");
               }
        }

      }
    })
  .when('/management',{
            templateUrl :'partials/management.html',
            controller :'managementCtrl',
            resolve : {
              check : function(loginService,$location){
                     if(loginService.isLoggedIn()){

                       $location.path("/management");
                     }else{

                        $location.path("/login");
                     }
              }

            }
  }).otherwise({redirectTo:'/management'});

});
//for setting routing ends



app.run(function($rootScope,$location,$cookies){
    //variable to setup the base url

  $rootScope.base = "http://52.220.4.26:8080/"
              if($cookies.get("successLogin")){
                        $location.path($location.url());

                  }else{
                        $location.path("/login");
                  }
  $rootScope.url = $location.url();
  console.log($rootScope.url );
   $rootScope.$watch('url',function(newValue,oldValue){
     console.log(newValue);
 });
});


//  angular app ends
