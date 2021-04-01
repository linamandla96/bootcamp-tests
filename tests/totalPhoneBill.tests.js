describe('totalPhoneBill' , function(){
    it('should return  the total phone  bill  for all data provided' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
    it('should return the total phone  bill for 1 sms and 1 call ' , function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40');
    });
    
});