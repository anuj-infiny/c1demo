const Group = require('../models/Group');
const User = require('../models/User');
var ObjectID = require('mongodb').ObjectID;


exports.index = (req, res) => {
	console.log("2");
  res.render('admin/dashboard', {title: 'Dashboard', tab: '', layout: 'base'});
};

exports.manageUsers = (req, res) => {
	User.find(function (err, users) {
		Group.find(function (err, groups) {
			res.render('admin/manage_users', {title: 'Manage Groups', tab: 'manage_groups',  layout: 'base', users: users, groups : groups});
		});
	});
};

exports.postEditProfile = (req, res) => {
	console.log(req.body.userType);
	console.log(req.body.userGroup);
   
	User.findOne({_id: req.body._id}, (error, user) => {
		console.log(error);
	    if (error) { return done(error); }
	    else {
	    	console.log(user);
	    	user.userType=req.body.userType;
	    	user.userGroup=req.body.userGroup;
	    	user.username=req.body.username;
	    	 console.log(req.body.password);
	    	if(req.body.password=="" || req.body.password.lenght>0)
	    	{
	    		console.log("req.body.password do nothing ");
	    	 }
	    	 else
	    	 {
	    	 	console.log("req.body.password do something ");

	    	 	user.password=req.body.password;
	    	 }		

	    user.save((err) => {    
	    console.log(err);  
          if (err) { return next(err); }
           else
            {
	           res.send({
		             success: true,
		              msg: 'updated successfully',
		              data:user
	                });
            }
	    	
	    });
	   }
	});
};
exports.createUser = (req, res) => {
	User.findOne({username: req.body.username}, (err, user) => {
	    if (err) { return done(err); }
	    if (user) {
	    	 res.send({
             success: true,
              msg: 'user already exists',
              data:user

            });

	     /* req.flash('errors', {message: 'User already exists'});
	      return res.redirect('/admin/manage_users');*/
	    } else {
	    	console.log(req.body.username);
	    	console.log(req.body.password);
	    	console.log(req.body.userType);
	    	
	    	User.create({username: req.body.username, password: req.body.password, userType: req.body.userType,userGroup:req.body.userGroup}, function (err, user) {
			  console.log(err);
			  if (err) return handleError(err);
			  else
			  {
			 res.send({
             success: true,
              msg: 'user create successfully',
              data:user

            });
			}
			  /*req.flash('success', {message: 'User created'});
			  return res.redirect('/admin/manage_users');*/
			});
	    }
	   
	});
};

exports.deleteUser = (req, res) => {
	console.log(req.params.id);
	User.remove({ _id: req.params.id }, function(err) {
    console.log(err);
	     if (err) return handleError(err); 
        else
	     {
	    	res.send({
             success: true,
              msg: 'user deleted'
              

            });
	    }
	    
	   // return res.redirect('/admin/manage_users');
	});

}; 

exports.manageGroups = (req, res) => {
	Group.find(function (err, groups) {
		res.render('admin/manage_groups', {title: 'Manage Groups',  layout: 'base', tab: 'manage_groups', groups : groups});
	});
};

exports.createGroup = (req, res) => {
	Group.findOne({group: req.body.group}, (err, group) => {
	    if (err) { return done(err); }
	    if (group) {
	    	  res.send({
             success: false,
              msg: 'Group already exists',
              data:group

            });
	      //req.flash('errors', {message: 'Group already exists'});
	      //return res.redirect('/admin/manage_groups');
	    } else {
	    	Group.create({group: req.body.group}, function (err, group) {
			  if (err) return handleError(err);
			  //req.flash('success', {message: 'Group created'});
			  /*return res.redirect('/admin/manage_groups');*/
             res.send({
             success: true,
              msg: 'success',
              data:group

            });

			});
	    }
	   
	});
  	
};


exports.updateGroup = (req, res) => {
    console.log(req.body._id);
     console.log("id");
	console.log(req.body.group);
	Group.findOneAndUpdate({_id: req.body._id }, { group : req.body.group }, {upsert:false}, function(err, user){
     /* req.flash('success', {message: "Group name updated"});
      return res.redirect('/admin/manage_groups');*/
     if (err) { return done(err); }
	    if (user) {
	    	  res.send({
             success: true,
              msg: 'Group updated',
              data:user

            });
  	};

});
};
exports.deleteGroup = (req, res) => {
	var t=(req.params.id).toSting;
	 console.log(req.params.id);
	
	Group.remove({ _id: req.params.id }, function(err) {
	  
	    if (!err) {
	    	res.send({
             success: true,
              msg: 'Group deleted'
              

            });
	    	console.log("SDasdsad");
	        /*req.flash('success', {message: 'Group deleted'});*/
	    }
	    else {
	    	res.send({
             success: false,
              msg: 'Group not deleted'
              

            });
            
	       /* req.flash('errors', {message: 'Group not deleted'});*/
	    }
	    /*return res.redirect('/admin/manage_groups');*/
	});

}; 


exports.getUpdatePassword = (req, res) => {
	      
  res.render('admin/update_password', { layout: 'base' });
};
exports.getprofile = (req, res) => {
        console.log("in admin ");
  res.render('admin/profile', { layout: 'base' });
};

