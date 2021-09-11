import React from 'react';

class SizeSetting extends React.Component{
  constructor(props) {
    super(props)
    this.onChangeSize=this.onChangeSize.bind(this);
}
   onChangeSize(value){
      this.props.onChangeFontSize(value)
   }
   
    render() {
      const fontSize=this.props.fontSize;
        return (
         
            <div >
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">{fontSize}px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(1)}>Giảm</button> 
                <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(-1)}>Tăng</button>
              </div>
            </div>
          </div>
        )
    }
}
export default SizeSetting;