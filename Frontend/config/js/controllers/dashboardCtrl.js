app.controller('dashboardCtrl',function($scope,$interval,$timeout,$cookies,$http,$location){

console.log($location.url());
//to handle refresh icon and day button animation  in energy section starts
$('img.energy-refresh-icon').click(function(){$(this).addClass('refresh');});
$('#Energyday1').click(function(){$('#Energyday2').css({'opacity':'0.4'});$('#Energyday1').css({'opacity':'1'});});
$('#Energyday2').click(function(){$('#Energyday1').css({'opacity':'0.4'});$('#Energyday2').css({'opacity':'1'});});
$('#Energyday1,#Energyday2').click(function(){
  $('img.energy-refresh-icon').addClass('refresh');

});
//to handle refresh icon and day button animation  in energy section ends

//to handle refresh icon and day button animation  in cost section starts
$('img.cost-refresh-icon').click(function(){$(this).addClass('refresh');});
$('#Costday1').click(function(){$('#Costday2').css({'opacity':'0.4'});$('#Costday1').css({'opacity':'1'});});
$('#Costday2').click(function(){$('#Costday1').css({'opacity':'0.4'});$('#Costday2').css({'opacity':'1'});});
$('#Costday1,#Costday2').click(function(){
  $('img.cost-refresh-icon').addClass('refresh');
});
//to handle refresh icon and day button animation  in cost section ends
//code for left circle starts
var el = document.getElementById('graph1');
var options = {
    percent:  el.getAttribute('data-percent') || 70,
    size: el.getAttribute('data-size') || 110,
    lineWidth: el.getAttribute('data-line') || 7,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
};
$interval(function(){
  var random1 = Math.floor(Math.random()*100);
  if(random1 > 100){
                options.percent = 70;
                drawCircle('#efefef', options.lineWidth, 100 / 100);
                drawCircle('#7BC143', options.lineWidth, options.percent / 100);
                span.textContent = options.percent + '%';
  }else{
            options.percent = 40;
          //  console.log(random1);
            span.textContent = options.percent + '%';
            drawCircle('#efefef', options.lineWidth, 100 / 100);
            drawCircle('#7BC143', options.lineWidth, options.percent / 100);
  }
},30000);
drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#7BC143', options.lineWidth, options.percent / 100);
//console.log(el);
//code for left circle ends

//code for right circle starts
var el2 = document.getElementById('graph2');
var options2 = {
    percent:  el2.getAttribute('data-percent') || 60,
    size: el2.getAttribute('data-size') || 110,
    lineWidth: el2.getAttribute('data-line') || 7,
    rotate: el2.getAttribute('data-rotate') || 0
}
var canvas2 = document.createElement('canvas');
var span2 = document.createElement('span');
span2.textContent = options2.percent + '%';
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas2);
}
var ctx2 = canvas2.getContext('2d');
canvas2.width = canvas2.height = options2.size;

el2.appendChild(span2);
el2.appendChild(canvas2);

ctx2.translate(options2.size / 2, options2.size / 2); // change center
ctx2.rotate((-1 / 2 + options2.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius2 = (options2.size - options2.lineWidth) / 2;

var drawCircle2 = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx2.beginPath();
		ctx2.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx2.strokeStyle = color;
        ctx2.lineCap = 'round'; // butt, round or square
		ctx2.lineWidth = lineWidth
		ctx2.stroke();
};
$interval(function(){
  var random2 = Math.floor(Math.random()*100);
  if(random2 > 100){
                options2.percent = 30;
                drawCircle2('#efefef', options2.lineWidth, 100 / 100);
                drawCircle2('#555555', options2.lineWidth, options2.percent / 100);
                span2.textContent = options2.percent + '%';
  }else{
            options2.percent = 20;
          //  console.log(random2);
            span2.textContent = options2.percent + '%';
            drawCircle2('#efefef', options2.lineWidth, 100 / 100);
            drawCircle2('#555555', options2.lineWidth, options2.percent / 100);
  }
},10000);
drawCircle2('#efefef', options2.lineWidth, 100 / 100);
drawCircle2('#555555', options2.lineWidth, options2.percent / 100);
//code for right circle ends


   //energy graph data starts
   $('#energy1').addClass('refresh');
   $('#cost1').addClass('refresh');

   var DataForWeek = {};
   var d = new Date();
   DataForWeek.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
   DataForWeek.accestoken =$cookies.get("accessToken");
   DataForWeek.reqtype = "WEEKLY";
   var chart;
   $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydateweekly",DataForWeek).success(function(data){
     console.log("weekly data recived");
     console.log(data);
     $('#energy1').removeClass('refresh');
     chart = AmCharts.makeChart("chart1", {
  "type": "serial",
  "theme": "light",
  "marginTop":0,
  "marginRight":10,
  "dataProvider": data.out,
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
    "scrollbarHeight":55,
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

  "categoryField": "date",
  "categoryAxis": {

    "minorGridAlpha": 0.1,
    "minorGridEnabled": true
  },
  "export": {
    "enabled": true
  }

  });
  chart.addListener("rendered", zoomChart);
  if(chart.zoomChart){
  chart.zoomChart();
  }

  function zoomChart(){
  chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
  }
     console.log("weekly data recived");
   }).error(function(data){
     console.log("weekly data error");
     console.log(data);
     console.log("weekly data error");
   });
   console.log(DataForWeek);

/******************code when weekly  button pressed starts**************************************/
$scope.week = function(){

  console.log("weekly clicked");
  var DataForWeek = {};
  var d = new Date();
  DataForWeek.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
  DataForWeek.accestoken =$cookies.get("accessToken");
  DataForWeek.reqtype = "WEEKLY";

  $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydateweekly",DataForWeek).success(function(data){
    console.log("weekly data recived");
    console.log(data);
      console.log("weekly data recieved");
       $('#energy1').removeClass('refresh');
    chart = AmCharts.makeChart("chart1", {
 "type": "serial",
 "theme": "light",
 "marginTop":0,
 "marginRight":10,
 "dataProvider": data.out,
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
   "scrollbarHeight":55,
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

 "categoryField": "date",
 "categoryAxis": {

   "minorGridAlpha": 0.1,
   "minorGridEnabled": true
 },
 "export": {
   "enabled": true
 }

 });
 chart.addListener("rendered", zoomChart);
 if(chart.zoomChart){
 chart.zoomChart();
 }

 function zoomChart(){
 chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
 }
    console.log("weekly data recived");
  }).error(function(data){
    console.log("weekly data error");
    console.log(data);
    console.log("weekly data error");
  });
  console.log(DataForWeek);
}
/******************code when weekly  button pressed ends**************************************/
/******************code when monthly  button pressed starts**************************************/
$scope.month = function(){

  console.log("weekly clicked");
  var DataForMonth = {};
  var d = new Date();
  DataForMonth.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
  DataForMonth.accestoken =$cookies.get("accessToken");
  DataForMonth.reqtype = "MONTHLY";

  $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydatemonthly",DataForMonth).success(function(data){
    console.log("monthly data recived");
    console.log(data);
     $('#energy1').removeClass('refresh');
      console.log("monthly data recieved");
    chart = AmCharts.makeChart("chart1", {
 "type": "serial",
 "theme": "light",
 "marginTop":0,
 "marginRight":10,
 "dataProvider": data.out,
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
   "scrollbarHeight":55,
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

 "categoryField": "date",
 "categoryAxis": {

   "minorGridAlpha": 0.1,
   "minorGridEnabled": true
 },
 "export": {
   "enabled": true
 }

 });
 chart.addListener("rendered", zoomChart);
 if(chart.zoomChart){
 chart.zoomChart();
 }

 function zoomChart(){
 chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
 }
    console.log("weekly data recived");
  }).error(function(data){
    console.log("weekly data error");
    console.log(data);
    console.log("weekly data error");
  });
  console.log(DataForWeek);
}
/******************code when monthly  button pressed ends**************************************/
  //energy graph data ends

  //cost graph data starts
  var chart2;
  $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydateweekly",DataForWeek).success(function(data){
    console.log("weekly data recived");
    console.log(data);
    $('#cost1').removeClass('refresh');

    chart2 = AmCharts.makeChart("chart2", {
 "type": "serial",
 "theme": "light",
 "marginTop":0,
 "marginRight":10,
 "dataProvider": [
   {
     "date":"2016-05-14",
     "value":"27"
   },
   {
     "date":"2016-05-13",
     "value":"51.2997"
   },
   {
     "date":"2016-05-12",
     "value":"62.5"
   },
   {
     "date":"2016-05-11",
     "value":"51.8997"
   },
   {
     "date":"2016-05-10",
     "value":"55.7997"
   },
   {
     "date":"2016-05-09",
     "value":"69.6"
   },
   {
     "date":"2016-05-08",
     "value":"26.09991"
   },
   {
     "date":"2016-05-07",
     "value":"49.5"
   }
 ],
 "valueAxes": [{
   "axisAlpha": 0,
   "position": "left",
   "labelFunction": function(value) {
        return  "$ "+value ;
      }
 }],
 "graphs": [{
   "id":"g1",
   "balloonText": "[[category]]<br><b><span style='font-size:14px;'>$ [[value*3]]</span></b>",
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
   "scrollbarHeight":55,
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

 "categoryField": "date",
 "categoryAxis": {

   "minorGridAlpha": 0.1,
   "minorGridEnabled": true
 },
 "export": {
   "enabled": true
 }

 });
 chart2.addListener("rendered", zoomChart1);
 if(chart2.zoomChart1){
 chart2.zoomChart1();
 }

 function zoomChart1(){
 chart2.zoomToIndexes(Math.round(chart2.dataProvider.length * 0.4), Math.round(chart2.dataProvider.length * 0.55));
 }
    console.log("weekly data recived");
  }).error(function(data){
    console.log("weekly data error");
    console.log(data);
    console.log("weekly data error");
  });
  console.log(DataForWeek);


  //cost graph data ends
  /******************code cost when weekly  button pressed starts**************************************/
  $scope.weekCost = function(){

    console.log("weekly cost clicked");
    var DataForWeek = {};
    var d = new Date();
    DataForWeek.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
    DataForWeek.accestoken =$cookies.get("accessToken");
    DataForWeek.reqtype = "WEEKLY";

    $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydateweekly",DataForWeek).success(function(data){
      console.log("weekly data cost recived");
      console.log(data);
        console.log("weekly data cost recieved");
         $('#cost1').removeClass('refresh');
      chart2 = AmCharts.makeChart("chart2", {
   "type": "serial",
   "theme": "light",
   "marginTop":0,
   "marginRight":10,
   "dataProvider": [
     {
       "date":"2016-05-14",
       "value":"27"
     },
     {
       "date":"2016-05-13",
       "value":"51.2997"
     },
     {
       "date":"2016-05-12",
       "value":"62.5"
     },
     {
       "date":"2016-05-11",
       "value":"51.8997"
     },
     {
       "date":"2016-05-10",
       "value":"55.7997"
     },
     {
       "date":"2016-05-09",
       "value":"69.6"
     },
     {
       "date":"2016-05-08",
       "value":"26.09991"
     },
     {
       "date":"2016-05-07",
       "value":"49.5"
     }
   ],
   "valueAxes": [{
     "axisAlpha": 0,
     "position": "left",
     "labelFunction": function(value) {
        return  "$ "+value ;
        }
   }],
   "graphs": [{
     "id":"g1",
     "balloonText": "[[category]]<br><b><span style='font-size:14px;'>$ [[value]]</span></b>",
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
     "scrollbarHeight":55,
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

   "categoryField": "date",
   "categoryAxis": {

     "minorGridAlpha": 0.1,
     "minorGridEnabled": true
   },
   "export": {
     "enabled": true
   }

   });
   chart2.addListener("rendered", zoomChart2);
   if(chart2.zoomChart2){
   chart2.zoomChart2();
   }

   function zoomChart2(){
   chart2.zoomToIndexes(Math.round(chart2.dataProvider.length * 0.4), Math.round(chart2.dataProvider.length * 0.55));
   }
      console.log("weekly cost data recived");
    }).error(function(data){
      console.log("weekly cost data error");
      console.log(data);
      console.log("weekly cost data error");
    });
    console.log(DataForWeek);
  }
  /******************code when weekly  button pressed ends**************************************/
  /******************code when monthly  button pressed starts**************************************/
  $scope.monthCost = function(){

    console.log("monthly cost clicked");
       $('#cost1').addClass('refresh');
    var DataForMonth = {};
    var d = new Date();
    DataForMonth.edate = d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
    DataForMonth.accestoken =$cookies.get("accessToken");
    DataForMonth.reqtype = "MONTHLY";

    $http.post("http://52.220.4.26:8080/laviton-webapi-electric-energy/ws/electric/databydatemonthly",DataForMonth).success(function(data){
      console.log("monthly data recived");
      console.log(data);
       $('#cost1').removeClass('refresh');
        console.log("monthly data recieved");
      chart2 = AmCharts.makeChart("chart2", {
   "type": "serial",
   "theme": "light",
   "marginTop":0,
   "marginRight":10,
   "dataProvider": data.out,
   "valueAxes": [{
     "axisAlpha": 0,
     "position": "left",
     "labelFunction": function(value) {
          return  "$ "+value;
        }
   }],
   "graphs": [{
     "id":"g1",
     "balloonText": "[[category]]<br><b><span style='font-size:14px;'>$ [[value]]</span></b>",
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
     "scrollbarHeight":55,
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

   "categoryField": "date",
   "categoryAxis": {

     "minorGridAlpha": 0.1,
     "minorGridEnabled": true
   },
   "export": {
     "enabled": true
   }

   });
   chart2.addListener("rendered", zoomChart2);
   if(chart2.zoomChart2){
   chart2.zoomChart2();
   }

   function zoomChart2(){
   chart2.zoomToIndexes(Math.round(chart2.dataProvider.length * 0.4), Math.round(chart2.dataProvider.length * 0.55));
   }
      console.log("weekly data recived");
    }).error(function(data){
      console.log("weekly data error");
      console.log(data);
      console.log("weekly data error");
    });
    console.log(DataForWeek);
  }
  /******************code when monthly  button pressed ends**************************************/
});
