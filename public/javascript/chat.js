var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope){

    $scope.messages = [
        { 
    	sender:"BOT",
    	text:"wat can i do for u?",
    	time:"1:20pm"
        },
    	{ 
    		sender:"USER",
    		text:"r u married?",
    		time:"1:05pm"
    	},
    	{
    		sender:"BOT",
    			text:"what?",
    			time:"1:10pm"
    	},

    	{   
    		sender:"USER",
    		text:"r u married?",
    		time:"1:50pm"
    	},
    	{
    		sender:"BOT",
    		text:"BLOCKED",
    		time:"1.50pm"

    	}];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
      var jsonData = JSON.parse(event.data);
      console.log(jsonData);
  };
});