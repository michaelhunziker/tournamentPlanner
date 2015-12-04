angular.module('tPlanner.team.player')
  .directive('playerWidget', function () {
      return {
        templateUrl: 'playerWidget.directive.tpl.html',
        controller: 'PlayerWidgetController',
        controllerAs: 'player'
      }
    }
  );
