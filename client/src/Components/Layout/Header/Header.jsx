import {useEffect, useState} from "react";
import {Slider} from "../../Slider/Slider"
import {SliderDots} from "../../SliderControls/SliderDots"
import {HeaderSliderTrack} from "../SliderTracks/HeaderSliderTrack";
import {mockFetch} from "../../functions/mock-fetch-function";
import {CommonPage} from "../../Patterns/PagePattern";
import {HeaderTitle} from "./HeaderTitle";

export const Header = (props) => {
    
    const [items, setItems] = useState([]);
    const [activeBox, setActiveBox] = useState(0);
    const [toggled, setToggled] = useState(false);   //FOR FURTHER DEVELOMPENT

    
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
    

    //  const setToggledFunc = () => {
    //      setToggled(false)
    //  }

     
    const activeBoxToggler = (index) => {
        setActiveBox(index);
    } 


    
    
    // const activeLightBoxToggler = (index) => {
    //     setActiveBox(index);
    //     setToggled(true);
    //     setTimeout(setToggledFunc, 300);
    // }   
    //    FOR FURTHER DEVELOPMENT OF LIGHTNING EFFECT


    return(
    <header className={`header ${!toggled ? "u-screen-bottom-darken" : "u-screen-brighten"}`}>
        <Slider 
        Track={HeaderSliderTrack}  
        items={items} 
        perPage={1} 
        activeBox={activeBox}/>  
        <CommonPage>
        <SliderDots 
        activeBoxToggler={activeBoxToggler} 
        items={items}/>
        <>
        {items.map((item, i) => 
         <HeaderTitle item={items[i]} classes={i === activeBox ? "active" : null} key={`key-${i}`}/> )}
        {/* <HeaderTitle item ={items.find((item, i) => i === activeBox)}/> */}
        </>
        </CommonPage>  
    </header>)
}