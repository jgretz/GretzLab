angular.module("app.lab").config ($routeProvider, $locationProvider) ->
    $locationProvider
        .html5Mode(true)
        .hashPrefix("!")

    # Main
    $routeProvider.when "/",
        controller: "HomeController"
        templateUrl: "app/templates/main/home.html"


    # Blog
    $routeProvider.when "/blog",
        controller: "BlogController"
        templateUrl: "app/templates/main/blog.html"

    $routeProvider.when "/blog/:item",
        controller: "BlogController"
        templateUrl: "app/templates/main/blog.html"

    # Lab
    $routeProvider.when "/lab",
        controller: "LabController"
        templateUrl: "app/templates/main/lab.html"

    $routeProvider.when "/lab/:item",
        controller: "LabController"
        templateUrl: "app/templates/main/lab.html"

    # Kitchen
    $routeProvider.when "/kitchen",
        controller: "KitchenController"
        templateUrl: "app/templates/main/kitchen.html"

    $routeProvider.when "/kitchen/:item",
        controller: "KitchenController"
        templateUrl: "app/templates/main/kitchen.html"

    # Talks
    $routeProvider.when "/talks",
        controller: "TalksController"
        templateUrl: "app/templates/main/talks.html"

    $routeProvider.when "/talks/:item",
        controller: "TalksController"
        templateUrl: "app/templates/main/talks.html"

    # 404
    $routeProvider.when "/error",
        controller: "ErrorController"
        templateUrl: "app/templates/main/404.html"

    $routeProvider.otherwise
        redirectTo: "error"