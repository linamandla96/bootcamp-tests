function countAllFromTown(regNum,loc){
  var countArr = regNum.split(',')
  //console.log(countArr)
  var countNumArr = [];
    for(var i = 0; i<countArr.length;i++){
    if(countArr[i].trim().startsWith(loc)){
     countNumArr.push(countArr[i].trim());
     
    }
    }
    return countNumArr.length;
  }
    
    