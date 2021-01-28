import {formForGallery} from "../functions/transform";

export const GenresItem = (props) => {
   
    const {genres, classes} = props;
    const genresL = genres.length;
    
    let type;
    switch(genresL){
       case 4 : type = "first";
       break;
       case 1 : type = "third";
       break;
    }

    return(
        <div className={`genres-item genres-item--${classes}`}>
                {genres.map((item, i) => 
               <div className={`genres-item__genre genres-item__genre--${type}`}
                    key={`key-${i}`}
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-section-${formForGallery(item)}.jpg)`}}>
                    <div className="genres-item__genre-cover">
                        <a href="#" className="genres-item__genre-link typo-secondary typo-secondary--grey">
                           {item} <span className="arrow-right"></span>
                        </a>
                    </div>
               </div>)} 
       </div>
    )
} 

GenresItem.defaultProps = {
    genres: ["adventure", "esport", "rpg", "action"]
}