import {useEffect, useState} from "react";

export const SliderDots = (props) => {
    const [activeToggler, setActiveToggler] = useState(0); 
    
    const handleToggle = ({target: {dataset: {index}}}) => {
        setActiveToggler(index);
    }

    useEffect(() => {
       const {activeBoxToggler} = props;
       activeBoxToggler(activeToggler);
    });

    const {items} = props;
    return(<div class="slider-dots">{
        items.map((_, i) => 
        <button className = "slider-dots__dot" data-index={i} key={`key-${i}`} onClick={handleToggle}>btn</button>)
    }</div>)
}