const app = require('./app');
//const dotenv = require('dotenv');
const mongoose = require('mongoose');
let port = 3000


//dotenv.config();
//connect to DB
mongoose.connect("mongodb://localhost/blogdb",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})



app.listen(port,()=>{
    console.log(`Express js server starts at http://localhost:${port}`)
});


//module.exports = app;   