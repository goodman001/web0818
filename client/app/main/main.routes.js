'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/users', {
    template: '<main></main>'
  });
}
