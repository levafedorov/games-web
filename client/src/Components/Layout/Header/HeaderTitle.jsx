import {Button} from "../../Buttons/Button";
import {formForGallery} from "../../functions/transform";

export const HeaderTitle = (props) => {

  
    const {item, classes} = props;
    
    const bg = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/elems/typo-header-${formForGallery(item)}.png)`
    }

    let headerBoxClass = "header__title-box header__title-box--";
    headerBoxClass += classes

    return(
        <div className={headerBoxClass}>
            <div className="header__title-image u-margin-bottom-small" style={bg}></div>
            <div className="u-centerer">
                <Button classes={"btn-classic typo-secondary typo-secondary--white"}>Purchase</Button>
            </div>
        </div>
    )
}