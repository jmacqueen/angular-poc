describe('AccountService', function() {

  beforeEach(module('app'));

  it('should return the static testObject', inject(function(AccountService) {

    expect(AccountService.testObject).toEqual({test: 'test'});

  }));

});
