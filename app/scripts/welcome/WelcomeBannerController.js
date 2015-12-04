angular.module('tPlanner.welcome')
  .controller('WelcomeBannerController', function () {
    var vm = this;

    vm.getAuthor = function () {
      return 'Michael Hunziker';
    }

  });
