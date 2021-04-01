describe('yearsAgo' , function(){
    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(yearsAgo(1990),31);
    });
    
    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(yearsAgo(2014),7);
    });
    
});