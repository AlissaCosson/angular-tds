/**
 * Created by Pc maison on 03/02/2017.
 */

var app=angular.module("TP2");
app.controller("serviceController", [ function(){

    var self=this.value;
    this.codePromo="";
    this.remise="Code promo invalide";
    this.plop = "plop";

    this.services= [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
        "name": "Design",
        "price": 400,
        "active":false
    },{
        "name": "Integration",
        "price": 250,
        "active":false
    },{
        "name": "Formation",
        "price": 220,
        "active":false
    }];

    this.promos=[
        {
            "code": "B22",
            "remise": 0.05
        },
        {
            "code": "AZ",
            "remise": 0.01
        },
        {
        "code": "UBOAT",
        "remise" :0.02
    }];


    this.price=300;
    this.activer=function(service){
        service.active=!service.active;
        if(service.active==true){
            this.value=this.value+1;
            this.price=this.price+service.price;
        }
        else{
            this.value=this.value-1;
            this.price=this.price-service.price;
        }
    };

    this.value=1;
    this.count=function(service){
        return this.value;
    };

    this.total=function(price){
        return this.price;
    };

    this.visible=false;
    this.setVisible=function(){
        this.visible=!this.visible;
    };

    this.estVisible=function(promo){
        return this.visible;
    };

    this.applyCode=function(service){
        if(this.codePromo=="B22"){
            this.remise=this.price*0.05;
            return this.remise;
        }
        else if(this.codePromo=="UBOAT"){
            this.remise=this.price*0.02;
            return this.remise;

        }
        else if(this.codePromo=="AZ"){
            this.remise=this.price*0.01;
            return this.remise;

        }

        else{
            return this.remise;
        }
    };



}]);