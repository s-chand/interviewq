describe('SaveController',function(){
  beforeEach(angular.mock.module('ehealth'));

  var $controller;
  var value;
  beforeEach(inject(function(_$controller_){

    $controller = _$controller_;
  }));

  //Test to ensure result is defined
  describe('Checks that $scope.put returns a defined object result',function(){
    it('Returns true',function(done){
      setTimeout(function() {
        var $scope={};
        $controller=$controller('SaveController',{$scope:$scope});
        expect($scope.put).toBeDefined();
        //expect($scope.put).toBe(Object);

        done();
      }, 1);
      //
    });
  });
  //Test db inserts
});
