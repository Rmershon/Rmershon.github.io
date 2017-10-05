var app = angular.module('myApp', ['ui.bootstrap']);
    
app.controller('NavController', function ($scope) {
  $scope.isNavCollapsed = true;
});

app.directive("navs", function () {
    return {
//        template: "<div ng-controller='navController'> <p>This works</p> </div>"
        transclude: true,
        template: '<nav class="navbar navbar-default" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" ng-click="isNavCollapsed = !isNavCollapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">Reed M.</a></div><div class="collapse navbar-collapse" uib-collapse="isNavCollapsed"><ul class="nav navbar-nav"><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="projects.html">Projects</li></ul></div></nav>',
        link: function (scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (clone) {
                element.append(clone);
            });
        }
    };
    
});