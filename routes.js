weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.htm",
      controller: "homeController",
    })

    .when("/weather", {
      templateUrl: "views/weather.htm",
      controller: "weatherController",
    });
});
