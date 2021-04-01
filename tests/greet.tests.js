describe('greet' , function(){
    it('should greet Janine' , function(){
        assert.equal(greet('Janine'),'Hello, Janine');
    });
    it('should greet lina' , function(){
        assert.equal(greet('lina'),'Hello, lina');
    });
});