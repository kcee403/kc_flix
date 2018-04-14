import React, {Component} from 'react';
import axios from 'axios';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
        <div>
            <h4>Enter your Contact Data</h4>
            <form>
                <input type="text" name="Name" placeholder="Your Name" />
                <input type="text" name="Email" placeholder="Your Email" />
                <input type="text" name="Street" placeholder="Street" />
                <input type="text" name="Postal" placeholder="Postal" />
                
            </form>
        </div>
    );
  }
}
