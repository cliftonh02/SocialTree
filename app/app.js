(function(){
  angular.module('SocialTree', ['ui.router']);
    .config(function($statProvider){

      $statProvider
        .state('signup', {
          url: "/signup",
          templateUrl: "app/signup/signup.html",
          controller: "SignUpController"
        })
    })
}());
