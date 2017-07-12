var myApp = angular.module("myApp", []);

myApp.controller("myController", [ "$scope","utilityService", function($scope, utilityService){
    $scope.users = [
        {username:"janedoe", fullName: "Jane Doe", email: "jane@test.com"},
        {username:"don", fullName: "Donney Jones", email: "don@yahoo.com"},
        {username:"lola", fullName: "Lola Maps", email: "lola@yahoo.com"},
    ];

// initialize new user empty object
$scope.newUser = {};
$scope.selectedUser = {};
$scope.message = "";
// Add User
$scope.saveUser = function(user, IsValid){
    if(IsValid){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User added successfully.";
        $scope.Flg = true;
        utilityService.myAlert();
    }
    
};

// Edit User
$scope.selectUser = function(user){
    $scope.selectedUser = user;
};

$scope.updateUser = function(){
    $scope.message = "User Updated successfull.";
    $scope.Flg = true;
    utilityService.myAlert();
};

// Delete User
$scope.deleteUser = function(){
    $scope.users.splice($scope.users.indexOf($scope.selectedUser), 1);
    $scope.message = "User deleted successfully.";
    $scope.Flg = true;
    utilityService.myAlert();
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