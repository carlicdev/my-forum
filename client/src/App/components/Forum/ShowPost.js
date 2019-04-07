import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import  { timestamp } from './../../../utils/helpers';

class ShowPost extends Component {

    render() {
        const { date, message } = this.props.post;
        const { name } = this.props.author;
        const member = this.props.author.date;
        const { index } = this.props;
        const calendar = timestamp.calendar(date);
        const memberSince = timestamp.date(member);
        return (
            <div className="row mb-1">
              <div className="col-12 col-md-3 col-lg-2 bg-primary text-center">
                <div className="card bg-primary m-0 text-center text-white" style={{border: 'none'}}>
                <div className="mx-auto">
                <FaUserCircle size={'3em'}/>
                </div>
                <h3>{name}</h3>
                   <small>Registered: {memberSince}</small>
                </div>
              </div>
              <div className="col-12 col-md-9 col-lg-10 p-0">            
                <div className="card my-0 ml-0 p-0">
                <div className="card-header">
                    <small>{calendar}</small>
                </div>
                <div className="card-body">
                    <p>{message}</p>
                </div>
                <div className="card-footer text-right py-1">
                    <small className="text-muted">#{index}</small>
                </div>
                </div>
              </div>
            </div>
        );
    }
}

export default ShowPost;