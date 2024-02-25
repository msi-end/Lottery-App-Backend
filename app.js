 const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const { errHandler } = require('./middleware/error')



// Lottery Administrator 
const auth = require('./controllers/adminAuth')
const indexRoutes = require('./routes/admin/indexRoutes')


//User Api & Accessable By users,(App)
const auth = require('./routes/employee/auth.js');




app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')))
app.set('views', __dirname + '/views')
app.set('view engine', ejs)
app.use(cookieParser());

// For Admin **********
app.use('/0auth2', auth)
app.use('/', indexRoutes)



//  For Apps **********
app.use('/apiV1')
app.use('/apiV2')





app.get('*',(req,res)=>{ 
    res.render('../views/errorPage.ejs');
    })
app.use(errHandler);
app.listen(PORT,
    () => {
        console.log(`working at port ${PORT} .env ${process.env.NODE_ENV}`);
    }
)
