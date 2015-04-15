angular.module("app").config ($routeProvider, $locationProvider) ->
    $locationProvider
        .html5Mode(true)
        .hashPrefix("!")

    # Main
    $routeProvider.when "/",
        controller: "HomeController"
        templateUrl: "app/templates/main/home.html"

    $routeProvider.when "/experiments",
        controller: "ExperimentsController"
        templateUrl: "app/templates/main/experiments.html"

    $routeProvider.when "/about",
        controller: "AboutController"
        templateUrl: "app/templates/main/about.html"