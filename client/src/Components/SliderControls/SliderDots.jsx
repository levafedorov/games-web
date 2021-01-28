import {useEffect, useState} from "react";

export const SliderDots = (props) => {

    const {items} = props;
    const [activeToggler, setActiveToggler] = useState(0); 
    const [auto, setAuto] = useState(true);
    const [timeID, setTimeID] = useState(undefined);
     
    const handleToggle = ({target: {dataset: {index}}}) => {
        setActiveToggler(+index);
        if(timeID){
            clearInterval(timeID);
            setTimeID(undefined);
        }
        setTimeID(setTimeout(() => {
            setAuto(true);
        }, 20000));

        setAuto(false);
    }


    useEffect(() => {
       const {activeBoxToggler} = props;
       activeBoxToggler(activeToggler);
    }, [activeToggler]);
    

    useEffect(() => {
        let timeID = setTimeout(() => {
             if(auto){
                if(activeToggler !== items.length - 1){
                    setActiveToggler(activeToggler + 1);
                }else{
                    setActiveToggler(0);
                }
             }
        }, 8000);
        
        return () => {
            clearTimeout(timeID);
        }
    });


    return(<div className="slider-dots">{
        items.map((_, i) => 
        <button className={`slider-dots__dot ${i === activeToggler ? "slider-dots__dot--active" : null}`} data-index={i} key={`key-${i}`} onClick={handleToggle}></button>)
    }</div>)
}