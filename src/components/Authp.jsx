import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword ,signInWithPopup, signOut } from "firebase/auth";
const Authp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const singin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (e) {
      console.error(e);
    }
  };
const googleSignIn=async()=>{
    try {
        await signInWithPopup(auth, googleProvider);
      } catch (e) {
        console.error(e);
      }

}  

const logout=async()=>{
    try {
        await signOut(auth, googleProvider);
      } catch (e) {
        console.error(e);
      }

}
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="p-1 m-2 border-gray-900 border-2"
        type="text"
        placeholder="email..."
      />
      <br />
      <input
        onChange={(e) => setPass(e.target.value)}
        className="p-1 m-2 border-gray-900 border-2"
        type="password"
        placeholder="pass..."
      />
      <br />
      <button onClick={singin} className="p-1 m-2 border-gray-900 border-2">
        sign in
      </button>
      <button onClick={googleSignIn}  className="p-1 m-2 border-gray-900 border-2">sign in with google</button>
      <button onClick={logout} className="p-1 m-2 border-gray-900 border-2">logout</button>
    </div>
  );
};

export default Authp;
