import React from 'react';
import { Link } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      clicked: false,
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmitButton() {
    this.setState({ clicked: true });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: [event.target.value] })
  }
  render() {

    const { greetingMessage = 'Hi there' } = this.props;
    const { id = 0 } = this.props.match.params;
    const { username, password } = this.state;
    return (
      <div>
        <div><Link to="/">Voltar</Link></div>
        <div><Link to="/about">About</Link></div>
        <h2> Users </h2>
        <p> {greetingMessage}, my Id is {id}</p>
        <form>
          <label htmlFor="input-username">Username</label>
          <input
            name="username"
            type="text"
            id="input-username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor="input-password">Password</label>
          <input
            name="password"
            type="text"
            id="input-password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          
          <a onClick={this.handleSubmitButton}>Xablau</a>
        </form>

        <div>{ (this.state.clicked) ? <StrictAccess user={{ username:username, password:password }} /> : null }</div>
      </div>
    )
  }
}

export default Users;
