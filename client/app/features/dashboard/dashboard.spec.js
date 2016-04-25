import dashboard from './index';


describe("Controller: dashboard", function() {
  let $controller;

  beforeEach(angular.mock.module(dashboard));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('Status is initialized to good', function() {
    let ctrl = $controller('DashboardController');
    expect(ctrl.status).toBe('good');
  });

});
