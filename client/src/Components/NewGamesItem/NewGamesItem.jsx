import {Icon} from "../Icons/Icon";
import {formForGallery} from "../functions/transform";

export const NewGamesItem = (props) => {

   const {name, genres, developer, year, price, rate, platforms, url} = props.info;
   const bg = {backgroundImage:`url(${process.env.PUBLIC_URL}/images/image-cart-${formForGallery(url)}.jpg)`}
    return(
        <div className="new-games-item" style={bg}>
            <div className="new-games-item__cover">
                    <div className="new-games-item__info u-screen-bottom-grey">
                        <h3 className="new-games-item__name typo-secondary typo-secondary--white u-margin-bottom-small">{name}</h3>
                        <p className="new-games-item__extra">
                            <span className="genres typo-tertiary typo-tertiary--grey typo-tertiary--bold">{genres.join()}</span>
                            <span className="date-developer typo-tertiary typo-tertiary--grey u-margin-bottom-medium">{`${developer},${year}`}</span>
                        </p>
                        <div className="new-games-item__price typo-tertiary typo-tertiary--white">{`r$ ${(price).toPrecision(3)},00`}</div>
                        <div className="new-games-item__rate typo-tertiary typo-tertiary--white">{rate}</div>
                        <div className="new-games-item__platforms">
                            {platforms.map((item, i) => <Icon type={item} key={`key-${i}`}/>)}
                        </div>
                    </div>
            </div>
        </div>
    )
}


NewGamesItem.defaultProps = {
    info : {name: "Default Name Game",
    genres: ["adventure", "action", "arcade"],
    developer: "Beseda",
    year: 2012,
    price: 99.00,
    rate: 100,
    platforms: ["xbox", "personal computer"],
    url:""}
}