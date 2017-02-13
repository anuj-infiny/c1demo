const Group = require('../models/Group');
const User = require('../models/User');

exports.index = (req, res) => {
  res.render('admin/dashboard', {title: 'Dashboard', tab: ''});
};

exports.manageUsers = (req, res) => {
	User.find(function (err, users) {
		Group.find(function (err, groups) {
			res.render('admin/manage_users', {title: 'Manage Groups', tab: 'manage_groups', users: users, groups : groups});
		});
	});
};

exports.createUser = (req, res) => {
	User.findOne({username: req.body.username}, (err, user) => {
	    if (err) { return done(err); }
	    if (user) {
	      req.flash('errors', {message: 'User already exists'});
	      return res.redirect('/admin/manage_users');
	    } else {
	    	User.create({username: req.body.username, password: req.body.password, userType: req.body.userType}, function (err, group) {
			  if (err) return handleError(err);
			  req.flash('success', {message: 'User created'});
			  return res.redirect('/admin/manage_users');
			});
	    }
	   
	});
};

exports.deleteUser = (req, res) => {
	User.remove({ _id: req.params.id }, function(err) {
	    if (!err) {
	        req.flash('success', {message: 'User deleted'});
	    }
	    else {
	        req.flash('errors', {message: 'User not deleted'});
	    }
	    return res.redirect('/admin/manage_users');
	});

}; 

exports.manageGroups = (req, res) => {
	Group.find(function (err, groups) {
		res.render('admin/manage_groups', {title: 'Manage Groups', tab: 'manage_groups', groups : groups});
	});
};

exports.createGroup = (req, res) => {
	Group.findOne({group: req.body.group}, (err, group) => {
	    if (err) { return done(err); }
	    if (group) {
	      req.flash('errors', {message: 'Group already exists'});
	      return res.redirect('/admin/manage_groups');
	    } else {
	    	Group.create({group: req.body.group}, function (err, group) {
			  if (err) return handleError(err);
			  req.flash('success', {message: 'Group created'});
			  return res.redirect('/admin/manage_groups');
			});
	    }
	   
	});
  	
};

exports.deleteGroup = (req, res) => {
	Group.remove({ _id: req.params.id }, function(err) {
	    if (!err) {
	        req.flash('success', {message: 'Group deleted'});
	    }
	    else {
	        req.flash('errors', {message: 'Group not deleted'});
	    }
	    return res.redirect('/admin/manage_groups');
	});

}; 