describe('isWeekday' , function(){
    it('should check if day is a weekday not weekend day' , function(){
        assert.equal(isWeekday('Tuesday'),true);
    });

    it('should check if day is a weekday not weekend day' , function(){
        assert.equal(isWeekday('Sunday'),false);
    });

});