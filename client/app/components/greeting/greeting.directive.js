import angular from 'angular';
import './greeting.scss';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require("./greeting.html")
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
