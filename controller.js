/**
 * Created by Preetham on 23/09/2016.
 */
var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", function ($scope, days) {
   $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
   $scope.day = days.tomorrow;
});