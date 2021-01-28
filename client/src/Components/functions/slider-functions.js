


  export const elemsWidthCalculator = (sliderWidth, amountPerPage) => {
    let elemsWidth;

    if(typeof sliderWidth === 'number' && 
       typeof amountPerPage === 'number'){
        
        if(sliderWidth >= 1200){
            elemsWidth = +(100/amountPerPage).toFixed(5); 
        }else if(sliderWidth < 1200 && sliderWidth >= 950){
            elemsWidth = +(100/3).toFixed(2);
        }else if(sliderWidth < 950 && sliderWidth >= 550){
            elemsWidth = +(100/2).toFixed(2);
        }else{
            elemsWidth = 100;
        }
     
       return elemsWidth;

    }else{
        return 0;
    }
}

export const elemsWidthCalculatorLong = (sliderWidth, amountPerPage) => {
    let elemsWidth;

    if(typeof sliderWidth === 'number' && 
       typeof amountPerPage === 'number'){
        
        if(sliderWidth > 800){
            elemsWidth = +(100/2).toFixed(5); 
        }else{
              elemsWidth = 100;
          }
        // else if(sliderWidth < 950 && sliderWidth > 550){
        //     elemsWidth = +(100/2).toFixed(5);
        // }else{
        //     elemsWidth = 100;
        // }
     
       return elemsWidth;

    }else{
        return 0;
    }
}




