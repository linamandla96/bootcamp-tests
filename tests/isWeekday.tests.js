describe('isWeekday' , function(){
    it('should return monday to friday if day is a weekday not weekend day' , function(){
        assert.equal(isWeekday('Tuesday'),true);
    });

    it('should return sunday o saturday if the day is not a weeeday' , function(){
        assert.equal(isWeekday('Sunday'),false);
    });

});