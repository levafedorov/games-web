import {SectionHeader} from "../Layout/SectionHeader/SectionHeader";
import {HeaderInfo} from "../HeaderInfo/HeaderInfo";
import {Slider} from "../Slider/Slider";
import {useEffect, useState} from 'react';
import {elemsWidthCalculatorLong} from '../functions/slider-functions';
import {mockFetch} from "../functions/mock-fetch-function";
import {PreorderSliderTrack} from "../Layout/SliderTracks/PreorderSliderTrack";
import {PreorderSlider} from "../PreorderSlider/PreorderSlider";
import {SliderArrows} from "../SliderControls/SliderArrows";

export const PreorderSection = () =>{
   
  const [items, setItems] = useState([]);
  const [activeBox, setActiveBox] = useState(0);


  useEffect(() => {
    try {
        mockFetch();
        fetch("/preorder-items").then((value) => {
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
        <section className="preorder-section">
           <SectionHeader> 
             <HeaderInfo isPlatforms={false} text={"Ultricies quisque"}/>
             <SliderArrows 
             isTodos={true} 
             items={items}
             activeBoxToggler={activeBoxToggler}
             />
           </SectionHeader>
           <PreorderSlider>
           <Slider 
            Track={PreorderSliderTrack}  
            items={items} 
            perPage={3} 
            activeBox={activeBox}
            elemsWidthCalculator={elemsWidthCalculatorLong}
            />
            </PreorderSlider>
        </section>
    )
}