import {formForGallery} from "../functions/transform"


export const Icon = (props) => {

    const {type} = props

    const bg = {backgroundImage: 
   `url(${process.env.PUBLIC_URL}/icons/icon-${formForGallery(type)}.png)`}

    return (
       <div className="icon" style={bg}>
       </div>
    )
} 


Icon.propsDefault = {
    type:""
}