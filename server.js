var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text({
    type: function(req){
        return 'text';
    }
}));


app.post('/',(req,res)=>{
    console.log(req.body)
    res = res.status(200)
    var contentType = req.get('Content-Type');
    if (contentType){
        console.log("Content Type:" + contentType)
    }
    res.send(req.body)
})

app.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port %d', this.address().port);
});

module.exports = app;
