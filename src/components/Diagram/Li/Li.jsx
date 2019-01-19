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
    
render() {
  return (
        
      <li
        style={{backgroundColor: this.state.backgroundColor}}
        onMouseEnter={this.highlightTerm}
        onMouseLeave={this.deHighlight}
        id={this.props.id}
      >
        {this.props.id}  
      </li>
  );
};
};

export default Li;
