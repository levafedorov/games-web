import {React, Component} from "react";




export class Slider extends Component{
   
  state = {
    boxesWidth: 0,
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
    //elems width in %;
    const {elemsWidthCalculator, perPage, learnPerPage} = this.props;
    const boxesWidth =  elemsWidthCalculator(width, perPage);
    learnPerPage(Math.floor(100/boxesWidth));
    this.setState({boxesWidth});
 }


    render(){  
        const {Track, items, activeBox} = this.props;
        const {boxesWidth} = this.state;
        
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
  perPage:0,
  learnPerPage: () => {}
}