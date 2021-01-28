import {useEffect, useState} from "react";
import {Button} from "../Buttons/Button";


export const SliderArrows = (props) => {

    const {items, isTodos, perPage} = props;
    const [activeToggler, setActiveToggler] = useState(1); 
    const lastIndex = items.length - perPage
     
    const handleToggleLeft = (ev) => {      
         if(activeToggler){
            setActiveToggler(activeToggler - 1)
         }
    }

    const handleToggleRight = (ev) => {
        if(activeToggler !== lastIndex){
            setActiveToggler(activeToggler + 1)
         }
    }


    useEffect(() => {
        const {activeBoxToggler} = props;
        activeBoxToggler(activeToggler);
    }, [activeToggler]);
    


    return(<div className="slider-arrows">
        {isTodos ? 
        <Button classes="control-btn control-btn__todos">
            todos
        </Button>
         : null  }
            <Button classes={`control-btn control-btn__left ${!activeToggler ? "control-btn--finish" : null}`} 
            fn={handleToggleLeft}/>
            <Button classes={`control-btn control-btn__right ${activeToggler === lastIndex ? "control-btn--finish" : null}`}
            fn={handleToggleRight}/>
    </div>)
}


SliderArrows.defaultProps = {
    perPage: 1
}