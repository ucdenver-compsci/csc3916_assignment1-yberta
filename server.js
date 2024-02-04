var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text({type: '*/*'}));


app.post('/', function(req, res){
    var body = req.body

    if (req.get('Content-Type')){
        console.log(req.get('Content-Type'));
        res = res.type(req.get('Content-Type'));
    }
    res.send('hello world')
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port %d', this.address().port);
});

module.exports = app;
