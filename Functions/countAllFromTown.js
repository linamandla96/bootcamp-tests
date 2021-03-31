function countAllFromTown(regNumString,loc){
    var regNumberArray = regNumString.split(',');
    var townNumArr = [];
      
    for(var i = 0; i<regNumberArray.length; i++){  
      //var regNum = regNumberArray[i].trim();
     if(regNumberArray[i].trim().startsWith(loc)){
       townNumArr.push(regNumberArray[i].trim());
       }
      
    }
    return townNumArr;  
    }
    
    