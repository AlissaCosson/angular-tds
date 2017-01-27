/**
 * Created by Pc maison on 27/01/2017.
 */

angular.module("TP0").controller("mainController", function(){
    var self=this;
    var message="Hello";
    this.msg="Coucou";
    this.getMsg=function(){
        return self.msg;
    };
});