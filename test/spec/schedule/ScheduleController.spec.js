describe('ScheduleController', function () {

  beforeEach(module('tPlanner.schedule'));

  var controller,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('ScheduleController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(controller.awesomeThings.length).toBe(2);
  });
});
