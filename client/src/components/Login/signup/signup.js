import React, { Component } from 'react';
import '../signup/signup.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { registerUser } from '../../../actions/authActions';


class Register extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        
       
        e.preventDefault();
    
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
       
        this.props.registerUser(newUser, this.props.history);
      }
      render() {
        const { errors } = this.state;
       
      
          
        return (

        <div className="formContainer">
       
        <form noValidate className="formStyle" onSubmit={this.onSubmit}>
                   <h1  className="title"> Créer votre profil </h1>
                    <div className = "">
                    <div className="signup-title">Nom * </div>
                    </div>
                    <input className="input-style" type="text"
                     placeholder="Name"
                     name="name"
                     value={this.state.name}
                     onChange={this.onChange}
          
                    />
                     
                    <span className="error-m"> {errors.name}</span>
                     

                    <div className = "">
                    <div className="signup-title">Email *</div>
                    </div>
                    <input className="input-style" type="text" 
                    
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}

                    />
                  <span className="error-m"> {errors.email}</span>
                    <div className = "">
                    <div className="signup-title">Mot de passe  *</div>
                    </div>
                    <input className="input-style" type="password"
                     placeholder="Password"
                     name="password"
                     value={this.state.password}
                     onChange={this.onChange}
                    />
                  <span className="error-m"> {errors.password}</span>
                    <div className = "">
                    <div className="signup-title">Confirmer le mot de passe *</div>
                    </div>
                    <input className="input-style" type="password"
                     placeholder="Confirm Password"
                     name="password2"
                     value={this.state.password2}
                     onChange={this.onChange}
                    />
                     <span className="error-m"> {errors.password2}</span>
                

                   
        <div className="submit">
        <div><input type="submit" value ="S'inscrire" className="submit-button" /></div>
       
        </div>
        </form>        
         </div>
      )
     }
 }
 
 Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
   
  });
  
  export default connect(mapStateToProps, { registerUser })(withRouter(Register));







       