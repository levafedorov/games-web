import {Icon} from "../Icons/Icon";
import {formForGallery} from "../functions/transform";

export const PreorderItem = (props) => {

   const {genres, developer, year, date ,platforms, url} = props.info;
   const bg = {backgroundImage:`url(${process.env.PUBLIC_URL}/images/image-pre-${formForGallery(url)}.jpg)`}
   const imageBg={backgroundImage:`url(${process.env.PUBLIC_URL}/elems/typo-pre-${formForGallery(url)}.png)`}
   const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return(
        <div className="preorder-games-item" style={bg}>
            <div className="preorder-games-item__cover">  
                    <div className="preorder-games-item__main">
                        <div className="preorder-games-item__image" style={imageBg}></div>   
                        <div className="preorder-games-item__date typo-tertiary typo-tertiary--white">{date.toLocaleString('en-US', dateOptions)}</div>                
                    </div>
                    <div className="preorder-games-item__add typo-tertiary typo-tertiary--grey">
                        <p className="preorder-games-item__extra">
                            <span className="genres">{genres.join()}</span>-
                            <span className="date-developer">{`${developer},${year}`}</span>
                        </p>   
                        <div className="preorder-games-item__platforms">
                            {platforms.map((item, i) => <Icon type={item} key={`key-${i}`}/>)}
                        </div>                
                    </div>    
       
            </div>
        </div>
    )
}


PreorderItem.defaultProps = {
    info : {
    genres: ["adventure", "action", "arcade"],
    developer: "Beseda",
    year: 2012,
    date: new Date("2019-12-15"),
    platforms: ["xbox", "personal computer", "playstation"],
    url:"bloodlines 2",
  }
}