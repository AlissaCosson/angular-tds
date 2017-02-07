/**
 * Created by Pc maison on 03/02/2017.
 */

var app=angular.module("TP2");
app.controller("serviceController", [ function(){

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
    }]

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
    }

    this.value=1;
    this.count=function(service){
        return this.value;
    }

    this.total=function(price){
        return this.price;
    }




}]);