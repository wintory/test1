import React, { Component , PropTypes} from 'react';
import './Todo.css';

export class Todo extends Component {

  state={
    inputText : '',
    inputStatus : '',
    arrList : [],
    arrStatus : [],
    pass : 0,
    fail : 0

  }

  static PropType = {
    ButtonColor : PropTypes.string.isRequire,
    }

  ChangeText = (event) => {
    this.setState({inputText : event.target.value});
  }

  ChangeStatus = (event) => {
    this.setState({inputStatus : event.target.value});
  }

  keyPress = (event) => {
    if(event.key==='Enter'){
      this.submitList();
    }
  }

  deleteList=(index)=>{
    const textDelete = this.state.arrList;
    const statusDelete = this.state.arrStatus;
    if(this.state.arrStatus==='pass'){
      this.setState({
        pass : this.state.pass-1
      });
    }else if(this.state.arrStatus==='fail'){
      this.setState({fail : this.state.fail-1})
    }

    textDelete.splice(index,1);
    statusDelete.splice(index,1);
      this.setState({
        arrList : textDelete,
        arrStatus : statusDelete,
      });


  }



  submitList = () =>{

    if(this.state.inputText===''||this.state.inputStatus===''){
      alert("ใส่ให้ครบสิไอ่โง่");
    }else{

    if(this.state.inputStatus ==='pass'){
          this.setState({
            pass:this.state.pass+1,
            inputText : '',
          inputStatus : '',
          arrList : this.state.arrList.concat([this.state.inputText]),
          arrStatus : this.state.arrStatus.concat([this.state.inputStatus])

        })
      }else if(this.state.inputStatus ==='fail'){
          this.setState({fail:this.state.fail+1,
            inputText : '',
          inputStatus : '',
          arrList : this.state.arrList.concat([this.state.inputText]),
          arrStatus : this.state.arrStatus.concat([this.state.inputStatus])
        })
        }else {
            alert("สเตตัสมีเเค่pass/fail");
        }

      }
  }



    render(){
      return(
        <div className="card clearfix">
        <div className="to-do-box">
            <img src="./45100.jpg"></img>
            <h1 className="Title">เฟิสอยากทำอะไรดี</h1>
            <div className="form-box">
            <table>
            <tr>
              <td><h2>work: </h2></td>
              <td><input type="text" className="input input" onChange={this.ChangeText} value={this.state.inputText} ></input></td>
              <td><h2>status: </h2></td><td><input type="text" className="input input" onChange={this.ChangeStatus} value={this.state.inputStatus} ></input></td>
              <td><button className="bb-input button" style={{background : this.props.ButtonColor}} onClick={this.submitList}>Button</button></td>
              </tr>
              </table>
              <br></br>

                <div className="list-box">
                <table>
                <tr><td>
                <h2>{this.state.arrList.map((value,index)=>
                  {
                    return(
                      <div key={index+value} className="list-item">
                      <div className="text-list">{value}</div>

                      </div>
                    );
                  })}</h2>
                  </td><td>
                  <h2>{this.state.arrStatus.map((value,index)=>
                    {
                      return(
                        <div key={index+value} className="list-item">
                        <table>
                        <tr><td>
                        <div className="text-list">{value}</div></td><td>
                          <div className="bb-action" onClick={this.deleteList.bind(this,index)}>x</div>
                          </td></tr>
                          </table>
                        </div>
                      );
                    })}</h2>

                    </td></tr>
                    </table>
                </div>

                <h3>Pass: {this.state.pass}</h3>
                <h3>Fail: {this.state.fail}</h3>

            </div>

        </div>

        </div>
      );
  }
}
