import React from 'react';

class Li extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white"
        };
    }


    changeColor = (color) => {
        this.setState({
            backgroundColor: color
        });
    }


    highlightTerm = (e) => {
        //trigger highlight 'On' up chain then down to flower component
        this.props.externalHighlightTriggerOn(e);
        //local color trigger
        this.changeColor("#EE82EE");
        
    };

    deHighlight = (e) => {
        //trigger highlight 'Off' up chain then down to flower component
        this.props.externalHighlightTriggerOff(e);
        //local color trigger off
       this.changeColor("White");
    }

    componentDidUpdate(prevProps, prevState) {
       
        if (prevProps.focusidelement !== this.props.focusidelement) {
             switch(this.props.focusidelement) {
  case this.props.id:
                 this.changeColor("#EE82EE");
    break;
  case !this.props.id || '':
             this.changeColor("White");
    break;
  default:
        }
        }
    }
    
render() {
  return (
        
      <li
        style={{
            backgroundColor: this.state.backgroundColor,
            marginBottom: '1vh'
               }}
        onMouseOver={this.highlightTerm}
        onMouseOut={this.deHighlight}
        id={this.props.id}
        focusidelement={this.props.focusidelement}
      >
        {this.props.id}  
      </li>
  );
};
};

export default Li;
