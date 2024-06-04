const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//let nav_content=['materials','genres','teachers','video','students','abitur','science','contacts'];
//let n,i; 
//n=nav_content.length;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/albums',function(req,res){
  res.sendFile(path.join(__dirname+'/albums/index.html'));
});

router.get('/genres',function(req,res){
  res.sendFile(path.join(__dirname+'/genres/index.html'));
});

router.get('/singers',function(req,res){
  res.sendFile(path.join(__dirname+'/singers/index.html'));
});

router.get('/video',function(req,res){
  res.sendFile(path.join(__dirname+'/video/index.html'));
});
 
router.get('/melomans',function(req,res){
  res.sendFile(path.join(__dirname+'/melomans/index.html'));
});

router.get('/sponsors',function(req,res){
  res.sendFile(path.join(__dirname+'/sponsors/index.html'));
});

router.get('/search',function(req,res){
  res.sendFile(path.join(__dirname+'/search/index.html'));
});

router.get('/contacts',function(req,res){
  res.sendFile(path.join(__dirname+'/contacts/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8084);
 
console.log('Running at Port 8084');