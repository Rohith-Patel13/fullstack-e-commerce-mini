import "./index.css";

const Update = () => (
  <form className="formContainer">

    <h1>Update Password</h1>

    <label htmlFor="emailIdNum">Email</label>
    <input value="" type="email" id="emailIdNum" />

    <label htmlFor="passwordIdNumOld">Current Password</label>
    <input value="" type="password" id="passwordIdNumOld" />

    <label htmlFor="passwordIdNumNew">New Password</label>
    <input value="" type="password" id="passwordIdNumNew" />

    <label htmlFor="passwordIdNumNewConfirm">Confirm Password</label>
    <input value="" type="password" id="passwordIdNumNewConfirm" />
    
    <button type="button" className="Btn">Update Password</button>
  </form>
);

export default Update;
