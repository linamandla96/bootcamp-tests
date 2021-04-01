function findItemsOver(list,list2){

    var threshhold = [];
    for( const object of list){
    //var products = list[i];
      if (object.qty>list2){
        threshhold.push(object);
      }
     
    }
  
  return threshhold;
  
  }