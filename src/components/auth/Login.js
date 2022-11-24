import React from 'react';
import "./Login.css";


export class Login {
  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <img
            src="../assets/svg/logo-st.svg"
            alt="logo"
          />
          <button  className="btn-login">
            Ingrese para continuar
          </button>
        </div>
      </div>
    );
  }
}

export default Login