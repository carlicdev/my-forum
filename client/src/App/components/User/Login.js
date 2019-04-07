import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../../../context';

class Login extends Component {
  render() {
    return (
      <AppConsumer>
        {(value) => {
          const { logInEmail, logInPassword, handleChange } = value;
            return (
                    <div className="container mx-auto my-5">
                      <div className="row">
                        <div className="card p-0 mx-auto col-10 col-md-8 col-lg-5">
                          <div className="card-header text-white bg-primary">
                            <h2>Login</h2>
                          </div>
                          <div className="card-body">
                            <form method="POST">
                              <label htmlFor="logInEmail">Email</label>
                              <input type="email" className="form-control" name="logInEmail" value={logInEmail} onChange={handleChange.bind(this)}></input>
                              <label htmlFor="logInPassword">Password</label>
                              <input type="password" className="form-control" name="logInPassword" value={logInPassword} onChange={handleChange.bind(this)} ></input>
                              <div className="row">
                                <div className="col-10 mx-auto pt-3 text-center">
                                  <button type="submit" className="btn btn-primary text-uppercase col-12">
                                    login
                                  </button>
                                </div>
                              </div>
                              <div className="form-group">
                                <p className="text-muted">
                                  Not a member yet? Please 
                                  <Link to='/register/'>
                                    Register
                                  </Link>
                                </p>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
            )
        }}
      </AppConsumer>
    );
}
}

export default Login;