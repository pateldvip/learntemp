//var express=require('express');
import express from 'express';
//var path=require('path');
import path from 'path';
//var open=require('open');
import open from 'open';

const port=3000;
//make instance of express
const app=express();
//set path(first variable) to respond to upon request
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.listen(port,function(err){
  if(err){
    console.log(err);
  }
  else{
    open('http://localhost:'+port);
  }
});
