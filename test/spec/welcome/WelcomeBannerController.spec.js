describe('WelcomeBannerController', function () {

  beforeEach(module('tPlanner.welcome'));

  var controller,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('WelcomeBannerController', {
      $scope: scope
    });
  }));

  describe('getAuthor', function() {
    it('should return author', function () {
      // given
      // when
      var actual = controller.getAuthor();
      // then
      expect(actual).toBe('Michael Hunziker');
    });
  });


});
