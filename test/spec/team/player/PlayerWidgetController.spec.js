describe('PlayerWidgetController', function () {

  // load the controller's module
  beforeEach(module('tPlanner.team.player'));

  var controller,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('PlayerWidgetController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(controller.awesomeThings.length).toBe(1);
  });
});
