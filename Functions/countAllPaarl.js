function countAllPaarl(regNum){
    var paarl = regNum.split(', ')
    console.log(regNum);
    var regNumArr =[];
      for(var i = 0;i<paarl.length;i++){
        
      if(paarl[i].startsWith('CJ')){
        //console.log(regNum[i]);
        regNumArr.push(paarl[i]);
         }
        
      }
       return regNumArr;
    }