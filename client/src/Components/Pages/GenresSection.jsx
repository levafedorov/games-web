import {SectionHeader} from "../Layout/SectionHeader/SectionHeader";
import {HeaderInfo} from "../HeaderInfo/HeaderInfo";
import {Slider} from "../Slider/Slider";
import {useEffect, useState} from 'react';
import {mockFetch} from "../functions/mock-fetch-function";
import {GenresSliderTrack} from "../Layout/SliderTracks/GenresSliderTrack";
import {GenresSlider} from "../GenresSlider/GenresSlider";
import {SliderArrows} from "../SliderControls/SliderArrows";
import {devideArray} from "../../Components/functions/transform";

export const GenresSection = () =>{
   
  const [items, setItems] = useState(['state']);
  const [activeBox, setActiveBox] = useState(0);
  
  
  useEffect(() => {
     try {
         mockFetch();
         fetch("/genres").then((value) => {
             return value.json();
         }).then((value) => {
             setItems(value);
         });
     }
     catch(err){
         console.error(err.stack, "Error is in Header fetch");
     }
    setItems(["newstate"]);
    }, []);
    

  const activeBoxToggler = (index) => {
        setActiveBox(index);
    } 
  
  const devidedArr = devideArray(items, 4);
 

    return(
        <section className="genres-section">
           <SectionHeader> 
             <HeaderInfo isPlatforms={true} text={"Ligula porttitor metus:"}/>
             <SliderArrows 
             isTodos={false} 
             items={devidedArr}
             activeBoxToggler={activeBoxToggler}
             />
           </SectionHeader>
           <GenresSlider>
           <Slider 
            Track={GenresSliderTrack}  
            items={devidedArr} 
            perPage={4} 
            activeBox={activeBox}
            />
            </GenresSlider>
        </section>
    )
}