export const FooterLayout = (props) => {
    

    return(
        <div className="footer-layout">
            <div className="footer-layout__left">{props.children[0]}</div>
            <div className="footer-layout__right">{props.children[1]}</div>
        </div>
    )
}