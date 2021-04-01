describe('isFromBellville' , function(){
    it('should return false if registration number does not starts with CY' , function(){
        assert.equal(isFromBellville('CA'),false);
    });
    it('should return true if registration number starts with CY' , function(){
        assert.equal(isFromBellville('CY'),true);
    });
});