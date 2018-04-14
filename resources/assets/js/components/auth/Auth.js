import React, { Component } from 'react';

import axios from 'axios';
class Auth extends Component {
  state = {
    controls: {
        email: {
          elementType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Mail Address',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        }
        password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: 'Password Address',
          },
          value: '',
          validation: {
            required: true,
            minLength: 7,
          },
          valid: false,
          touched: false,
        }
    }
  }
    render() {
      return (
        <div> <form> </form> </div>
      )
    }
}
