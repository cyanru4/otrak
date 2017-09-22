 var assert = require('chai').assert
  describe('otrak', function() {
    //var chai = require('chai').assert
    var M = require('./manager.js')
    describe('login', function() {
    it('login(ccc, 1111)=undefined', function() {
      assert.isUndefined(M.login('ccc', '1111'));
    });
    it('login(ccc, 1234567).id=ccc', function() {
        assert.equal('ccc', M.login('ccc', '1234567').id);
    });    
  });
});