import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div className="container mx-auto">
              <div className="row">
                <div className="card p-0 mx-auto col-10 col-md-8 col-lg-5">
                  <div className="card-header text-white bg-primary">
                    <h2>Register</h2>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" name="name" value="John"></input>
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" name="email" value="@doe"></input>
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" value="123"></input>
                      <label htmlFor="password2">Confirm Password</label>
                      <input type="password" className="form-control" name="password2" value="123"></input>
                      <div className="row">
                        <div className="col-10 mx-auto pt-3 text-center">
                          <button type="submit" className="btn btn-primary text-uppercase col-12">
                            register
                          </button>
                        </div>
                        <div className="form-group">
                          <p className="text-muted">
                          Already a member? Please 
                          <Link to="/">
                          Login
                          </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Register;