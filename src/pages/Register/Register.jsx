import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  const handleRegister = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded-md shadow-lg bg-white px-7 py-10">
          <form onSubmit={handleRegister}>
            <h4 className="text-2xl mb-7">Register</h4>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
