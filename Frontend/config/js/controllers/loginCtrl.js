app.controller('loginCtrl',function($scope,$cookies,$location,loginService){
  console.log($location.url());
//********************************************************//
//********************************************************//
//this code is for controlling login form animations starts
//********************************************************//
//********************************************************//
    var username = $('#username');
    var password = $('#password');
    var usernameLabel = $('#usernameLabel');
    var passwordLabel = $('#passwordLabel');
    username.focus(function(){
    usernameLabel.fadeOut(500);
  });
    password.focus(function(){
    passwordLabel.fadeOut(500);
});
        username.blur(function(){
        username.val() !=='' ? usernameLabel.fadeOut(500) :usernameLabel.fadeIn(500);
});
        password.blur(function(){
        password.val() !='' ? passwordLabel.fadeOut(500) :passwordLabel.fadeIn(500);
});
//********************************************************//
//********************************************************//
//this code is for controlling login form animations ends
//********************************************************//
//********************************************************//

//********************* function to request login starts**********************//
$scope.login = function(user){
  //console.log(user);
  $("#login").html("Please Wait....");
loginService.requestlogin(user);
/* var promise = loginService.getData();
promise.then(function(data){
console.log(data);
}); */

}
//********************* function to request login ends**********************//


});
