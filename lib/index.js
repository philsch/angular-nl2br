// Generated by CoffeeScript 1.7.1
var m;

m = angular.module('nl2br', []);

m.filter('nl2br', function() {
  return function(input) {
    return input.replace(/\n/g, '<br>');
  };
});