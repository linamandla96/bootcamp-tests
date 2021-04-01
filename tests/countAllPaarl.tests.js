describe('countAllPaarl' , function(){
    it('should return all registration numbers from paarl' , function(){
        assert.equal(countAllPaarl("CJ 678 543"),"CJ 678 543");
    });
    it('should return all registration numbers from Town' , function(){
        assert.equal(countAllPaarl("CJ 678 543","CJ67890"),"CJ 678 543","CJ67890");
    });
});