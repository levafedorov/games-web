import {MenuItem} from "./MenuItem";


export const FooterMenu = () => {
      
   const items = ["first", "second", "third", "forth", "fifth"];
   const colors = {
       color0: "#79102e",
       color1: "#629c53",
       color2: "#f9e876",
       color3: "#43cbfd",
       color4: "#2c1f51",
   }
    return(
        <div className="footer-menu">
           {items.map((item, i) =>  <MenuItem title={item} color={colors[`color${i}`]}/>)}
        </div>
    )
}

