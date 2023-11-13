import "./index.css";

const Login = () => (
  <form className="formContainer">

    <h1>Login</h1>

    <label htmlFor="emailId">Email</label>
    <input value="" type="email" id="emailId" />

    <label htmlFor="passwordId">Password</label>
    <input value="" type="password" id="passwordId" />
    
    <button type="button" className="Btn">LOGIN</button>
  </form>
);

export default Login;
