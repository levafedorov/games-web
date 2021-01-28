


export const Button = (props) => {
   
 const {classes, fn} = props;     
    return (
    <button type="button" className={`btn ${classes}`} onClick={fn}>
       {props.children}  
    </button>)
}


Button.defaultProps = {
   fn: () => {}
}