import React, { useState } from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state)
            .then(res => {
                //console.log(res.data.payload);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/friendslist");
                //is there a way to do this without using class components?
            })
            .catch(err => console.log({err}))

    }
    render() {
        return (
            <form>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label>Password: </label>
                <input
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.login}>Log In</button>
            </form>
        );
    }
}

export default Login;