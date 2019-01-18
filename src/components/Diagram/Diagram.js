import "./breakpoints.css";
import React from 'react';
import SvgJsonContainer from './Svg/SvgJsonContainer';
const data = require('./Gold_Rayed_Lily_of_Japan_Trace_Full_new_version_optimized_afterEffects2_withHighlightsMadeTranslusent.json');


class Profile extends React.Component {

render() {
  return (
	  <div className='container' style={{marginTop:'1vh'}}>
        <div >
          <SvgJsonContainer className="imageContainer" viewBox="0 0 1973 3200" width="493" height="800"  preserveAspectRatio="xMidYMid meet" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}   data={data} />
        </div>  
        
      </div>
    
  );
  }
}

export default Profile;
