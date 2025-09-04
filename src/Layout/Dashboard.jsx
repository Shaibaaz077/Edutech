import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Herosection from "../Components/Dashboard/Herosection";

function Dashboard() {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  return (
    <>
      <header>
        <Navbar user={user} setUser={setUser} />
      </header>
      <section>
        <Herosection />
      </section>
    </>
  );
}
export default Dashboard;
