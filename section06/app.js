const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');//Importing handlebars to make it accessible

const app = express();

// REGISTER YOUR TEMPLATE ENGINE (THREE EXAMPLES)

// **********PUG*******************
//  app.set('view engine', 'pug'); 
//  app.set('views', 'views');

// **********HANDLEBARS************
// app.engine('hbs', expressHbs({
//      layoutsDir: 'views/layouts/',//where layouts live (this is the default, too)
//      defaultLayout: 'main-layout', // the default layout used for all files.
//      extname: 'hbs'
//      })
//  );
//  app.set('view engine', 'hbs');

// **********EJS******************
app.set('view engine', 'ejs')
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: "", });  //this is used by the templating engine to render the view
});

app.listen(3000);
