/**
 * Module dependencies.
 */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');

const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');

const upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const adminController = require('./controllers/admin');
const userController = require('./controllers/user');

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
/*const User = require('./models/User');
User.create({ username: 'admin', email: 'admin@admin.com', password: 'aaaaaa', profile: {name: 'Admin'}, userType: 'ADMIN' });
console.log('connected to mongo');*/
/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
/*
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
*/
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
      req.path !== '/login' &&
      req.path !== '/signup' &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  } else if (req.user &&
      req.path == '/account') {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', passportConfig.isAuthenticated, function(req, res){
    if(req.user.userType == 'ADMIN'){
        return res.redirect('/dashboard/admin/index.html');
    } else{
        return res.redirect('/dashboard/user/index.html');
    }
});

app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

app.get('/user/dashboard', passportConfig.isAuthenticated, userController.index);
app.get('/user/update', passportConfig.isAuthenticated, userController.getUpdate);
/*app.get('/user/update', passportConfig.isAuthenticated, userController.getprofile);*/
app.post('/user/update', passportConfig.isAuthenticated, userController.postUpdate);
app.get('/user/update_password', passportConfig.isAuthenticated, userController.getUpdatePassword);
app.post('/user/profile', passportConfig.isAuthenticated, userController.postProfile);

// app.post('/user/getProfile', passportConfig.isAuthenticated, userController.postGetProfile);
app.post('/user/update_password', passportConfig.isAuthenticated, userController.postUpdatePassword);

app.get('/admin/dashboard', passportConfig.isAuthenticated, adminController.index);
app.get('/admin/manage_users', passportConfig.isAuthenticated, adminController.manageUsers);
app.post('/admin/create_user', passportConfig.isAuthenticated, adminController.createUser);
app.get('/admin/delete_user/:id', passportConfig.isAuthenticated, adminController.deleteUser);

app.get('/admin/manage_groups', passportConfig.isAuthenticated, adminController.manageGroups);
app.post('/admin/create_group', passportConfig.isAuthenticated, adminController.createGroup);
app.post('/admin/update_group', passportConfig.isAuthenticated, adminController.updateGroup);
app.get('/admin/delete_group/:id', passportConfig.isAuthenticated, adminController.deleteGroup);
app.post('/admin/editProfile', passportConfig.isAuthenticated, adminController.postEditProfile);
app.get('/admin/update_password', passportConfig.isAuthenticated, adminController.getUpdatePassword);
app.get('/admin/update', passportConfig.isAuthenticated, adminController.getprofile);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
