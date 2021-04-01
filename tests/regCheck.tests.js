describe('regCheck' , function(){
    it('should return true if the registration is for GP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('should return false if the registration is not for GP' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });

});


