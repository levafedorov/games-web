import {React, Component} from "react";




export class Slider extends Component{
   
  state = {
     width: 0,
  }
   

   componentDidMount(){
     this.resizeHandler();
     window.addEventListener('resize', this.resizeHandler);
   }


   componentWillUnmount(){
    window.removeEventListener('resize', this.resizeHandler);
  }


  resizeHandler = (ev) => {
    let width;
    width = this.sliderRef.offsetWidth;
    this.setState({width});
 }


    render(){  
        const {Track, elemsWidthCalculator, items, perPage, activeBox} = this.props;
        const {width} = this.state;
        //elems width in %;
        const boxesWidth =  elemsWidthCalculator(width, perPage);
        
        return(
          <div className="slider" ref={ref => this.sliderRef = ref}>
             <Track boxesWidth={boxesWidth} items={items} activeBox={activeBox}/> 
          </div>
        );
    }
}


Slider.defaultProps = {
  elemsWidthCalculator: (...args) => 100, 
  items:[],
  perPage:0
}