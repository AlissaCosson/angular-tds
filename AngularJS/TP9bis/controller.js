/**
 * Created by Pc maison on 17/03/2017.
 */
angular.module("TP9bis").controller("RouteController",["$routeParams", "code",function($routeParams, code){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
    this.code=code;
}]);

angular.module("TP9bis").factory("code", function() {
    return {
        value:"noCode"
    }
});