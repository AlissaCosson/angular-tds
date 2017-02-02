/**
 * Created by Pc maison on 27/01/2017.
 */


var app = angular.module('TP1',["ngCookies"]);
app.controller('noteController', ["$cookies",function(cookies) {



    var info = "";
    this.value = cookies.get('messageNote');
    var self=this;

    this.count = function() {

        if(self.value != "" && self.value!=cookies.get('messageNote') )

            info = "Message modifié";

        return 100-self.value.length;
    };

    this.clear = function(){

        info = "";

        self.value="";
    };

    this.save = function(){

        info="Message sauvegardé";

        if (self.value != "") {

            cookies.put('messageNote', self.value);

        }
    };


    this.show = function(){

        return info;
    };

}]);
