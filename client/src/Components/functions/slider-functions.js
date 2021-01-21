


export const elemsWidthCalculator = (sliderWidth, amountPerPage) => {
    let elemsWidth;

    if(typeof sliderWidth === 'number' && 
       typeof amountPerPage === 'number'){
        
        if(sliderWidth > 800){
            elemsWidth = +(100/amountPerPage).toFixed(2); 
        }else if(sliderWidth < 800 && sliderWidth > 650){
            elemsWidth = +(100/3).toFixed(2);
        }else if(sliderWidth < 650 && sliderWidth > 400){
            elemsWidth = +(100/2).toFixed(2);
        }else{
            elemsWidth = 100;
        }
     
       return elemsWidth;

    }else{
        return 0;
    }
}