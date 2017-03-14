import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.creatClass({
	render: function(){
		return (
				<p>Hello, {this.props.greet}!</p>
		       );
	}
});

ReactDOM.render(
		<div>
			<HelloWorld greet="World"/>
		</div>,
		document.querySelector("#container")
	       );

