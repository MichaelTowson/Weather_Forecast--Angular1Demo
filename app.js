//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
weatherApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.htm',
    controller: 'homeController'
  })

  .when('/weather', {
    templateUrl: 'views/weather.htm',
    controller: 'weatherController',
  })
})

//SERVICES

//--cityService
weatherApp.service('cityService', function() {
  this.city = "Sacramento";
})

//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })
}])

weatherApp.controller("weatherController", ["$scope", '$resource', 'cityService', function ($scope, $resource, cityService) {
  $scope.city = cityService.city;

  //Get current weather
  $scope.currentWeatherAPI = $resource(
    "https://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&appid=e6e26f422db591152cb877a0a947da10",
    {
      callback: "JSON_CALLBACK",
    },
    { get: { method: "JSONP" } }
  );
  $scope.weatherResult = $scope.currentWeatherAPI.get() 
  console.log($scope.weatherResult)

  //Get weather forecast
    $scope.weatherForecastAPI = $resource(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        $scope.city +
        "&appid=e6e26f422db591152cb877a0a947da10",
      {
        callback: "JSON_CALLBACK",
      },
      { get: { method: "JSONP" } }
    );
    $scope.weatherForecastResult = $scope.weatherForecastAPI.get();
    console.log($scope.weatherForecastResult);
  }
]);