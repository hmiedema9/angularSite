var app = angular.module('homePage', ['ngRoute', 'ui.bootstrap']);




app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when("/", { templateUrl: "partials/about.html" }).
        when("/about", { templateUrl: "partials/about.html" }).
        when("/contact", { templateUrl: "partials/contact.html" })
}])

app.controller("formController", function ($scope, $http) {

    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' }
    ];

    $scope.formSuccess = false;

    $scope.send = function (name, email, message) {
        var params = JSON.stringify({ type: "Contact", name: name, email: email, message: message });
        $http.post("/api/email", params).
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.formSuccess = true;
                console.log(data.status);
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }

    $scope.resetForm = function () {
        $scope.formSuccess = false;
        $scope.nameInput = "";
        $scope.emailInput = "";
        $scope.messageInput = "";
        $scope.contactForm.$setPristine();
        $scope.$digest
    }



});
