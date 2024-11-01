import { useState } from "react";

 

const Register = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
   


    const validate = () => {
        const newErrors = {};
        if (!email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email is invalid';
        }
    
        if (!password) {
          newErrors.password = 'Password is required';
        } else if (password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert(
            "Register successful"
           
          );
          
        }
      };

  return (
 
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "40px" }}>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "16px" }}>
        <label>Email</label>
        <input className="input input-primary" type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}  />
        
        {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
      </div>
  
      <div style={{ marginBottom: "16px", paddingTop:'16px'}}>
        <label>Password</label>
        <input  className="input input-primary"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
        />

<label style={{ paddingTop: "16px"}}>Confirm Password</label>
        <input  className="input input-primary"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "16px" }}
        />
        {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>}
      </div>
  
      <button  className="btn btn-success" type="submit" style={{   width: "80%", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
      Signin
      </button>
    </form>
  </div>
  
     
  )

}

export default Register
