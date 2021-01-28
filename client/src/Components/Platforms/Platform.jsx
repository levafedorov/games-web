import {Icon} from "../Icons/Icon";


export const Platform = (props) => {

    const {type} = props;

    

    return (
       <div className="platform typo-tertiary--grey">
          <Icon type={type}/>
          {type}
       </div>
    )
} 


Platform.propsDefault = {
    type:""
}