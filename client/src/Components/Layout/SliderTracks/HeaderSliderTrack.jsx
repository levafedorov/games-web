import {formForGallery} from "../../functions/transform";

export const HeaderSliderTrack = (props) => {
    
    const {items, boxesWidth, activeBox} = props;

    const boxesStyle = {width: `${boxesWidth}%`}
    const tracksStyle = {width: `${boxesWidth * items.length}%`,
                         transform: `translateX(-${100 / items.length * activeBox}%)`}
     
    
    const urls = items.map(item => `/images/image-header-${formForGallery(item)}.jpg`);
    

    return(
    <div className="header__slider-track" style={tracksStyle}>
        {urls.map((item, i) =>
         <div className={`header__item-box ${i === activeBox ? "header__item-box--active" : null}`} key={`item-${i}`} style={boxesStyle}>
             <div className="header__item" style={{backgroundImage:`url('${item}')`}}></div>     
        </div>)}
    </div>)
}