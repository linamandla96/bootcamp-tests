describe('countRegNumber' , function(){
    it('should return number of   three registion numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
    it('should return number of  two registion number in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'),2);
    });
});