import {GenresItem} from "../../GenresItem/GenresItem";


export const GenresSliderTrack = (props) => {
    
    const {boxesWidth, activeBox, items} = props;
    
    const boxesStyle = {width: `${boxesWidth}%`}
    const tracksStyle = {width: `${boxesWidth * items.length}%`,
                         transform: `translateX(-${100 / items.length * activeBox}%)`}



    return(
    <div className="genres-slider__slider-track" style={tracksStyle}>
        {items.map((item, i) =>
         <div className={`genres-slider__item-box ${i === activeBox ? "genres-slider__item-box--active" : null}`} key={`item-${i}`} style={boxesStyle}>
             { <GenresItem genres={item} classes={i === activeBox ? "active" : null}/> }
        </div>)}
    </div>)
}


GenresSliderTrack.defaultProps = {
    perPage: 0,
    items: ["first", "second", "third", "forth", "fifth"]
}
