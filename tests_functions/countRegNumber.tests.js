describe('countRegNumber' , function(){
    it('should return number of  registionNum in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
});