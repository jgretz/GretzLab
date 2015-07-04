angular.module("app").config ($routeProvider, $locationProvider) ->
    $locationProvider
        .html5Mode(true)
        .hashPrefix("!")

    # Main
    $routeProvider.when "/",
        controller: "HomeController"
        templateUrl: "app/templates/main/home.html"

    $routeProvider.when "/lab",
        controller: "LabController"
        templateUrl: "app/templates/main/lab.html"

    $routeProvider.when "/blog",
        controller: "BlogController"
        templateUrl: "app/templates/main/blog.html"

    $routeProvider.when "/about",
        controller: "AboutController"
        templateUrl: "app/templates/main/about.html"