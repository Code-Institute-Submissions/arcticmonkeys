angular.module('NavbarDirective', []).directive('navbar', function() {
  return {
  	restrict: 'EA',
  	templateUrl: 'templates/directives/navbar.html'
  };
});