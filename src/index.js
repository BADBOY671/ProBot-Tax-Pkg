function tax(args1,args3=5){
    


  if(isNaN(args1)){
      
  throw new Error('Only Numbers')
  }
    let protax= Math.round(Number(args1)*args3/100)
                          

      
    return protax
  }


module.exports = tax
