//DIRECTIVES
weatherApp.directive("forecastResult", function () {
  return {
    restrict: "E",
    templateUrl: "directives/forecastResult.html",
    replace: true,
  };
});
