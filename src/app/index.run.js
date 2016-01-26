(function() {
  'use strict';

  angular
    .module('jenkinsfileGenerator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
