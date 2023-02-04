import React from "react";
class Renderprops extends React.Component{
    render(){
        return (
            <div>
                <h1>This is a child component</h1>
                {this.props.render()}
            </div>
        )
    }
}

export default Renderprops;