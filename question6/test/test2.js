'use strict';

describe('Save Service', function() {
    var service, apiServiceSpy;

    beforeEach(module('ehealth'));

    beforeEach(function() {
        apiServiceSpy = jasmine.createSpyObj('apiServiceSpy', ['Load']);

        module(function($provide) {
            $provide.value('SaveService', apiServiceSpy);
        });
    });

    beforeEach(inject(function($q, SaveService) {
        service = SaveService;

        apiServiceSpy.Load.and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve('Remote call result');
            return deferred.promise;
        });
    }));

    it('should get data.', function() {
        // Arrange

        // Act
        var data = service.Load();
        //console.log(data);
        //$scope.$apply();
        // Assert
        expect(data).not.toBeNull();
    });
});
