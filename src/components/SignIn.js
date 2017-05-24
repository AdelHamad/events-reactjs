import React from "react"
import {Link} from "react-router"
// Home page component
export default class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            signinUsername: "",
            signinPassword: "",
            signupUsername:"",
            signupEmail:"",
            signupPassword:"",
        }

    }

    componentWillMount(){


    }

    render() {
        return (
            <div>
                <form className="signin-form" onSubmit={e=>this.handleSigninSubmit(e)}>
                    username or email:
                    <input type="text"
                       onChange={e => this.setState({signinUsername:e.target.value})}
                       value={this.state.signinUsername}/>
                    <br/>password:
                    <input type="password"
                       onChange={e => this.setState({signinPassword:e.target.value})}
                       value={this.state.signinPassword}/>
                    <br/>
                    <input type="submit"/>
                </form>

                <form className="signup-form">
                    email:
                    <input type="text"
                       onChange={e => this.setState({signupEmail:e.target.value})}
                       value={this.state.signupEmail}/>
                    <br/>username:
                    <input type="text"
                       onChange={e => this.setState({signupUsername:e.target.value})}
                       value={this.state.signupUsername}/>
                    <br/>password:
                    <input type="password"
                       onChange={e => this.setState({signupPassword:e.target.value})}
                       value={this.state.signupPassword}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>

        );
    }

    handleSigninSubmit(e){
        e.preventDefault()

        const user = {
            username : this.state.signinUsername,
            password : this.state.signinPassword
        }


        this.props.signinReq(user)

    }

}