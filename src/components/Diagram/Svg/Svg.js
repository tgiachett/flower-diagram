import React from 'react';
import GroupContainer from './Group/GroupContainer';

class Svg extends React.Component {


    
    
    render() {

    return (

    <svg
    xmlns={this.props.xmlns}
    viewBox={this.props.viewBox}
    width={this.props.width}
    height={this.props.height}
    id={this.props.id}
    style={this.props.style}
    preserveAspectRatio={this.props.preserveAspectRatio}
    version="1.1">

	{this.props.groups.map((g, i) => {
	    return (
		    <GroupContainer thisGroup={g} key={i} id={g.attributes.id} display={g.attributes.display}/>
		    
	    )})}
    </svg>

    )}
}

	

    export default Svg ;
