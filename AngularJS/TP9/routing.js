/**
 * Created by Pc maison on 17/03/2017.
 */

angular.module("TP9").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/route1', {
            templateUrl: 'route1.html',
            controller: 'RouteController',
            controllerAs:'rtCtrl1'
        });
    }]);