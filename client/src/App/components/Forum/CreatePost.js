import React, { Component } from 'react';
import { FaCommentAlt } from 'react-icons/fa'

class CreatePost extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12">
                <div className="card mt-3">
                    <div className="card-header">
                        <h5 className="text-muted"> <span><FaCommentAlt /> </span>  New Post</h5>
                    </div>
                    <div className="card-body">
                    <form method="POST">
                    <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        className="form-control"
                        name="message"
                        rows="3"
                         />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CreatePost;