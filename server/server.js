console.log("Test")
var express = require('express');

var http = require('http');

noteapp.get('/site', function(req, res){
	res.send('If you can see this, server is working'); });
