 const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const headerHelmet = require('helmet');
var cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const { errHandler } = require('./middleware/error')



// Lottery Administrator 
const Adminauth = require('./controllers/admin/adminAuth')
const indexRoutes = require('./routes/admin/indexRoutes')


//User Api & Accessable By users,(App)
const auth = require('./routes/app/auth');




app.use(express.json({limit:'1mb'}))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')))
app.set('views', __dirname + '/views')
app.set('view engine', ejs)
app.use(cookieParser());
app.use(headerHelmet());
app.use(cors());


// For Admin **********
app.use('/0auth2', auth)
app.use('/', indexRoutes)



//  For Apps **********
app.use('/apiV1',auth)
// app.use('/apiV2',)





app.get('*',(req,res)=>{ 
    res.render('../views/errorPage.ejs');
    })
app.use(errHandler);
app.listen(PORT,
    () => {
        console.log(`working at port ${PORT} .env ${process.env.NODE_ENV}`);
    }
)
