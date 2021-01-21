import {formForGallery} from "../../functions/transform";

export const HeaderSliderTrack = (props) => {
    
    const {items, boxesWidth} = props;
    const boxesStyle = {width: `${boxesWidth}%`}
    const tracksStyle = {width: `${boxesWidth * items.length}%`}
     
    console.log(boxesWidth, items);
    
    const urls = items.map(item => `/images/image-header-${formForGallery(item)}.jpg`);
    console.log(urls);

    return(
    <div className="header__slider-track" style={tracksStyle}>
        {urls.map((item, i) =>
         <div className="header__item-box" key={`item-${i}`} style={boxesStyle}>
             <div className="header__item" style={{backgroundImage:`url('${item}')`}}></div>     
        </div>)}
    </div>)
}