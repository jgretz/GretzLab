angular.module("app").directive "footer", () ->
    restrict: 'E'
    templateUrl: 'app/templates/components/footer.html'
    replace: true