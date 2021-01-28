
export const MenuItem = (props) => {

    const {color, title} = props;
    return(
        <div className="footer-menu__item">
            <h2 className="footer-menu__title typo-secondary typo-secondary--bold u-margin-bottom-small" style={{color}}>
                {title}
                <span className="decoration" style={{backgroundColor: color}}></span>
            </h2>
            <ul className="footer-menu__list">
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">donec nulla</a></li>
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">vehicula class</a></li>
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">urna consequat</a></li>
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">adipiscing elit</a></li>
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">mollis dictumst</a></li>
                <li className="footer-menu__link-box"><a href="#" className="footer-menu__link typo-tertiary">dolor sit</a></li>
            </ul>
        </div>
    )
}

