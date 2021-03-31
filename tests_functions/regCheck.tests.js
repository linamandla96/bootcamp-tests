describe('regCheck' , function(){
    it('should return true if the registration is for GP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('should return true if the registration is for GP' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });

    it('should return true if the registration is for GP' , function(){
        assert.equal(regCheck('CY 189-012', 'CY'),false);
    });

    it('should return true if the registration is for GP' , function(){
        assert.equal(regCheck('CY 189-012', 'ND'),false);
    });
});


