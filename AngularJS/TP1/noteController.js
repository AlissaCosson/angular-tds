/**
 * Created by Pc maison on 27/01/2017.
 */

angular.module("TP1").controller("noteController", ['$scope', function($scope){
    $scope.txt='';

    $scope.reset=function(){
        $scope.txt='';
    };
}]);