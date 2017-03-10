/**
 * Created by Pc maison on 03/03/2017.
 */

var app=angular.module("TP5");
app.controller("currencyController", ['$http',  function($http){

    var self=this;
    var from="";
    var to="";
    var val;
    this.in;
    this.out;
    this.result=0;

    this.currencies;

    this.visibleHistorique=true;
    this.setVisibleHistorique=function(){
        this.visibleHistorique=!this.visibleHistorique;
    };

    this.showHistorique=function(){
        return this.visibleHistorique;

    };


    //L'initialisation de la variable currencies grâce au fichier JSON se fera dans le contrôleur par une requête Ajax :

    this.convertir=function() {

        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + self.from.code + '_' + self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function (response) {
                self.result = response.data[self.from.code + '_' + self.to.code].val;
                self.out=self.in*self.result;
            })
    };

    $http.get('app/data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
            self.from=self.currencies['EUR'];
            self.to=self.currencies['USD'];
        },

        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

        this.swap=function(){
            change=self.from;
            self.from= self.to;
            self.to=change;
        };


}]);