
export const SectionHeader = (props) => {

   

    return(
        <div className="section-header u-margin-bottom-medium">
            <div className="section-header__left">{props.children[0]}</div>
            <div className="section-header__right">{props.children[1]}</div>
        </div>
    )
}