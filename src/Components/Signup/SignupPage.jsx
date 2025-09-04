import React from "react";
import Signup from "./Signup";
import Navbar from "../Navbar";

function SignupPage({ setUser }) {
  return (
    <>
      <section>
        <Navbar />
        <div className="min-h-screen flex justify-center py-4">
          <Signup setUser={setUser} />
        </div>
      </section>
    </>
  );
}

export default SignupPage;
