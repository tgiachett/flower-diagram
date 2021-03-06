import React from 'react';
import SvgJsonContainer from './Svg/SvgJsonContainer';
import Li from './Li/Li';
const data = require('./Gold_Rayed_Lily_of_Japan_Trace_Full_new_version_optimized_afterEffects2_withHighlightsMadeTranslusent.json');

class Diagram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            externalHighlightTriggerState: '',
            IdfromFocusElement: ''
        };
    }

    externalHighlightTriggerOn = (e) => {
        this.setState({
            externalHighlightTriggerState: e.target.id
        });
    }

    externalHighlightTriggerOff = (e) => {
        this.setState({
            externalHighlightTriggerState: ''
        });
    }

    passFocusIdUp = (e, a) => {
        if (a !== false) {
            this.setState({
            IdfromFocusElement: e.target.parentNode.id
        });
        } else {
            this.setState({
            IdfromFocusElement: ''
        });
        }
            
        return a;
    }
render() {
  return (
      <div style={{ marginTop:'2vh'}}>
        <div style={{marginRight: '1vh', float: 'left'}}>
        <ul>
          {data.children.filter(v => v.attributes.id !== 'Gold Rayed Lily of Japan').map((g, i) => {
              return (
                  <Li
                    key={i}
                    externalHighlightTriggerOn={this.externalHighlightTriggerOn}
                    externalHighlightTriggerOff={this.externalHighlightTriggerOff}
                    id={g.attributes.id}
                    focusidelement={this.state.IdfromFocusElement}
                    
                  >
                    
                    

                  </Li>
              );
          })}
        </ul>
      </div>
        <div style={{float: 'left'}}>
          <SvgJsonContainer
            className="imageContainer"
            viewBox="0 0 1973 3200"
            width="493"
            height="800"
            preserveAspectRatio="xMidYMid meet"
            style={{display: 'inline' }}
            data={data}
            externalHighlightTriggerState={this.state.externalHighlightTriggerState}
            passFocusIdUp={this.passFocusIdUp}
          />
          
        </div>  
      </div>
    
  );
  }
}

export default Diagram;
