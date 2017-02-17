/**
 * Created by Pc maison on 17/02/2017.
 */

var app=angular.module("TP4");
app.controller("contactController", [ function(){

    var self=this.value;

    this.contacts= [
        {
            "nom": "ZUCKERBERG",
            "prenom": "mark",
            "mail": "mark@facebook.com"
        },{
            "nom": "GATES",
            "prenom": "bill",
            "mail": "bill@microsoft.com"
        },{
            "nom": "JOBS",
            "prenom": "steeve",
            "mail": "Steeve@apple.com"
        }];

    this.value=3;
    this.count=function(contact){
        return this.value;
    }


}]);