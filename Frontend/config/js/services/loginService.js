
app.factory("loginService",function($rootScope,$http,$cookies,$q,$location){
//    var deffered = $q.defer();
    var check;
  return {
    requestlogin : function(user){

//      console.log(check);
        $http({
                method: "POST",
                url : "http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/addLogin",
                data:user,
                headers : {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*"

                }

        }).success(function(data){
  //                deffered.resolve(data);
                  check = data.success;
                  console.log(data);
                  $cookies.put("accessToken",data.accessRequest);
                  $cookies.put("successLogin",data.success);

                  console.log(check);
                   console.log($cookies.get("accessToken")+" "+$cookies.get("successLogin"));
                  $location.path("/management");
        }).error(function(data){
    //            deffered.resolve(data);
        });
    //  console.log(user.username+" "+user.password+" "+user.type);
  },
  getData : function(){
    return deffered.promise;
  },
  isLoggedIn : function(){
   return    $cookies.get("successLogin") === "true" ? true : false;
      console.log("logged in called"+check);
      console.log($cookies.get("accessToken"));
  }

  };
});
