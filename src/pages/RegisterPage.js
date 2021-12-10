import React from 'react';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    }
    render() {
        return (<div className="bg-red-200 w-full min-h-screen">
            <h1 className="font-serif font-bold text-2xl text-center p-5">Register</h1>
            <form className="flex flex-col ml-auto mr-auto bg-blue-200 p-2 place-items-center w-1/3 rounded-md">
                <input type="text" value={this.state.email} className="w-3/5 rounded-md mb-3 p-1 font-mono mt-3" placeholder="Email" onChange={this.handleEmailChange}/>
                <input type="text" value={this.state.username} className="w-3/5 rounded-md mb-3 p-1 font-mono" placeholder="Username" onChange={this.handleUsernameChange}/>
                <input type="password" value={this.state.password} className="w-3/5 rounded-md mb-3 p-1 font-mono" placeholder="Password" onChange={this.handlePasswordChange}/>
                <input type="password" value={this.state.passwordConfirmation} className="w-3/5 rounded-md mb-3 p-1 font-mono" placeholder="Re-enter Password" onChange={this.handlePasswordConfirmationChange}/>
                <button className="w-3/5 rounded-md mb-3 p-1 font-mono bg-blue-500 text-white">Register</button>
            </form>
        </div>);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handlePasswordConfirmationChange(event) {
        this.setState({passwordConfirmation: event.target.value});
    }
    confirmPassword(password) {
        if (this.state.password.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")) {
            return true;
        }

        
    }

}

export default RegisterPage;