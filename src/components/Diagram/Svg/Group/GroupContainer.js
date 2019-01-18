import React from 'react';
import Group from './Group'


class GroupContainer extends React.Component {

 constructor(props) {
	super(props);
	this.state = {fillOpacityState: 0 };
    
 }
    
 reveal = () => {
	
	    this.setState({fillOpacityState: 1});
    };

 hide = () => {
	
	    this.setState({fillOpacityState: 0}); 
    };

     
 render() {

    return (

	    <Group thisGroup={this.props.thisGroup} key={this.props.key} id={this.props.id} display={this.props.display} onMouseLeave={(this.props.thisGroup.attributes.id === "g65") ? null : this.hide} onMouseEnter={(this.props.thisGroup.attributes.id === "g65") ? null : this.reveal} fillOpacity={(this.props.thisGroup.attributes.id === "g65") ? 1 : this.state.fillOpacityState}>
			
		    </Group>
	    
    

    )}
}

	

    export default GroupContainer ;
