'use strict';

angular.module('cleanUI', [
    'ngRoute',
    'cleanUI.controllers',
    'ngIdle'
])
.config(['$locationProvider', '$routeProvider', 'IdleProvider',
    function($locationProvider, $routeProvider, IdleProvider) {
         IdleProvider.idle(120);
         IdleProvider.timeout(5);
        /////////////////////////////////////////////////////////////
        // SYSTEM
        $routeProvider.when('/', {redirectTo: '/user/dashboard'});
        $routeProvider.otherwise({redirectTo: 'pages/page-404'});

        /////////////////////////////////////////////////////////////
        // Documentation
        $routeProvider.when('/admin/manage_users', {
            templateUrl: '/admin/manage_users'
        });
     $routeProvider.when('/user/update_password', {
            templateUrl: '/user/update_password'
        });
        /////////////////////////////////////////////////////////////
        // Dashboards
        $routeProvider.when('/user/dashboard', {
            templateUrl: '/user/dashboard'
        });
       

        $routeProvider.when('/user/networks', {
            templateUrl: '/user/networks'
        });

        $routeProvider.when('/user/Map', {
            templateUrl: '/user/Map'
        });
      $routeProvider.when('/user/networkDetail', {
            templateUrl: '/user/networkDetail'
        });

        $routeProvider.when('/user/update', {
            templateUrl: '/user/update'
        });


        $routeProvider.when('/user/Details', {
            templateUrl: '/user/Details'
        });

        $routeProvider.when('/user/dailyDetails', {
            templateUrl: '/user/dailyDetails'
        });

       

        /////////////////////////////////////////////////////////////
        // Apps
        $routeProvider.when('/apps/profile', {
            templateUrl: 'apps/profile.html'
        });

        $routeProvider.when('/apps/messaging', {
            templateUrl: 'apps/messaging.html'
        });

        $routeProvider.when('/apps/mail', {
            templateUrl: 'apps/mail.html'
        });

        $routeProvider.when('/apps/calendar', {
            templateUrl: 'apps/calendar.html'
        });

        $routeProvider.when('/apps/gallery', {
            templateUrl: 'apps/gallery.html'
        });

        /////////////////////////////////////////////////////////////
        // Ecommerce
        $routeProvider.when('/ecommerce/cart-checkout', {
            templateUrl: 'ecommerce/cart-checkout.html'
        });

        $routeProvider.when('/ecommerce/dashboard', {
            templateUrl: 'ecommerce/dashboard.html'
        });

        $routeProvider.when('/ecommerce/orders', {
            templateUrl: 'ecommerce/orders.html'
        });

        $routeProvider.when('/ecommerce/product-details', {
            templateUrl: 'ecommerce/product-details.html'
        });

        $routeProvider.when('/ecommerce/product-edit', {
            templateUrl: 'ecommerce/product-edit.html'
        });

        $routeProvider.when('/ecommerce/products-list', {
            templateUrl: 'ecommerce/products-list.html'
        });

        $routeProvider.when('/ecommerce/products-catalog', {
            templateUrl: 'ecommerce/products-catalog.html'
        });

        /////////////////////////////////////////////////////////////
        // Layout
        $routeProvider.when('/layout/grid', {
            templateUrl: 'layout/grid.html'
        });

        $routeProvider.when('/layout/panels', {
            templateUrl: 'layout/panels.html'
        });

        $routeProvider.when('/layout/sidebars', {
            templateUrl: 'layout/sidebars.html'
        });

        $routeProvider.when('/layout/utilities', {
            templateUrl: 'layout/utilities.html'
        });

        $routeProvider.when('/layout/typography', {
            templateUrl: 'layout/typography.html'
        });

        /////////////////////////////////////////////////////////////
        // Icons
        $routeProvider.when('/icons/fontawesome', {
            templateUrl: 'icons/fontawesome.html'
        });

        $routeProvider.when('/icons/icomoon-ultimate', {
            templateUrl: 'icons/icomoon-ultimate.html'
        });

        /////////////////////////////////////////////////////////////
        // Forms
        $routeProvider.when('/forms/autocomplete', {
            templateUrl: 'forms/autocomplete.html'
        });

        $routeProvider.when('/forms/basic-form-elements', {
            templateUrl: 'forms/basic-form-elements.html'
        });

        $routeProvider.when('/forms/buttons', {
            templateUrl: 'forms/buttons.html'
        });

        $routeProvider.when('/forms/checkboxes-radio', {
            templateUrl: 'forms/checkboxes-radio.html'
        });

        $routeProvider.when('/forms/dropdowns', {
            templateUrl: 'forms/dropdowns.html'
        });

        $routeProvider.when('/forms/extras', {
            templateUrl: 'forms/extras.html'
        });

        $routeProvider.when('/forms/form-wizard', {
            templateUrl: 'forms/form-wizard.html'
        });

        $routeProvider.when('/forms/form-validation', {
            templateUrl: 'forms/form-validation.html'
        });

        $routeProvider.when('/forms/input-mask', {
            templateUrl: 'forms/input-mask.html'
        });

        $routeProvider.when('/forms/file-uploads', {
            templateUrl: 'forms/file-uploads.html'
        });

        $routeProvider.when('/forms/selectboxes', {
            templateUrl: 'forms/selectboxes.html'
        });


        /////////////////////////////////////////////////////////////
        // Components
        $routeProvider.when('/components/badges-labels', {
            templateUrl: 'components/badges-labels.html'
        });

        $routeProvider.when('/components/calendar', {
            templateUrl: 'components/calendar.html'
        });

        $routeProvider.when('/components/carousel', {
            templateUrl: 'components/carousel.html'
        });

        $routeProvider.when('/components/collapse', {
            templateUrl: 'components/collapse.html'
        });

        $routeProvider.when('/components/date-picker', {
            templateUrl: 'components/date-picker.html'
        });

        $routeProvider.when('/components/media-players', {
            templateUrl: 'components/media-players.html'
        });

        $routeProvider.when('/components/modal', {
            templateUrl: 'components/modal.html'
        });

        $routeProvider.when('/components/nestable', {
            templateUrl: 'components/nestable.html'
        });

        $routeProvider.when('/components/notifications-alerts', {
            templateUrl: 'components/notifications-alerts.html'
        });

        $routeProvider.when('/components/pagination', {
            templateUrl: 'components/pagination.html'
        });

        $routeProvider.when('/components/loading-progress', {
            templateUrl: 'components/loading-progress.html'
        });

        $routeProvider.when('/components/progress-bars', {
            templateUrl: 'components/progress-bars.html'
        });

        $routeProvider.when('/components/slider', {
            templateUrl: 'components/slider.html'
        });

        $routeProvider.when('/components/steps', {
            templateUrl: 'components/steps.html'
        });

        $routeProvider.when('/components/breadcrumbs', {
            templateUrl: 'components/breadcrumbs.html'
        });

        $routeProvider.when('/components/tabs', {
            templateUrl: 'components/tabs.html'
        });

        $routeProvider.when('/components/text-editor', {
            templateUrl: 'components/text-editor.html'
        });

        $routeProvider.when('/components/mail-templates', {
            templateUrl: 'components/mail-templates.html'
        });

        $routeProvider.when('/components/tooltips-popovers', {
            templateUrl: 'components/tooltips-popovers.html'
        });

        /////////////////////////////////////////////////////////////
        // Tables
        $routeProvider.when('/tables/basic-tables', {
            templateUrl: 'tables/basic-tables.html'
        });

        $routeProvider.when('/tables/datatables', {
            templateUrl: 'tables/datatables.html'
        });

        $routeProvider.when('/tables/editable-tables', {
            templateUrl: 'tables/editable-tables.html'
        });

        /////////////////////////////////////////////////////////////
        // Charts
        $routeProvider.when('/charts/c3', {
            templateUrl: 'charts/c3.html'
        });

        $routeProvider.when('/charts/chartjs', {
            templateUrl: 'charts/chartjs.html'
        });

        $routeProvider.when('/charts/d3', {
            templateUrl: 'charts/d3.html'
        });

        $routeProvider.when('/charts/chartistjs', {
            templateUrl: 'charts/chartistjs.html'
        });

        $routeProvider.when('/charts/peity', {
            templateUrl: 'charts/peity.html'
        });


        /////////////////////////////////////////////////////////////
        // Pages
        $routeProvider.when('/pages/invoice', {
            templateUrl: 'pages/invoice.html'
        });

        $routeProvider.when('/pages/lockscreen', {
            templateUrl: 'pages/lockscreen.html',
            controller: 'lockscreenPageCtrl'
        });

        $routeProvider.when('/pages/login-alpha', {
            templateUrl: 'pages/login-alpha.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/login-beta', {
            templateUrl: 'pages/login-beta.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/login-omega', {
            templateUrl: 'pages/login-omega.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/page-404', {
            templateUrl: 'pages/page-404.html'
        });

        $routeProvider.when('/pages/page-500', {
            templateUrl: 'pages/page-500.html'
        });

        $routeProvider.when('/pages/pricing-tables', {
            templateUrl: 'pages/pricing-tables.html'
        });

        $routeProvider.when('/pages/register', {
            templateUrl: 'pages/register.html',
            controller: 'registerPageCtrl'
        });

    }
]);

var app = angular.module('cleanUI.controllers', []);


app.controller('MainCtrl', function(Idle, $location, $scope, $rootScope, $timeout, $http, $window, $templateCache, $route ) {

    $scope.$on('IdleTimeout', function() {
        window.location.href = '/logout';
    });
	
    NProgress.configure({
        minimum: 0.2,
        trickleRate: 0.1,
        trickleSpeed: 200
    });

    $scope.$on('$routeChangeStart', function() {

        // NProgress Start
        $('body').addClass('cui-page-loading-state');
        NProgress.start();

    });

    $scope.$on('$routeChangeSuccess', function() {

        // Set to default (show) state left and top menu, remove single page classes
        $('body').removeClass('single-page single-page-inverse');
        $rootScope.hideLeftMenu = false;
        $rootScope.hideTopMenu = false;
        $rootScope.showFooter = true;

        // Firefox issue: scroll top when page load
        $('html, body').scrollTop(0);

        // Set active state menu after success change route
        $('.left-menu-list-active').removeClass('left-menu-list-active');
        $('nav.left-menu .left-menu-list-root .left-menu-link').each(function(){
            if ($(this).attr('href') == '#' + $location.path()) {
                $(this).closest('.left-menu-list-root > li').addClass('left-menu-list-active');
            }
        });

        // NProgress End
        setTimeout(function(){
            NProgress.done();
        }, 1000);
        $('body').removeClass('cui-page-loading-state');
    });
$scope.groupName="";
    
    $scope.saveGroup=function(e)
    {
        
        e.preventDefault();
        jQuery('#createGroupModal').modal('hide');
        jQuery('.modal-backdrop').remove();
        $http.post("/admin/create_group",{group:$scope.groupName}).then(function (result) {

              if (result.data.success) {
                 var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();
                 //$window.location.reload();
                 //$location.path('/admin/manage_groups');
              } else {
                //empty
              }
        });
    };
   

   $scope.deleteGroup=function(id)
    {     
        $http.get("/admin/delete_group/"+id).then(function (result) {
              if (result.data.success) {
                
                 $window.location.reload();
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   
     

    };
    $scope.init=function()
    {
                 jQuery('#editUserModal').modal('hide');
                jQuery('.modal-backdrop').remove();
                var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();

    }

    $scope.editGroup=function(group)
    {

        $scope.groups={};
        $scope.groups=group;
        $scope.group={};
        $scope.group.editId=group.group;
        console.log( $scope.group.editId);
       

    }

    $scope.dailyDetailScreen=function()
    {
        console.log("daiy ");
        $location.path("/user/dailyDetails")
    }
    $scope.mapscreen=function()
    {
        console.log("map ");
        $location.path("/user/Map")
    }
     $scope.updateGroup=function(e)
     {
        e.preventDefault();
        //$scope.groups.group=$scope.group;
        console.log($scope.groups.group);
         console.log($scope.groups._id);
        $http.post("/admin/update_group/",$scope.groups).then(function (result) {
                  if (result.data.success) {
                    
                     $window.location.reload();
                     //$location.path('/admin/manage_groups');
                  } else {
                    //empty
                  }
            });   

     }
 $scope.user={};

$scope.usertype={};
$scope.usertype.page="";
$scope.user.userType="ADMIN";
$scope.user.userGroup="";
$scope.user._id="";
$scope.user.username="";
$scope.user.password="";
$scope.usertype.showvalue=false;
$scope.userSelect=function()
{ 
    if($scope.user.userType=="USER")
    {         
        $scope.usertype.showvalue=true;
    }
    else
    {        
       $scope.usertype.showvalue=false;
    }
   
}
$scope.networkDetails=function()
{
    console.log("yes network detail");
    $location.path("/user/networkDetail");
}
$scope.detailsScreen=function(page)
{
    console.log(page);
    if(page=="offline")
    {
        $scope.usertype.page="OFFLINE DETAILS"

    }
    else if(page=="underreview")
    {
        $scope.usertype.page="UNDER REVIEW DETAILS"

    }
    else if(page=="online")
    {
        $scope.usertype.page="ONLINE DETAILS"

    }
      else if(page=="total")
    {
        $scope.usertype.page="TOTAL DETAILS"

    }
    $location.path("/user/Details");

}
$scope.networksScreen=function()
{
     console.log("yes networks");
     $location.path("/user/networks");

}

$scope.edituserProfile=function(e)
{
    alert("edituserProfile");
      e.preventDefault();
       $http.post("/user/profile",$scope.user).then(function (result) {
              if (result.data.success) {
                 /*$window.location.reload();*/
               $location.path("/admin/manage_groups");
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   

}
$scope.changeEditProfileScreen=function()
{
    $location.path("/user/update");
}
$scope.createUserScreen=function()
{
$scope.user.userType="ADMIN";
$scope.user.userGroup="";
$scope.user._id="";
$scope.user.username="";
$scope.user.password="";

}

$scope.editprofile=function(e)
{
   console.log($scope.user.userType);
   console.log($scope.user);

      e.preventDefault();
         jQuery('#editUserModal').modal('hide');
        jQuery('.modal-backdrop').remove();
       $http.post("/admin/editProfile",$scope.user).then(function (result) {
              if (result.data.success) {
                var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();
                $location.path("/admin/manage_users");
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   

}

$scope.profileScreen=function()
{
     $location.path("/admin/profile");
    /*$http.post("/user/getProfile").then(function (result) {
              if (result.data.success) {
                console.log("success");
                 $scope.user=result.data.data;
                 console.log(result.data.data);
                
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   */
    
    
}

$scope.createUser=function()
{
    console.log($scope.user.username);
    console.log($scope.user.password);
    console.log($scope.user.userType);
     $http.post("/admin/create_user",$scope.user).then(function (result) {
              if (result.data.success) {
                
                 $window.location.reload();
                 //$location.path('/admin/manage_groups');
              } else {
                //empty
              }
        });

}

$scope.deleteUser=function(userid)
{


$http.get("/admin/delete_user/"+userid).then(function (result) {
              if (result.data.success) {
                
                 $window.location.reload();
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   

}
$scope.changePasswordScreen=function()
{
    console.log("here");
    $location.path("/user/update_password");
}
$scope.user={};
$scope.user.email="";
$scope.userPass={};
$scope.userPass.password="";
$scope.userPass.confirm_password="";
$scope.userPass.invalid=false;
$scope.changePassword=function(e)
{
     e.preventDefault();
    console.log($scope.userPass.password);
     console.log($scope.userPass.confirm_password);
     if($scope.userPass.password!=$scope.userPass.confirm_password)
     {


        return $scope.userPass.invalid=true;
     }
     else{
    $http.post("/user/update_password/",$scope.userPass).then(function (result) {
              jQuery('#createGroupModal').modal('hide');
             jQuery('.modal-backdrop').remove();
              if (result.data.success) {               
             
             var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();
                $location.path("/user/dashboard");
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });  
        }
}
$scope.changeEmail=function(e)
{
     e.preventDefault();
    $http.post("/user/update/",$scope.user).then(function (result) {
              if (result.data.success) {
                 var currentPageTemplate = $route.current.templateUrl;
                $templateCache.remove(currentPageTemplate);
                $route.reload();
                $location.path("/user/dashboard");
                 //$location.path('/admin/manage_groups');
              } else {
                
              }
        });   

}

$scope.editUser=function(user)
   {
    console.log(user);
$scope.user._id=user._id;
    console.log($scope.user.id);
    $scope.user=user;
   }


});


app.directive('leftMenu', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', '.left-menu-link', function() {

                if (!$(this).closest('.left-menu-list-submenu').length) {
                    $('.left-menu-list-opened > a + ul').slideUp(200, function(){
                        $('.left-menu-list-opened').removeClass('left-menu-list-opened');
                    });
                }

            });
        }
    };
});

app.run(function(Idle){
    // start watching when the app runs. also starts the Keepalive service by default.
    Idle.watch();
});


