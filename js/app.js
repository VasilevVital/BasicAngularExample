var angularEg = angular.module('angularEg', []);

//definition of myContacs Controller
angularEg.controller('myContacts', function($scope){
  
  //my contacts listed as a JavaScript array of objects
  $scope.contacts = [
  		{
  			name: "Scott Hanselman",
  			country: "USA",
  			web: "http://www.hanselman.com/"
  		},
  		{
  			name: "K. Scott Allen",
  			country: "USA",
  			web: "http://odetocode.com/blogs/all"
  		},
  		{
  			name: "John Papa",
  			country: "USA",
  			web: "http://www.johnpapa.net/"
  		},
  		{
  			name: "Dan Wahlin",
  			country: "USA",
  			web: "http://www.thewahlingroup.com/"
  		},
  		{
  			name: "John Sonmez",
  			country: "USA",
  			web: "http://www.simple-programmer.com"
  		},
  		{
  			name: "Shawn Wildermuth",
  			country: "USA",
  			web: "http://wildermuth.com/"
  		},
  		{
  			name: "Jon Skeet",
  			country: "United Kingdom",
  			web: "http://msmvps.com/blogs/jon_skeet/"
  		}

  ];
});
