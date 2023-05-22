var app = angular.module('AngularModel', ['ngRoute','ngSanitize','angularUtils.directives.dirPagination']);

var base_url = document.getElementById("site_url").value;
app.controller('AngularController', function($scope, $http, $location) {
	$scope.saveContactUs = function($event){
		var currentCaptcha = jQuery('#contactus .captch.rc-anchor.rc-anchor-normal.rc-anchor-light').html();
		var formdata = jQuery("#contactus").serializeArray();
		var url = jQuery("#contactus").attr("action");
		$http({
	      method: 'POST',
	      url: url,
	      data: formdata
	    }).then(function (success){
	    	$scope.result = success.data.result;
	    	$scope.result_message = success.data.message;
	    	if(success.data.result=="success"){
	    		jQuery('#contactus')[0].reset();
	    	}
	    	////////////////////////
	    	$http({
		      method: 'POST',
		      url: '/clientarea/refreshcaptcha',
		      data: {captcha:currentCaptcha}
		    }).then(function (success){
		    	if(success.data.result=="success"){
		    		jQuery('#contactus .captch.rc-anchor.rc-anchor-normal.rc-anchor-light').html(success.data.recaptcha);
		    	}
		    },function (error){
		    	location.reload();
		    });
	    	////////////////////////
	    },function (error){
	    	$scope.result = "error";
	    	$scope.result_message = error.data;
	    });
		$event.preventDefault();
	}

	$scope.submitSubscription = function(){
		var email = jQuery("#subscriptionemail").val();
		if(email != "" && email != "Your Email Address"){
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
				var URL = base_url+"clientarea/subscription";
				var formdata = {'email': email};
				$http({
					method: 'POST',
					url: URL,
					data: formdata
				}).then(function (success){
					$scope.result = success.data.result;
		    		$scope.result_subscription_message = success.data.message;
					if(success.data.result=="success"){
			    		jQuery("#subscriptionemail").val("Your Email Address");
			    	}
				},function (error){
					$scope.result = "error";
			    	$scope.result_subscription_message = error.data;
				});
			}else{
				$scope.result = "error";
	    		$scope.result_subscription_message = "Please enter valid email address!";
			}
			
		}else{
			$scope.result = "error";
	    	$scope.result_subscription_message = "Please enter email address!";
		}
	}
});