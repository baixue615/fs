var express = require('express');
var router = express.Router();
var fs = require('fs');
var num=0;
var num2=0;
router.get('/', function(req, res, next) {
  num++;
	fs.readFile('public/text1.txt','utf-8',function(err,data){
			fs.writeFile('public/text1.txt','已访问:'+num+"次")
			res.render('text', { title:"白雪"});
	})
});


router.get('/text2', function(req, res, next) {
  num2++;
	fs.readFile('public/text2.txt','utf-8',function(err,data){
			fs.writeFileSync('public/text2.txt','已访问:'+num2+"次")
			res.render('text2', { title:"白雪"});
	})
});
module.exports = router;
