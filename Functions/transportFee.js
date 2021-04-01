function transportFee(price){

    //var transportFee = price.startsWith('mo');
    //  var transport = price.startsWith('after');
    //console.log(transportFee);
      if(price.startsWith('mo')){
         return 'R20';
         }
     else if(price.startsWith('after')){
      return 'R10';
      }
      else{
      return 'free';
     }
    }