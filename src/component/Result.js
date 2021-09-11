import React from 'react';

class Result extends React.Component{
    setUX(color,fontSize)
    {
        return{
            borderColor: color,
            color:color,
            fontSize: fontSize
        }
    }
    render() {
      const fontSize=this.props.fontSize;
      const color=this.props.color
        return (
            <div >
            <p>Color : {color} - Fontsize : {fontSize} px</p>
            <div id="content" style={
              this.setUX( color,fontSize)
              } >
              Nội dung setting
            </div>
          </div>
        )
    }
}
export default Result;