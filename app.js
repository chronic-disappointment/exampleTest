const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4444;
const bodyParser = require('body-parser');



app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'views')));


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

app.get('/',(req,res,next)=>{
    res.send('welcome to plesk')
})