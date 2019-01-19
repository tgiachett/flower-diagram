import React from 'react';
import Group from './Group';


class GroupContainer extends React.Component {

 constructor(props) {
	super(props);
     this.state = {
	 fillOpacityState: 0,
	 active: 0

		  };

 }



    
 reveal = () => {
  if (this.props.thisGroup.attributes.id !== "Gold Rayed Lily of Japan") {
     this.setState({
	 fillOpacityState: 1,
	 active: 1
     });
     this.props.blur();
     }
    };

 hide = () => {
     // filter out the base image
     if (this.props.thisGroup.attributes.id !== "Gold Rayed Lily of Japan") {
     this.setState({
         fillOpacityState: 0,
         active: 0
     });
         this.props.unblur();
     }
    };

    // (this.props.externalHightlightState === 1) ? this.reveal() : this.hide()

// componentDidUpdate() {
//   // Typical usage (don't forget to compare props):
//     if (this.state.active === 0) {
//       if (this.props.externalHighlightState === 1) {
//           this.reveal(); }} else {
//               this.hide(); }
    //   }

 render() {

    return (

        //external highlight trigger
        // {if (this.props.externalHighlightTriggerState === 1) {
        //     this.reveal();} else {
        //         this.hide();
        //     }}

        
	<Group
	fill={this.props.fill}
	filter={(this.state.active === 1) ? 'noFilter' : this.props.filter}
	focus={this.state.active}
	thisGroup={this.props.thisGroup}
        id={this.props.id}
	display={this.props.display}
	triggerHide={this.hide}
	triggerReveal={this.reveal}
	fillOpacity={(this.props.thisGroup.attributes.id === "Gold Rayed Lily of Japan") ? 1 : this.state.fillOpacityState}
        externalHighlightTriggerState={this.props.externalHighlightTriggerState}
        >
			
	</Group>
	    
    

    );}
}

	

    export default GroupContainer ;