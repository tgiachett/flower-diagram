import React from 'react';
import Group from './Group';


class GroupContainer extends React.Component {

 constructor(props) {
	super(props);
     this.state = {
	 fillOpacityState: 0,
	 active: 0,

		  };

 }


 reveal = (e) => {
     
     if (this.props.thisGroup.attributes.id !== "Gold Rayed Lily of Japan") {
     this.setState({
	 fillOpacityState: 1,
	 active: 1
         
         
     });
      this.props.blur();
       if (e !== undefined) {
             this.props.passFocusIdUp(e);
          }
     }
    };

 hide = (e) => {
     // filter out the base image
     if (this.props.thisGroup.attributes.id !== "Gold Rayed Lily of Japan") {
     this.setState({
         fillOpacityState: 0,
         active: 0
     });
         this.props.unblur();
         //skips passing foucus id up if the svg is not the source of the trigger
          if (e !== undefined) {
             this.props.passFocusIdUp(e, false);
          }
         
     }
    };


    componentDidUpdate(prevProps, prevState) {
  // only run reveal/hide without onMouse if the state of the trigger changes
        if (prevProps.externalHighlightTriggerState !== this.props.externalHighlightTriggerState) {

            switch(this.props.externalHighlightTriggerState) {
  case this.props.id:
                this.reveal();
    break;
  case !this.props.id || '':
                this.hide();
    break;
  default:
    
}
           
        }
    }

    
 
 render() {

    return (

        
	<Group
	fill={this.props.fill}
        filter={(this.state.active === 1) ? 'noFilter' : this.props.filter}
	focus={this.state.active}
	thisGroup={this.props.thisGroup}
        id={this.props.id}
	display={this.props.display}
	onEvent={this.reveal}
        outEvent={this.hide}
	fillOpacity={(this.props.thisGroup.attributes.id === "Gold Rayed Lily of Japan") ? 1 : this.state.fillOpacityState}
          externalHighlightTriggerState={this.props.externalHighlightTriggerState}
          
        >
			
	</Group>
	    
    

    );}
}

	

    export default GroupContainer ;
