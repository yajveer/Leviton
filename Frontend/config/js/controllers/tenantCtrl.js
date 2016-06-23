app.controller('tenantCtrl',function($scope,$interval,$cookies,$location,$http){
  console.log($location.url());
  $('#paid').click(function(){$('#unpaid').css({'opacity':'0.4'});$('#paid').css({'opacity':'1'});});
  $('#unpaid').click(function(){$('#paid').css({'opacity':'0.4'});$('#unpaid').css({'opacity':'1'});});

  $('#daily').click(function(){$('#monthly').css({'opacity':'0.4'});$('#daily').css({'opacity':'1'});});
  $('#monthly').click(function(){$('#daily').css({'opacity':'0.4'});$('#monthly').css({'opacity':'1'});});
  //unbilled usasge graph data starts
  $cookies.put("myname","suraj");
  console.log($cookies.get("myname"));
  var addTenant = AmCharts.makeChart("addTenant", {
"type": "serial",
"theme": "light",
"marginTop":0,
"marginRight":10,
"dataProvider": [
 {
   "energy":"1",
   "value":"120"
 },  {
     "energy":"2 ",
     "value":"10"
   },
   {
     "energy":"3",
     "value":"180"
   },{
     "energy":"4",
     "value":"190"
   },  {
       "energy":"5",
       "value":"140"
     },
     {
       "energy":"6",
       "value":"100"
     }

],
"valueAxes": [{
 "axisAlpha": 0,
 "position": "left",
 "labelFunction": function(value) {
      return  value + " KwH  ";
    }
}],
"graphs": [{
 "id":"g1",
 "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]] KwH</span></b>",
 "bullet": "round",
 "bulletSize": 8,
 "lineColor": "#d1655d",
 "lineThickness": 2,
 "negativeLineColor": "#637bb6",
 "type": "smoothedLine",
 "valueField": "value"
}],
"chartScrollbar": {
 "graph":"g1",
 "gridAlpha":0,
 "color":"#888888",
 "scrollbarHeight":25,
 "backgroundAlpha":0,
 "selectedBackgroundAlpha":0.1,
 "selectedBackgroundColor":"#888888",
 "graphFillAlpha":0,
 "autoGridCount":true,
 "selectedGraphFillAlpha":0,
 "graphLineAlpha":0.2,
 "graphLineColor":"#c2c2c2",
 "selectedGraphLineColor":"#888888",
 "selectedGraphLineAlpha":1

},
"chartCursor": {

 "cursorAlpha": 0,
 "valueLineEnabled":false,
 "valueLineBalloonEnabled":false,
 "valueLineAlpha":0.5,
 "fullWidth":true
},

"categoryField": "energy",
"categoryAxis": {

 "minorGridAlpha": 0.1,
 "minorGridEnabled": true
},
"export": {
 "enabled": true
}
});

addTenant.addListener("rendered", zoomChart);
if(addTenant.zoomChart){
addTenant.zoomChart();
}

function zoomChart(){
addTenant.zoomToIndexes(Math.round(addTenant.dataProvider.length * 0.4), Math.round(addTenant.dataProvider.length * 0.55));
}
    //unbilled usage graph data ends
    //cost analysis of tenant starts
    var cost = AmCharts.makeChart("areaChart1", {
        "type": "serial",
        "theme": "light",

        "dataProvider": [
        {  "energy" : "1",
          "value" :"120"
        },
        {  "energy" : "2",
          "value" :"250"
        },
        {  "energy" : "3",
          "value" :"350"
        },
        {  "energy" : "4",
          "value" :"40"
        },
        {  "energy" : "5",
          "value" :"160"
        },
        {  "energy" : "6",
          "value" :"600"
        }
        ],
        "balloon": {
            "cornerRadius": 6,
            "horizontalPadding": 15,
            "verticalPadding": 10
        },
        "valueAxes": [{

            "axisAlpha": 0,
            "labelFunction": function(value) {
                 return  "$ "+value ;
               }
        }],
        "graphs": [{
          "id":"g2",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>$ [[value]]</span></b>",
            "bullet": "circle",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 1,
            "fillAlphas": 0.3,
            "fillColorsField": "red",
            "legendValueText": "[[value]]",
            "lineColorField": "lineColor",

            "valueField": "value"
        }],
        "chartScrollbar": {
          "graph":"g2",
          "gridAlpha":0,
          "color":"#888888",
          "scrollbarHeight":10,
          "backgroundAlpha":0,
          "selectedBackgroundAlpha":0.1,
          "selectedBackgroundColor":"#888888",
          "graphFillAlpha":0,
          "autoGridCount":true,
          "selectedGraphFillAlpha":0,
          "graphLineAlpha":0.2,
          "graphLineColor":"#c2c2c2",
          "selectedGraphLineColor":"#888888",
          "selectedGraphLineAlpha":1
        },
        "chartCursor": {

            "cursorAlpha": 0,
            "fullWidth": true
        },

        "categoryField": "energy",
        "categoryAxis": {


            "autoGridCount": false,
            "axisColor": "#555555",
            "gridAlpha": 0,
            "gridCount": 50
        },
        "export": {
            "enabled": true
        }
    });



    cost.addListener("rendered", zoomChart);

    function zoomChart() {
cost.zoomToIndexes(Math.round(cost.dataProvider.length * 0.4), Math.round(cost.dataProvider.length * 0.55));
    }
      //cost analysis of tenant ends
      //energy analysis of tenant starts
      var DataForMonth = {};
      var d = new Date();
      DataForMonth.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
      DataForMonth.accestoken =$cookies.get("accessToken");
      DataForMonth.reqtype = "MONTHLY";
      $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydatemonthly",DataForMonth).success(function(data){
          /*success starts*/
          console.log(data);
          var energy = AmCharts.makeChart("areaChart2", {
              "type": "serial",
              "theme": "light",

              "dataProvider": data.out,
              "balloon": {
                  "cornerRadius": 6,
                  "horizontalPadding": 15,
                  "verticalPadding": 10
              },
              "valueAxes": [{

                  "axisAlpha": 0,
                  "labelFunction": function(value) {
                       return  value+" KwH" ;
                     }
              }],
              "graphs": [{
                "id":"g3",
                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]] KwH</span></b>",
                  "bullet": "circle",
                  "bulletBorderAlpha": 1,
                  "bulletBorderThickness": 1,
                  "fillAlphas": 0.3,
                  "fillColorsField": "red",
                  "legendValueText": "[[value]]",
                  "lineColorField": "lineColor",

                  "valueField": "value"
              }],
              "chartScrollbar": {
                "graph":"g3",
                "gridAlpha":0,
                "color":"#888888",
                "scrollbarHeight":10,
                "backgroundAlpha":0,
                "selectedBackgroundAlpha":0.1,
                "selectedBackgroundColor":"#888888",
                "graphFillAlpha":0,
                "autoGridCount":true,
                "selectedGraphFillAlpha":0,
                "graphLineAlpha":0.2,
                "graphLineColor":"#c2c2c2",
                "selectedGraphLineColor":"#888888",
                "selectedGraphLineAlpha":1
              },
              "chartCursor": {

                  "cursorAlpha": 0,
                  "fullWidth": true
              },

              "categoryField": "date",
              "categoryAxis": {


                  "autoGridCount": false,
                  "axisColor": "#555555",
                  "gridAlpha": 0,
                  "gridCount": 50
              },
              "export": {
                  "enabled": true
              }
          });
          energy.addListener("rendered", zoomChart);

          function zoomChart() {
        energy.zoomToIndexes(Math.round(energy.dataProvider.length * 0.4), Math.round(energy.dataProvider.length * 0.55));
          }
        /*success ends*/
      }).error(function(data){

      });

        var gaugeChart = AmCharts.makeChart( "gauge", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 130,
    "bands": [ {
      "color": "#84b761",
      "endValue": 300,
      "startValue": 0
    }, {
      "color": "#fdd400",
      "endValue": 500,
      "startValue": 300
    }, {
      "color": "#cc4748",
      "endValue": 800,
      "innerRadius": "95%",
      "startValue": 300
    } ],
    "bottomText": "0 kwH",
    "bottomTextYOffset": -20,
    "endValue": 900
  } ],
  "arrows": [ {

  } ],
  "export": {
    "enabled": true
  }
} );

$http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydatemonthly",DataForMonth).success(function(data){
  console.log("gauge enterd");
  console.log(data);
                $scope.total = parseInt(data.total);
  if ( gaugeChart ) {
    if ( gaugeChart.arrows ) {
      if ( gaugeChart.arrows[ 0 ] ) {
        if ( gaugeChart.arrows[ 0 ].setValue ) {
          gaugeChart.arrows[ 0 ].setValue( parseInt(data.total) );
          gaugeChart.axes[ 0 ].setBottomText( parseInt(data.total) + " kwh" );
        }
      }
    }
  }
    console.log("gauge enterd");
}).error(function(data){
  console.log("error gauge enterd");
  console.log(data);
    console.log(" error gauge enterd");
});
        //code for gauge ends
        //code for progress bar starts
             var bar = $('#bar');
             var barpercenttext = $('#barpercenttext');
          $interval(function(){
            var random = Math.floor(Math.random()*100);
            //console.log(random);
            if(random > 100){
                bar.css({'width':'100%'});
                  barpercenttext.html("100%");
                  // console.log("bar updated"+$('#bar').width());
            }else{
  //                 console.log(random);
              bar.css({'width':random+"%"});
              barpercenttext.html(random+"%");
              //   console.log("bar updated"+$('#bar').width());
            }
          },10000);
        //code for progress bar ends
/********************* code for add tenant starts *********************************************/
$scope.meter = {};
var globetid  = '';
$scope.meterData = {};

$scope.addTenant = function(tenant){
  $("#TenantAdd").html("Saving...");
  console.log(tenant);
   $cookies.put("tname1",tenant.tennantname);
    $scope.tname =   $cookies.get("tname1");
    console.log( $cookies.get("tname"));
    $cookies.put("taccount1",tenant.accountno);
    console.log( $cookies.get("taccount1"));
     $scope.taccount =   $cookies.get("taccount");
tenant.accesstoken = $cookies.get("accessToken");
$http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/addTennant",tenant).success(function(data){
         console.log(data);

         if(data.success === "true"){
           $("#TenantAdd").html("Saved");
            $scope.TenantAdd = (data.success === "true") ? true : false;
            globetid = data.tennantid;
                $cookies.put("tid1",data.tennantid);
               $scope.tid  =  $cookies.get("tid1");
               console.log($cookies.get("tid"));
            /*following code runs for getting list of meters starts*/
            dataTosendMeter = {"acesstoken":$cookies.get("accessToken"),"tennantid":data.tennantid};
            $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/listofmeters",dataTosendMeter).success(function(data){
              console.log(data.m[0]);
              if(data.success === "true"){

                    $cookies.put("mid1",data.m[0].meterid);

                    $scope.tmeter =  $cookies.get("mid1");
                      console.log($cookies.get("mid1"));
                     if(data.m[0].assigned === "false"){
                          $scope.meter = data.m[0];

                          $scope.meter.startdate = tenant.startdate;
                          $scope.meter.endtdate = tenant.enddate;
                          $(".tenanttabledata").css({"display":"block"});
                            $(".metermessage").css({"display":"none"});
                     }else{
                         $(".tenanttabledata").css({"display":"none"});
                           $(".metermessage").css({"display":"block"});
                     }
                 $scope.meterData.meterid = data.m[0].meterid;
                 $scope.meterData.tennantid = globetid;
                 $scope.meterData.accesstoken = $cookies.get("accessToken");
                console.log(  $scope.meterData);
              }

            }).error(function(data){
               console.log(data);
            });
            /*above code runs for getting list of meters starts*/
         }
        }).error(function(data){
         console.log(data);
         });
console.log("add tenant called");
//console.log(tenant);
}
/******************** code for add tenant ends    ********************************************/
$scope.tenantcheckbox1 = {
  value1 : false
};
$scope.assignMeter =  function(data){
 $("#assign").html("Select a Meter");
  console.log(data);
  console.log($scope.tenantcheckbox1.value1);
     if($scope.tenantcheckbox1.value1){
       $("#assign").html("Assigning...");
       $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/assignmeters",data).success(function(data){
          console.log(data);
          console.log("meter data sent");
          if(data.success === "true"){
            $("#assign").html("Meter Assigned Successfully.");
             $location.path("/tenant");
          }
       }).error(function(data){
          console.log(data);
       });
     }
}
/***************** code for tenant list starts ********************************************/
          //  tenantService.tenantList();

          $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/listoftennat",{"accesstoken":$cookies.get("accessToken")}).success(function(data){
                               //            console.log(data.responses);
                               //            console.log("above object is called in the tenantservice api");
                                            $scope.tenantList = data.responses;

                                            $(".tenantMessage").css({"display":"none"});
                                             }).error(function(data){
                                               //    console.log(data);

                                                               });

/****************** code for tenant list ends **********************************************/
/****************** code for delete tenant list starts **********************************************/
  $(".deletePopupContainer").click(function(){
    $(this).hide();
  });

$scope.deleteTenant = function(data){
  $(".deletePopupContainer").fadeIn();
  $(".deleteContent").addClass("animated bounceInDown");
  $scope.customeDemo = function(deletedata){
  if(deletedata === "true"){
  $(".deletePopupContainer").hide();
  console.log(data.accesstoken+""+data.tennantid);
    var deleteapidata ={};
         deleteapidata.acesstoken = data.accesstoken;
         deleteapidata.tennantid = data.tennantid;
         $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/deleteTennant",deleteapidata).success(function(data){
         console.log(data);
           console.log("data deleted success fully");
           console.log(data);
           if(data.success === "true"){
           $("#tenant"+data.tennantid).css({"background":"#F2F27F"}).addClass("animated rotateOutDownLeft").fadeOut(1000);
           }
         }).error(function(data){
           console.log(data);
         });
  }else{
      $(".deletePopupContainer").hide();
  }
  }



}
//$scope.Tenant.tennantname = "suraj";
/****************** code for delete tenant list ends **********************************************/
/****************** code for edit tenant list starts **********************************************/

$scope.editTenant = function(data){
  $cookies.put("tuid",data.tennantid);
console.log(data)
$location.path("/editTenant/"+$cookies.get("accessToken")+"/"+data.tennantid);
console.log("redirect successfull");
}
/****************** code for edit tenant list ends **********************************************/
console.log($cookies.getAll());
$scope.customeDemo = function(data){
if(data === "true"){
  console.log("delete");
}else{
  console.log("cancel");
}
}
});
