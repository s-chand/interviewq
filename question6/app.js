var app=angular.module('ehealth',['pouchdb']);

app.controller("SaveController",function($log,pouchDB,$scope,$window)
{

$scope.product={};

$scope.getAllDoc=function(){
  var db = pouchDB("badre");
  return db.allDocs({include_docs:true}).then(function(list){
    $scope.product=list;
  }).catch(function(e){
    $log.log(e);
  });
};
$scope.getAllDoc();
$scope.loadData=function(){
  $scope.product = $scope.getAllDoc();
};

$scope.put = function(){
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
    }).catch(function(e){
      $log.log(e);
    });
  });
};

});
