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

    this.visibleAjout=false;
    this.setVisibleAjout=function(){
        this.visibleAjout=true;
        this.visibleModif=false;
    };

    this.visibleModif=false;
    this.setVisibleModif=function(){
        this.visibleModif=true;
        this.visibleAjout=false;
    };


    this.estVisibleAjout=function(){
        return this.visibleAjout;
    };

    this.estVisibleModif=function(){
        return this.visibleModif;
    };

    this.annulerAjout=function(){
        this.visibleAjout=false;
        return this.visibleAjout;
    };

    this.annulerModif=function(){
        this.visibleModif=false;
        return this.visibleModif;
    }



}]);