describe('countAllFromTown' , function(){
    it('should return all registration number in the string that is for stellie' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('should return 0 if there is no registration number for stellie' , function(){
        assert.equal(countAllFromTown('CY 567','CL'),0);
    });
    
});