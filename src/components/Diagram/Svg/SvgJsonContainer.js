import React from 'react';
import Svg from './Svg';

class SvgJsonContainer extends React.Component {
  
   
//     let data = this.props.data
    
//     console.log(data.children[0].attributes.fill)

//     let initialState = {}
//     function createState(data) {
//       for (let i = 0; i < data.length; i++) {
//         initialState[`style${i}`] = data[i].attributes.fill;
//       }
//     }
//     createState(data.children)
    
//     this.state = initialState
//     console.log(initialState)
//   }

// componentDidMount() {
  
  constructor(props) {
    super(props);
    this.state = {
      
	globalFocus: "noFilter"
    }

     
  
  }

     blur = () => {
	     this.setState({ globalFocus: "unFocus"})
}

unblur = () => {
    this.setState({globalFocus: "noFilter"})
}

    

  render() {
    
    
    
    return (

    <Svg 
      xmlns='http://www.w3.org/2000/svg'
      viewBox={this.props.viewBox}
      width={this.props.width}
      height={this.props.height}
      id={this.props.id}
      groups={this.props.data.children}
      wholeJson={this.props.data}
      pathStyleState={this.state}
      style={this.props.style}
      preserveAspectRatio={this.props.preserveAspectRatio}
	blur={this.blur}
	unblur={this.unblur}
	filter={this.state.globalFocus}
      
    >
    </Svg> 

    )}

  }

    export default SvgJsonContainer ;
