describe('transportFee' , function(){
    it('should ruturn  R20 for morning shift' , function(){
        assert.equal(transportFee('morning'),'R20');
    });
    it('should ruturn R10 for afternoon shift' , function(){
        assert.equal(transportFee('afternoon'),'R10');
    });
});