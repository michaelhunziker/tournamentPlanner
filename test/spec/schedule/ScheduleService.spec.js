describe('ScheduleService', function () {

  beforeEach(module('tPlanner.schedule'));

  var ScheduleService;

  beforeEach(inject(function (_ScheduleService_) {
    ScheduleService = _ScheduleService_;
  }));

  describe('getSomeStuff', function() {
    it('should return stuff', function () {
      // given
      // when
      var actual = ScheduleService.getSomeStuff();
      // then
      expect(actual).toBe('stuff');
    });

  })
});
