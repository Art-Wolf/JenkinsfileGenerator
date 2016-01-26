(function() {
  'use strict';

  angular
      .module('jenkinsfileGenerator')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Push Git Repo'
      },
      {
        'title': 'Sonar Tests'
      },
      {
        'title': 'Unit Tests'
      },
      {
        'title': 'Regression Tests'
      },
      {
        'title': 'Build'
      },
      {
        'title': 'Deploy'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
