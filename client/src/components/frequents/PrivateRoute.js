import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, auth, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      auth.user.username === 'Solidus' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/home" />
      )
    }
  />
 )

 PrivateRoute.PropTypes = {
   auth: PropTypes.object.isRequired
 }

 const mapStateToProps = ({ auth }) => ({
   auth
 })

 export default connect (mapStateToProps)(PrivateRoute)