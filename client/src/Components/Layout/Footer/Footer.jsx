import {FooterLayout} from "./FooterLayout";
import {Media} from "./Media/Media";
import {FooterMenu} from "./FooterMenu/FooterMenu";

export const Footer = (props) => {
    

    return(
        <footer className="footer">
            <div className="footer-top">
            <FooterLayout>
                <Media />
                <FooterMenu/>
            </FooterLayout>
            </div>
            <div className="footer-bottom">  
                <span className="footer-bottom__copyright typo-tertiary">
                    Copyright 
                </span>
            </div>
        </footer>
    )
}