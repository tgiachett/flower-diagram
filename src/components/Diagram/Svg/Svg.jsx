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
    style={this.props.style}
    preserveAspectRatio={this.props.preserveAspectRatio}
    version="1.1">

	    <filter id="unFocus">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
	    </filter>
	    <filter id="noFilter">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
	    </filter>


	{this.props.groups.map((g, i) => {
	    return (
		<GroupContainer
		fill={g.attributes.fill}
		filter={this.props.filter}
		blur={this.props.blur}
		unblur={this.props.unblur}
		thisGroup={g}
		key={i}
		id={g.attributes.id}
		display={g.attributes.display}
                  externalHighlightTriggerState={this.props.externalHighlightTriggerState}
                  passFocusIdUp={this.props.passFocusIdUp}
		/>
		    
	    );})}
    </svg>

    );}
}

	

    export default Svg ;
