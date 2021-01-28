
import {useState, useEffect} from "react";
import {mockFetch} from "../functions/mock-fetch-function";
import {Platform} from "../Platforms/Platform";

export const HeaderInfo = props => {
    const {isPlatforms, text} = props;
    const [platforms, setPlatforms] = useState([]); 

    useEffect(() => {
        if(isPlatforms){
            mockFetch();
            fetch("/compatible-platforms")
            .then(value => value.json())
            .then(value => {
            console.log(value);
            setPlatforms(value)});
        }
    }, []);

    return (
        <div className="section-header-info">
            <h2 className="section-header-info__text typo-primary typo-primary--grey">
             {text}
            </h2>
            <div className="section-header-info__platforms">
                {platforms.map((item, i) => <Platform type={item} key={`key-${i}`}/>)}   
            </div>
        </div>
    )
}