describe('SaveController',function(){
  beforeEach(angular.mock.module('ehealth'));

  var $controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.put',function(){
    it('Returns true',function(){
      var $scope={};
      $controller=$controller('SaveController',{$scope:$scope});
      expect($scope.put).toBeDefined();
    });
  });
});
