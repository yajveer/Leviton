app.factory('tenantService',function($rootScope,$http,$q,$cookies,$location){
                         var deffered = $q.defer();
                         var deletedeffered = $q.defer();
                         var editdefferd = $q.defer();
                         var retrivedefferd = $q.defer();
             return   {

                   addTenant : function(tenant){
                               $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/addTennant",tenant).success(function(data){
                                        console.log(data);
                                       }).error(function(data){
                                        console.log(data);
                                        });
                          console.log("add tenant called");

                                              },
                          editTenant : function(tenant){
                $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/editTennant",tenant).success(function(data){
                                                                   console.log(data);
                                                                  }).error(function(data){
                                                                   console.log(data);
                                                                   });
                                                     console.log("add tenant called");

                                                   },
                    tenantList : function(){
           $http.post("http:/52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/listoftennat",{"accesstoken":$cookies.get("accessToken")}).success(function(data){
                                //            console.log(data.responses);
                                //            console.log("above object is called in the tenantservice api");
                                            deffered.resolve(data);
                                              }).error(function(data){
                                                //    console.log(data);
                                            deffered.resolve(data);
                                                                });

                    },
                    getTenantListData : function(){
                                      return  deffered.promise;
                           },
                    deleteTenant : function(data){
                  //    console.log(data);
                  //    console.log("insid sending function of delete");

               $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/deleteTennant",data).success(function(data){
                 deletedeffered.resolve(data);
                 console.log("data deleted success fully");
                 console.log(data);
               }).error(function(data){
                 deletedeffered.resolve(data);
               });
             },
             getDeletedData : function(){
               return deletedeffered.promise;
             },
            editTenant : function(data){
             console.log("inside edit tenant in tenantService");
             console.log(data)
              $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/editTennant",data).success(function(data){


                   console.log("successfull tenant edit");
                    console.log(data);
                    console.log("redirect");
                      $location.path("/editTenant/"+$cookies.get("accessToken")+"/"+data.tennantid);
          window.location.href = "http://52.220.4.26:8080/#/editTenant/"+$cookies.get("accessToken")+"/"+data.tennantid;
                    console.log("successfull tenant edit");
              }).error(function(data){

                    console.log("unsuccessfull tenant edit");
                    console.log(data);
              });
            },

            retrieveTenant : function(data){
            //  console.log("retrive tenant ::: function");
            //  console.log(data);
              $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/retrieveTennant",data).success(function(data){
            //    console.log("entered retrive::::success");
            //    console.log(data);
                retrivedefferd.resolve(data);
              }).error(function(data){
              //  console.log("entered retrive::::error");
              //  console.log(data);
                retrivedefferd.resolve(data);
              });
            },
            getRetrieveTenantData : function(){
              return  retrivedefferd.promise;
            //  console.log("inside retrive :::::: promise");
            }

                       };

});
