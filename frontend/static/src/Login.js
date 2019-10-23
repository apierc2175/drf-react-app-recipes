import React, {Component} from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// she is hard coding before, we would have a this .state and constructor and inside of our state we would have username email and password, then when we call the login method instead of hardcoding we would use this.state and have inputs
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: 'admin',
      email: 'aidanwpierce@gmail.com',
      password: 'safepass1'
    }

    axios.post('/api/v1/rest-auth/login/', user)
    .then(res => {
      console.log(res);
      // localStorage.setItem()
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Login</button>
      </form>
    )
  }
}

export default Login;
