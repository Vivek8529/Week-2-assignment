import React from "react";

function Highordercomponent(hocComponent){
    return class extends React.Component {
        render(){
            return(
                <div>
                    <h1>Inside HOC</h1>
                    <hocComponent />
                </div>
            )

        }
    }
}
export default Highordercomponent;