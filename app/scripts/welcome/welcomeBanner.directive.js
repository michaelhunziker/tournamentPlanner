angular.module('tPlanner.welcome')
  .directive('welcomeBanner', function () {
      return {
        templateUrl: 'scripts/welcome/welcomeBanner.directive.tpl.html',
        controller: 'WelcomeBannerController',
        controllerAs: 'welcome'
      }
    }
  );
