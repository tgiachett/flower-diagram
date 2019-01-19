import "./breakpoints.css";
import React from 'react';
import SvgJsonContainer from './Svg/SvgJsonContainer';
import Li from './Li/Li';
const data = require('./Gold_Rayed_Lily_of_Japan_Trace_Full_new_version_optimized_afterEffects2_withHighlightsMadeTranslusent.json');

class Diagram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            externalHighlightTriggerState: ''
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
    
render() {
  return (
      <div className='container' style={{marginTop:'1vh'}}>
        <div >
          <SvgJsonContainer
            className="imageContainer"
            viewBox="0 0 1973 3200"
            width="493"
            height="800"
            preserveAspectRatio="xMidYMid meet"
            style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            data={data}
            externalHighlightTriggerState={this.state.externalHighlightTriggerState}
          />
          
        </div>  
      <div>
        <ul>
          {data.children.filter(v => v.attributes.id !== 'Gold Rayed Lily of Japan').map((g, i) => {
              return (
                  <Li
                    key={i}
                    externalHighlightTriggerOn={this.externalHighlightTriggerOn}
                    externalHighlightTriggerOff={this.externalHighlightTriggerOff}
                    id={g.attributes.id}
                    
                  >
                    
                    

                  </Li>
              );
          })}
        </ul>
      </div>
      </div>
    
  );
  }
}

export default Diagram;
