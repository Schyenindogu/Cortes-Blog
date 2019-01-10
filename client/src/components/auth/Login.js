import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import { loginUser } from '../../actions/authActions'

// @desc Local state handles input for password, name and errors. Errors are passed in as props from error reducer.

class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/home')
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/')
    }

    if(nextProps.errors){
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.loginUser(user, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="register-log">
        <div className="container">
          <div className="m-auto display-3">
            <h1 className="text-center display-3 lead small mt-4">
              Log In
            </h1>
            <p 
              className=" lead
                text-center mb-4"
            >
              Sign in to comment and like posts
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                  type="text"
                  className={classnames('form-control form-control-lg bg-dark text-light', { 'is-invalid': errors.username
                  })}
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                  {errors.username && (
                    <div className="invalid-feedback">
                    {errors.username}</div>
                  )}
              </div>
              <div className="form-group">
                <input 
                  type="password"
                  className={classnames('form-control form-control-lg bg-dark text-light', { 'is-invalid': errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
              </div>
              <input 
                type="submit"
                className="btn btn-lg btn-primary mb-4"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))