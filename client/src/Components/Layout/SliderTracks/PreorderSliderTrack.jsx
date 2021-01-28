import {formForGallery} from "../../functions/transform";
import {PreorderItem} from "../../PreorderItem/PredorderItem";

export const PreorderSliderTrack = (props) => {
    
    const {items, boxesWidth, activeBox} = props;
    
    const initial = boxesWidth !== 100 ?  +(100 / items.length / 2).toFixed(3) : 0; 
    const boxesStyle = {width: `${boxesWidth}%`}
    const tracksStyle = {width: `${boxesWidth * items.length}%`,
                         transform: `translateX(${-(100 / items.length * activeBox) + initial}%)`}
     
    
  
    

    return(
    <div className="preorder-slider__slider-track" style={tracksStyle}>
        {items.map((item, i) =>
         <div className={`preorder-slider__item-box ${i === activeBox ? "preorder-slider__item-box--active" : null}`} key={`item-${i}`} style={boxesStyle}>
             <PreorderItem info={item}/>    
        </div>)}
    </div>)
}


PreorderSliderTrack.defaultProps = {
    perPage: 0
}
