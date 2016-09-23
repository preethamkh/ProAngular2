/**
 * Created by Preetham on 23/09/2016.
 */

// uses value of the "day" variable and if it's a number - outputs the day name
angular.module("exampleApp.Filters", [])
    .filter("dayName", function () {
    var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});