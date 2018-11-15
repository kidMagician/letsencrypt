var express = require('express')

var app = express();  
var port =80
app.use(express.urlencoded());

app.get('/.well-known/acme-challenge',function(req,res){
    res.write('')
    res.end()
})

app.listen(port, () => console.log(`app listening on port ${port}!`))