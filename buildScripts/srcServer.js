//var express=require('express');
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port=3000;
//make instance of express
const app=express();
const compiler=webpack(config);
//to integrate webpack with express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
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
