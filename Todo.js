import React, { Component , PropTypes} from 'react';
import './css/bootstrap.css';

export class Todo extends Component {

  state={
    inputText : '',
    arrList : []
  }

  static PropType = {
    ButtonColor : PropTypes.string.isRequire,
    }

  ChangeText = (event) => {
    this.setState({inputText : event.target.value});
  }

  keyPress = (event) => {
    if(event.key==='Enter'){
      this.submitList();
    }
  }

  deleteList=(index)=>{
    const resule = this.state.arrList;
    resule.splice(index,1);
    this.setState({
      arrList : resule
    });
  }



  submitList = () =>{
    this.setState({
      arrList : this.state.arrList.concat([this.state.inputText]),
      inputText : ''
    })
  }


    render(){
      return(
        <div className="card clearfix">
        <div className="to-do-box">
            <h1 className="Title">Todo Box</h1>
            <div className="form-box">
              <input type="text" className="input input" onKeyPress={this.keyPress} onChange={this.ChangeText} value={this.state.inputText}></input>
              <button className="bb-input button" style={{background : this.props.ButtonColor}} onClick={this.submitList}>Button</button>
              <br></br>
              <h2>{this.state.inputText}</h2>
              <br></br>
                <div className="list-box">
                  <h2>{this.state.arrList.map((value,index)=>
                    {
                      return(
                        <div key={index+value} className="list-item">
                        <div className="text-list">{value}</div>
                        <div className="bb-action" onClick={this.deleteList.bind(this,index)}>x</div>

                        </div>
                      );
                    })}</h2>
                </div>

            </div>
        </div>

        </div>
      );
  }
}
