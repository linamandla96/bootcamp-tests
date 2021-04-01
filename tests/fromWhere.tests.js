describe('fromWhere' , function(){
    it('should return Paarl if registration numbers start with CJ' , function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });
    it('should return Cape Town if registration nuber start with CA' , function(){
        assert.equal(fromWhere('CA'),'Cape Town');
    });
});