import {useEffect, useState} from "react";
import {Slider} from "../../Slider/Slider"
import {SliderDots} from "../../SliderControls/SliderDots"
import {HeaderSliderTrack} from "../SliderTracks/HeaderSliderTrack";
import {elemsWidthCalculator} from "../../functions/slider-functions";
import {mockFetch} from "../../functions/mock-fetch-function";



export const Header = (props) => {
    
    const [items, setItems] = useState([]);
    const [activeBox, setActiveBox] = useState(0);
   
    
    useEffect(() => {
    try {
        mockFetch();
        fetch("/header-items").then((value) => {
            return value.json();
        }).then((value) => {
            setItems(value);
        });
    }
    catch(err){
        console.error(err.stack, "Error is in Header fetch");
    }
    }, []);
    
     
    const activeBoxToggler = (index) => {
        setActiveBox(index);
    } 
    

    return(
    <header className="header">
        <Slider Track={HeaderSliderTrack}  items={items} perPage={1} elemsWidthCalculator={elemsWidthCalculator}/>  
        <SliderDots activeBoxToggler={activeBoxToggler} items={items}/>  
    </header>)
}