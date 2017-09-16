var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope, $sce){

    $scope.messages = [
        { 
    	sender:"BOT",
    	text:"wat can i do for u?",
    	time:"1:20pm"
        },
    	{ 
    		sender:"USER",
    		text:"r u ?",
    		time:"1:05pm"
    	},
    	{
    		sender:"BOT",
    			text:"what?",
    			time:"1:10pm"
    	},

    	{   
    		sender:"USER",
    		text:"r u?",
    		time:"1:50pm"
    	},
    	{
    		sender:"BOT",
    		text:"hi",
    		time:"1.50pm"

    	}];

var  exampleSocket =  new  WebSocket("wss://swiftcode-ws-chat.herokuapp.com/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
        var jsonData = JSON.parse(event.data);
        jsonData.time = new Date().toLocaleTimeString();
        $scope.messages.push(jsonData);
        $scope.$apply(); 
        console.log(jsonData);    
    };
    $scope.sendMessage = function () {    
        exampleSocket.send($scope.userMessage);
        $scope.userMessage = "";
};
$scope.trust = $sce.trustAsHtml;
});