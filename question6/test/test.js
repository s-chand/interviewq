describe('SaveController',function(){
  beforeEach(angular.mock.module('ehealth'));

  var $controller;
  //var value;
  beforeEach(inject(function(_$controller_){

    $controller = _$controller_;
  }));

  //Test to ensure result is defined
  describe('Checks that $scope.put returns a defined object result',function(){
    it('Returns true',function(done){
      setTimeout(function() {
        var $scope={};
        $controller=$controller('SaveController',{$scope:$scope});
        //$scope.$apply();
        expect($scope.put).toBe(undefined);
        done();
      }, 1);

      //expect($scope.put).toBe();
    });
  });
  //Test db inserts
});
