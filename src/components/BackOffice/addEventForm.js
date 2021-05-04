import axios from 'axios';
import React, { Component } from 'react';
import jwtDecode from "jwt-decode";


class addEventForm extends Component {
    constructor(props){
        super(props);
        const jwtToken = localStorage.getItem("jwt");
        this.state = {
            eventName:"",
            date_debut:"",
            date_fin:"",
            description:"",
            image_url:"",
            user_id: jwtDecode(jwtToken)._id,
        }

    }
    

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { eventName ,date_debut , date_fin , description, image_url , user_id } = this.state;
        const data = {
            eventName: eventName,
            date_debut: date_debut,
            date_fin: date_fin,
            description: description,
            image_url: image_url,
            user_id: user_id
        }
        console.log(data);
        axios.post("http://localhost:3100/api/event/addEvent", data).then((res) => {
            if(res){
                //alert("added");
                this.setState({
                    eventName:"",
                    date_debut:"",
                    date_fin:"",
                    description:"",
                    image_url:"",
                    user_id:""
                });
            }
        });
    };


    render() {
        return (
            <>
                <div style={{ marginLeft: 250 }} className="page-wrapper">
                    <div class="page-body-wrapper">
                        <div className="page-body">
                            <div className="container-fluid">
                                <h1>Create new event</h1>
                                <form style={{ marginTop: '40px'}} className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label>Event Name</label>
                                        <input type="text"
                                                className="form-control"
                                                name="eventName"
                                                placeholder="enter Name"
                                                value={this.state.eventName}
                                                onChange={this.handleInputChange}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Date Debut</label>
                                        <input type="date"
                                                className="form-control"
                                                name="date_debut"
                                                value={this.state.date_debut}
                                                onChange={this.handleInputChange}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Date Fin</label>
                                        <input type="date"
                                                className="form-control"
                                                name="date_fin"
                                                value={this.state.date_fin}
                                                onChange={this.handleInputChange}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text"
                                                className="form-control"
                                                name="description"
                                                placeholder="enter Description"
                                                value={this.state.description}
                                                onChange={this.handleInputChange}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file"
                                                className="form-control"
                                                name="image_url"
                                                placeholder="enter Description"
                                                value={this.state.image_url}
                                                onChange={this.handleInputChange}
                                                />
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={this.onSubmit} > 
                                        <i className="far fa-check-square"></i>
                                        &nbsp;Create
                                    </button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default addEventForm;