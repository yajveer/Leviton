app.controller('editTenantCtrl',function($scope,$rootScope,$q,$cookies,$routeParams,$interval,$http,tenantService,$location){
        console.log($routeParams.token+""+$routeParams.tid);
          console.log($location.url());
          //  $scope.Tenant =  {tennantname : $routeParams.token};
          //  console.log($scope.Tenant.tennantname);
          var tenantData = {};
          $scope.TenantE = {};
          tenantData.acesstoken = $routeParams.token;
          tenantData.tennantid = $routeParams.tid;
          $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/retrieveTennant",tenantData).success(function(data){
        //    console.log("entered retrive::::success");
        //    console.log(data);
                $scope.TenantE    =    data;
          }).error(function(data){
          //  console.log("entered retrive::::error");
          console.log(data);

          });
          console.log($scope.TenantE);



                      console.log(tenantData);



          //  $scope.$watch('tenantData',function(n,o){
          //              console.log("new");
          //              console.log(n);
          //              console.log("old");
          //              console.log(o);
          //  },true);
            $scope.addTenant = function(data){
             $("#save").html("Updating...");
            dataTosend = {};
            dataTosend.accesstoken = $cookies.get("accessToken");
            dataTosend.billinginterval = data.billinginterval;
            dataTosend.tennantname = data.tennantname;
            dataTosend.nextbilldate = data.nextbilldate;
            dataTosend.enddate = data.enddate;
            dataTosend.lastbilldate = data.lastbilldate;
            dataTosend.displayname = data.displayname;
            dataTosend.accountno = data.accountno;
            dataTosend.startdate = data.startdate;
            dataTosend.tennantid = data.tennantid;
            dataTosend.address = data.address;
            console.log(dataTosend);
          //  tenantService.addTenant(dataTosend);
          $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/editTennant",dataTosend).success(function(data){
                console.log("successfull tenant edit");
                console.log(data);
                 $("#save").html("Updated");
                $location.path("/tenant");
                console.log("successfull tenant edit");
          }).error(function(data){
                console.log("unsuccessfull tenant edit");
                console.log(data);
          });
    }
    /**********************code for list of meters starts******************************/
      $scope.meterAssignData  = {};

    $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/listofmeters",tenantData).success(function(data){
              console.log(data);
              $scope.meterAssignData.meterid = data.m[0].meterid;
              $scope.meterAssignData.tennantid = $routeParams.tid;
              $scope.meterAssignData.accesstoken = $cookies.get("accessToken");

              if(data.m[0].assigned === "false"){
                  $scope.tenantcheckbox2.value1 = data.success;
                  $scope.meterData = data.m[0];

                  $(".tenanttabledata").css({"display":"block"});
                $(".metermessage").css({"display":"none"});
              }else{
                $(".tenanttabledata").css({"display":"none"});
                $(".metermessage").css({"display":"block"});
                $location.path("/tenant");
              }
    }).error(function(data){
              console.log(data);
    });
    $scope.tenantcheckbox2 = {
      value2 : false
    };
    $scope.assignMeter =  function(data){
     $("#assign1").html("Select a Meter");
      console.log(data);
      console.log($scope.tenantcheckbox2.value2);
         if($scope.tenantcheckbox2.value2){
           $("#assign1").html("Assigning...");
           $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/assignmeters",data).success(function(data){
              console.log(data);
              console.log("meter data sent");
              if(data.success === "true"){
                $("#assign1").html("Meter Assigned Successfully.");
                 $location.path("/tenant");
              }
           }).error(function(data){
              console.log(data);
           });
         }
    }
    /**********************code for list of meters starts******************************/
});
