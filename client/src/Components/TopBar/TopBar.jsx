import {Logo} from "../Logo/Logo";
import {Icon} from "../Icons/Icon";

export const TopBar = () => {


    return(
        <div className="top-bar">
            <div className="top-bar-layout">
                 <div className="top-bar-layout__left">
                     <Logo />
                 </div>
                 <div className="top-bar-layout__right">
                     <label className="top-bar__search" href="#" for="checkbox-top">
                         <input type="checkbox" id="checkbox-top"/>
                         <input type="text" className="top-bar__search-field" name="search-top" placeholder="Search..."/>
                     </label>
                     <a className="top-bar__profile" href="#">
                     <div className="top-bar__amount-messages"><span className="amount">3</span></div></a>
                 </div>
            </div>
        </div>
    )
}