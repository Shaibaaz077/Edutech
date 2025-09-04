import React from "react";
import Login from "./Login";
import Navbar from "../Navbar";

function LoginPage({ setUser }) {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen flex justify-center py-4">
        <Login setUser={setUser} />
      </div>
    </section>
  );
}

export default LoginPage;
