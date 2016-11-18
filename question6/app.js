(function(){

  var app=angular.module('ehealth',['pouchdb']);

  app.controller("SaveController",function($log,pouchDB,$scope,$q,SaveService){

    $scope.product={};

    $scope.getAllDoc=function(){
      $q.all([SaveService.Load()]).then(function(alldata){
        //$log.log(alldata[0]);
        $scope.product=alldata[0];
      });

    };

    $scope.save = function(){
      var data={
        "_id":Math.random().toString(36).substring(7),
        "fullname": $scope.fullname,
        "hobby":$scope.hobby,
        "date":new Date().toJSON()
      };
      $q.all(SaveService.Store(data)).then(function()
      {
        $scope.fullname="";
        $scope.hobby="";
        $scope.getAllDoc();

      });
      // let promise = $q(function(resolve, reject){
      //   if(SaveService.Store(data))
      //   {
      //     resolve('Success!');
      //   }
      //   else{
      //     reject('Did not work');
      //   }
      // });
      // promise.then(function(result){
      //   //$log.log(result);
      //   $scope.fullname="";
      //   $scope.hobby="";
      //   return result;
      // });
    };
  });

  //Our Service to handle DB comms
  app.service('SaveService',function($log,pouchDB){

    return{
      Load: function(){
        var db=pouchDB("badre");
        return db.allDocs({include_docs:true}).catch(function(e){
          $log.log(e);
        })
      },

      //Save 'em all!
      Store:function(data){
        //var db=pouchDB("badre");
        var db=pouchDB("badre");
        return db.put(data).then(function(result){
        }).catch(function(e){
          $log.log(e);
        });
      }
    }

  });
})();
