import React from 'react';



class ColorPicker extends React.Component {
  constructor(props){
    super(props);
      this.state={colors:['red','blue','yellow','purple']}
      this.handleColorChange=this.handleColorChange.bind(this);}
    handleColorChange(e){
  
      this.props.onColorSetting(e.target.style.backgroundColor)
    }
    showColor(color)
    {
      return {backgroundColor : color}
    }
    render()
    { 
      const colorState=this.props.color;
      const colors=this.state.colors;
      const elements=colors.map((color,index)=> <span key={index} className={colorState=== color ? 'actived' :''}
       style={this.showColor(color)} 
       onClick={this.handleColorChange}
       ></span>)
        return (     
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Color Picker</h3>
              </div>
                <div className="panel-body">
                       {elements}
                      
              </div>
            </div>
        )
    }
}
export default ColorPicker;