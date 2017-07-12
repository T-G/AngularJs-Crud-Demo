var myApp = angular.module("myApp", []);

myApp.controller("myController", [ "$scope", function($scope){
    $scope.users = [
        {username:"pronoy", fullName: "Theotones Gomes", email: "pronoygomes@yahoo.com"},
        {username:"don", fullName: "Donney Jones", email: "don@yahoo.com"},
        {username:"lola", fullName: "Lola Maps", email: "lola@yahoo.com"},
    ];

// initialize new user empty object
$scope.newUser = {};
$scope.selectedUser = {};
$scope.message = "";
// Add User
$scope.saveUser = function(user){
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    $scope.message = "New User added successfully.";
};

// Edit User
$scope.selectUser = function(user){
    $scope.selectedUser = user;
};

$scope.updateUser = function(){
    $scope.message = "User Updated successfull.";
};

// Delete User
$scope.deleteUser = function(){
    $scope.users.splice($scope.users.indexOf($scope.selectedUser), 1);
    $scope.message = "User deleted successfully.";
};

$scope.clearMessage = function(){
    $scope.message = "";
}


}]);

