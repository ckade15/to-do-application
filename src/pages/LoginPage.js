import React from 'react';

const loginInfo = {
  username: 'user',
  password: 'password',
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      loginAttempt: false
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
    <div className="w-full bg-red-300 min-h-screen border-none flex ">    
      <form className="flex flex-col w-2/4 place-content-center bg-red-100 m-auto justify-center place-items-center p-4 rounded-md" onSubmit={this.handleSubmit}>
        <h1 className="font-mono text-5xl text-center mt-5 text-blue-900 font-bold mb-5">To-Do List Login</h1>
        <p className="font-mono text-lg w-1/2 text-center mb-3">Please enter your username and password below</p>
        <input type="text" placeholder="username" className="rounded-md mb-3 p-1 font-mono w-1/2" value={this.state.username} onChange={this.handleUser}/>
        <input type="password" placeholder="password" className="rounded-md mb-3 font-mono p-1 w-1/2" value={this.state.password} onChange={this.handlePassword}/>
        <p className="text-red-700">{this.state.loginAttempt === true && (this.state.username !== loginInfo.username || this.state.password !== loginInfo.password) ?"Please enter valid login credentials" : ""}</p>
        <button type="submit" className="bg-gray-500 rounded-md font-mono p-2 font-bold border-2 border-red-200 text-red-200 w-1/5 mt-3" onClick={this.handleSubmit}>Login</button>
      </form>
    </div>);
  }

  handleUser(e){
    this.setState({
      username: e.target.value
    });
    console.log(this.state.username);
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    });
    console.log(this.state.password);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.username === loginInfo.username && this.state.password === loginInfo.password){
      this.setState({
        loggedIn: true
      });
      this.props.history.push('/');
    }else{
      this.setState({
        loginAttempt: true
      });
    }
  }
}


export default LoginPage;