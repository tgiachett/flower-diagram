import React from 'react';

class Li extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white"
        };
    }

    highlightTerm = (e) => {
        //trigger highlight 'On' up chain then down to flower component
        this.props.externalHighlightTriggerOn(e);
        //local color trigger
        this.setState({
            backgroundColor: "#FFA500"
        });
        
    };

    deHighlight = (e) => {
        //trigger highlight 'Off' up chain then down to flower component
        this.props.externalHighlightTriggerOff(e);
        //local color trigger off
        this.setState({
            backgroundColor: "white"
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.focusidelement !== this.props.focusidelement)
        if (prevProps.focusidelement !== this.props.focusidelement) {
             switch(this.props.focusidelement) {
  case this.props.id:
                 this.setState({
            backgroundColor: "#FFA500"
        });
    break;
  case !this.props.id || '':
                this.setState({
            backgroundColor: "white"
        });
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
