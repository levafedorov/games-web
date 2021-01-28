import {formForGallery} from "../../functions/transform";
import {NewGamesItem} from "../../NewGamesItem/NewGamesItem";

export const NewSliderTrack = (props) => {
    
    const {items, boxesWidth, activeBox} = props;
    
    const margin = 0.5;
    const boxesStyle = {width: `${boxesWidth}%`,
                        marginRight: `${margin}%`}
    const tracksStyle = {width: `${(boxesWidth + margin) * items.length}%`,
                         transform: `translateX(${(-100 / items.length * activeBox)}%)`}
     
    
  
    

    return(
    <div className="new-slider__slider-track" style={tracksStyle}>
        {items.map((item, i) =>
         <div className={`new-slider__item-box ${i === activeBox ? "new-slider__item-box--active" : null}`} key={`item-${i}`} style={boxesStyle}>
             <NewGamesItem info={item}/>    
        </div>)}
    </div>)
}


NewSliderTrack.defaultProps = {
    perPage: 0
}
