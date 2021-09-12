import React from 'react';
import ColorPicker from'./component/ColorPicker'
import SizeSetting from'./component/SizeSetting'
import Result from'./component/Result'
import Reset from'./component/Reset'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {color:'red',fontSize:15}
        this.handleChange = this.handleChange.bind(this) 
        this.onChangeSize=this.onChangeSize.bind(this);
        this.handleReset= this.handleReset.bind(this)
    }
   handleChange(color){
      
       this.setState({color:color})
   }
   onChangeSize(value){
 
        if(this.state.fontSize>8 && this.state.fontSize<36)
            this.setState({fontSize:this.state.fontSize-value})
        else
        {
                 if(this.state.fontSize<=8 )
                 {
                    if(value<0)
                    {
                        this.setState({fontSize:this.state.fontSize-value})
                    }
                  
                 }
                    
                 else if(this.state.fontSize>=36)
                 {
                    if(value>0) 
                        {
                            this.setState({fontSize:this.state.fontSize-value})
                        }
                 }            
        }
   }
   handleReset(){
      
         this.setState({color:'red',fontSize:15})
         
   }
    render() {
        return(
        <div className='container mt-50'>
             <div className='row'>
             <div className="col-6">
                    <ColorPicker  color={this.state.color}
                        onColorSetting={this.handleChange}
                    />
            </div>
            <div className="col-6">
                    <SizeSetting fontSize={this.state.fontSize} onChangeFontSize={this.onChangeSize}/>
                    <Reset  onhandleReset={this.handleReset} />
            </div>
            <div className="col-12">
                    <Result  fontSize={this.state.fontSize} color={this.state.color}  />
            </div>
            </div>
        </div>
        )
    }
}
export default App;
 
  