var app = angular.module("gvWeb", []);
app.controller("classController", function ($scope) {



    $scope.titles = ["CIS 238", "CIS 371"];
    $scope.activeTitle = $scope.titles[0];
    $scope.activeTitleID = 0;
    $scope.changeList = function (title) {
        $scope.activeTitle = $scope.titles[title]
        $scope.activeTitleID = title;
    }

    $scope.mmWorkList = [
        { "id": "c1", "class": "CIS 238", "work": "chapter01", "link": "CIS238/chapter01" },
        { "id": "c2", "class": "CIS 238", "work": "chapter02", "link": "CIS238/chapter02" },
        { "id": "c3", "class": "CIS 238", "work": "chapter03", "link": "CIS238/chapter03" },
        { "id": "c4", "class": "CIS 238", "work": "chapter04", "link": "CIS238/chapter04" },
        { "id": "c5", "class": "CIS 238", "work": "chapter05", "link": "CIS238/chapter05" },
        { "id": "c6", "class": "CIS 238", "work": "chapter06", "link": "CIS238/chapter06" }]

    $scope.mmSize = $scope.mmWorkList.length;

    $scope.waWorkList = [
        { "id": "1", "class": "CIS 371", "work": "hw01", "link": "CIS371/HW01" },
        { "id": "1", "class": "CIS 371", "work": "hw02", "link": "CIS371/HW02" },
        { "id": "1", "class": "CIS 371", "work": "hw03", "link": "CIS371/HW03" },
        { "id": "1", "class": "CIS 371", "work": "hw04", "link": "CIS371/HW04" },
        { "id": "1", "class": "CIS 371", "work": "hw05", "link": "CIS371/HW04" }
    ]


});
