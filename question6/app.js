(function(){

var app=angular.module('ehealth',['pouchdb']);

app.controller("SaveController",function($log,pouchDB,$scope)
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


$scope.put = function(){
  var data={
    "_id":Math.random().toString(36).substring(7),
    "fullname": $scope.fullname,
    "hobby":$scope.hobby,
    "date":new Date().toJSON()
  };

  var db=pouchDB("badre");
  return db.put(data).then(function(){
      $scope.fullname="";
      $scope.hobby="";
      return  db.allDocs({include_docs:true}).then(function(response){
        $scope.product=response;
        $log.log(response);
        return response;
      }).catch(function(e){
        $log.log(e);});
    }).catch(function(e){
      $log.log(e);
    });
  };
});

})();
