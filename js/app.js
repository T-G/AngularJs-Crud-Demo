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

// Add User
$scope.saveUser = function(user){
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
};

// Edit User
$scope.selectUser = function(user){
    $scope.selectedUser = user;
};

// Delete User

}]);

