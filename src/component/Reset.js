import React from 'react';

class Reset extends React.Component{
    constructor(props) {
        super(props);
        this.onHandleReset=this.onHandleReset.bind(this);
    }
    onHandleReset(){
        this.props.onhandleReset()
     }
    render() {
            return(
                <div>
                      <button type="button" className="btn btn-primary" onClick={()=>this.onHandleReset()}>reset</button>
                </div>
            )
    }
}
export default Reset