import {SectionHeader} from "../Layout/SectionHeader/SectionHeader";
import {HeaderInfo} from "../HeaderInfo/HeaderInfo";
import {Slider} from "../Slider/Slider";
import {useEffect, useState} from 'react';
import {elemsWidthCalculator, elemsCicle} from '../functions/slider-functions';
import {mockFetch} from "../functions/mock-fetch-function";
import {NewSliderTrack} from "../Layout/SliderTracks/NewSliderTrack";
import {NewSlider} from "../NewSlider/NewSlider";
import {SliderArrows} from "../SliderControls/SliderArrows";

export const NewSection = () =>{
   
  const [items, setItems] = useState([]);
  const [activeBox, setActiveBox] = useState(0);
  const [perPage, setPerPage] = useState(0);


  useEffect(() => {
    try {
        mockFetch();
        fetch("/new-items").then((value) => {
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

  const learnPerPage = (num) => {
     setPerPage(num);
  }

    return(
        <section className="new-section">
           <SectionHeader> 
             <HeaderInfo isPlatforms={true} text={"Ligula porttitor metus:"}/>
             <SliderArrows 
             isTodos={false} 
             items={items}
             activeBoxToggler={activeBoxToggler}
             perPage={perPage}
             />
           </SectionHeader>
           <NewSlider>
           <Slider 
            Track={NewSliderTrack}  
            items={items} 
            perPage={4} 
            activeBox={activeBox}
            learnPerPage={learnPerPage}
            elemsWidthCalculator={elemsWidthCalculator}
            />
            </NewSlider>
        </section>
    )
}