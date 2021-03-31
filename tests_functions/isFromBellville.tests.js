describe('isFromBellville' , function(){
    it('should return true if registionNum starts with CY' , function(){
        assert.equal(isFromBellville('CY'),true);
    });
});