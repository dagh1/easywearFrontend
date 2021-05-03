import axios from 'axios';
import React, { Component } from 'react';

class chatBot extends Component {

    state={
        chat: [],
        msg: ''
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({msg: e.target.value});
    }
    handleSend = () => {
        if(this.state.msg != ''){
            axios.post('http://127.0.0.1:5000/user', {'msg': this.state.msg})
            .then( res => {
                let ch = this.state.chat;
                ch.push({from:'our',message: this.state.msg});
                ch.push({from:'bot',message: res.data});
                this.setState({chat:ch, msg:''});
                console.log(this.state);
            })
            .catch( err => console.log(err));
            this.forceUpdate();
        }
        let interval = window.setInterval(function(){
            var elem = document.getElementById('chatt');
            elem.scrollTop = elem.scrollHeight;
            window.clearInterval(interval);
        },5000)
    }

    render() {
        return (
            <div class="container">
                <div id='chatt' style={{ overflow:'scroll', overflowX:'hidden', height: '55vh' }}>
                    {
                        this.state.chat.map((msg) => {
                            if(msg.from == 'bot'){
                                return <div style={{flexWrap:'wrap',fontSize:'15px',fontFamily:'cursive',
                                marginBottom:'10px',borderRadius:'100px',marginRight:'500px',
                                padding:'30px',paddingBottom:'20px',width:'20%',
                                backgroundColor:'red',color:'white',float:'left',
                                display:'block'}}>{msg.message} </div>
                            }
                            else{
                                return <div style={{flexWrap:'wrap',fontSize:'15px',fontFamily:'cursive',
                                marginBottom:'10px',borderRadius:'100px',marginLeft:'500px',
                                padding:'30px',paddingBottom:'20px',width:'15%',backgroundColor:'#FFE4E1',
                                float:'right',display:'block',color:'black'}}>{msg.message}</div>
                            }
                        }) 
                    }
                </div>
                <div>
                    <input class="form-control" type="text" name="msg" 
                        onChange={(e) => this.handleChange(e)} 
                        value={this.state.msg}
                        style={{marginLeft:'100px',width:'70%',float:'left' ,marginRight:'20px' }} />
                    <button onClick={() => this.handleSend()} class="btn btn-primary" style={{paddingLeft:'25px',paddingRight:'25px'}}>Send</button>
                </div>
                
            </div>
        );
    }
}

export default chatBot;