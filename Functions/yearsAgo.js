function yearsAgo(year){
    var theDate = new Date();
     
     //console.log(ago);
      let diff = theDate.getFullYear() - year;
      //console.log(diff);
      return diff;
      
     
    }