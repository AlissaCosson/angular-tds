/**
 * Created by Pc maison on 03/02/2017.
 */

var app=angular.module("TP2");
app.controller("serviceController", [ function(){

    var code="";
    var self=this.value;

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

    this.remise=0;


    this.remisePromo=function(code){
        if(this.code=="B22") {
            this.remise = this.price * 0.05;
        }
        else if(this.code=="AZ") {
            this.remise = this.price * 0.01;
        }
        else if(this.code=="UBOAT") {
            this.remise = this.price * 0.02;
        }
        else {
            this.remise = 0;
        }

        return this.remise;
    }


}]);