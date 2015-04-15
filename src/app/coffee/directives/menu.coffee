angular.module("app").directive "menu", () ->
    restrict: 'E'
    templateUrl: 'app/templates/components/menu.html'
    replace: true