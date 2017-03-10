/**
 * Created by Pc maison on 10/03/2017.
 */
angular.module("TP6").directive("dirClient", function() {
    return {
        template : "<div>Client : {{client}}</div>"
    };
})