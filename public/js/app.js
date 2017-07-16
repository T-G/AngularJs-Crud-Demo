var myApp = angular.module("myApp", []);

myApp.controller("myController", 
                [ 
                    "$scope",
                    "utilityService", 
                    "$http", 
                    "$httpParamSerializerJQLike", 
                    function($scope, utilityService, $http, $httpParamSerializerJQLike){
    
    function init(){
        // initialize new user empty object
        $scope.newUser = {};
        $scope.selectedUser = {};
        $scope.message = "";

        $http.get("http://127.0.0.1:3000/users/").then(function(response){
            $scope.users = response.data;
            console.log($scope.users);
        });
    }

    init();


// Add User
$scope.saveUser = function(user, IsValid){
    if(IsValid){
        // $scope.users.push($scope.newUser);
        $http({
            url: 'http://127.0.0.1:3000/create/',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.newUser),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response){
            console.log(response);
            init();
            $scope.message = "New User Added Successfully!";
            $scope.Flg = true;
            utilityService.myAlert();
        });
        
    }
    
};

// Edit User
$scope.selectUser = function(user){
    $scope.selectedUser = user;
};

$scope.updateUser = function(){
    
    $http({
        url: "http://127.0.0.1:3000/update/",
        method: "POST",
        data: $httpParamSerializerJQLike($scope.selectedUser),
        headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
    }).then(function(response){
        console.log(response);
        init();
        $scope.message = "User Updated successfull.";
        $scope.Flg = true;
        utilityService.myAlert();
    });
};

// Delete User
$scope.deleteUser = function(){
    $http({
        url: "http://127.0.0.1:3000/delete/",
        method: "POST",
        data: $httpParamSerializerJQLike({"_id": $scope.selectedUser._id}),
        headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
    }).then(function(response){
        console.log(response);
        init();
        $scope.message = "User deleted successfully.";
        $scope.Flg = true;
        utilityService.myAlert();
    });  
};

$scope.clearMessage = function(){
    $scope.message = "";
}


}]);


// Global Services
myApp.factory("utilityService", [function () {
    utilityObj = {};

    // Success message animation
    utilityObj.myAlert = function () {
        $("#alert").fadeTo(2000, 500).slideUp(1000, function () {
            $('#alert').slideUp(1000);
        });
    }

    return utilityObj;
}]);