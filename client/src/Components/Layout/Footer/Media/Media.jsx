
import {Logo} from "../../../Logo/Logo";
import {Icon} from "../../../Icons/Icon";

export const Media = (props) => {
    
   
    const links = ["youtube", "ok", "facebook", "twitch", "twitter"];

    return(
       <div className="media">
           <Logo />
        <div className="media__links">
           {links.map((item, i) => <a href="#" className="media__link" key={`key-${i}`}>{<Icon type={item}/>}</a>)}    
        </div>
       </div>
    )
}