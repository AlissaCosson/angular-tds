/**
 * Created by Pc maison on 17/03/2017.
 */
angular.module("TP9bis").config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/route1', {
            templateUrl: 'route1.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl1'
        }).
        when('/route2/:nom', {
            templateUrl: 'route2.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl2'
        }).otherwise({ //route par défaut
            redirectTo: '/route1'
        });
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(true);
        }
    }]);