var app=angular.module('ehealth',['pouchdb']);

app.controller("SaveController",function($log,pouchDB,$scope,SimpleService)
{
$scope.List=[];
$scope.product={};
$scope.docs=function(){
  var db=pouchDB("badre");
  return db.allDocs({include_docs:true}).then(function(list){
    $scope.product=list;
    $log.log(list);
  });
};
$scope.result=$scope.docs();
$scope.loadData=function(){
  $scope.product=$scope.docs();
};

$scope.save = function(field_data){
  var data={
    "_id":Math.random().toString(36).substring(7),
    "fullname": $scope.fullname,
    "hobby":$scope.hobby,
    "date":new Date().toJSON()
  };
  var db=pouchDB("badre");
  return db.put(data).then(function(){
    return db.allDocs({include_docs:true}).then(function(da){
      $scope.product=da;
      $scope.fullname="";
      $scope.hobby="";
    });
  });
}

});
//Service and her methods
app.service('SimpleService',function($log,pouchDB){

  return {
    getList: function(){
      var db=pouchDB("http://127.0.0.1:5984/baseball");
      return db.allDocs({include_docs:true}).then(function(list){
        $log.log(list);
      });
    },
    saveItem: function(data){
      var db=pouchDB("http://127.0.0.1:5984/baseball");
      return db.put(data).then(function(){
        return db.allDocs({include_docs:true}).then(function(da){
          $log.log(da);
        });
      });
    }
  }
});
