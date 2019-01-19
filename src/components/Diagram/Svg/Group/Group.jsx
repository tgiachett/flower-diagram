import React from 'react';

class Group extends React.Component {  

    render() {

    return (

	<g
	fill={this.props.fill}
	i={this.props.key}
	id={this.props.id}
	style={{filter:`url(#${this.props.filter})`}}
	display={this.props.display}
	fillOpacity={this.props.fillOpacity}
	onMouseEnter={this.props.onMouseEnter}
	onMouseLeave={this.props.onMouseLeave}>

	{this.props.thisGroup.children.map((p, pi) => {
			return (
			    <path
			    key={pi}
			    id={p.attributes.id}
			    d={p.attributes.d}
			    fill={p.attributes.fill}
			    />
			)})}
			
	</g>
	    
    

    )}
}

	

    export default Group ;
