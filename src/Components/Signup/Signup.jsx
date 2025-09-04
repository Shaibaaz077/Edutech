import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill email and password");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(form));

    localStorage.setItem("user", JSON.stringify({ email: form.email }));
    if (setUser) setUser({ email: form.email });

    setForm({ email: "", password: "" });
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSignup} className="w-full max-w-md px-2">
      <h3 className="text-2xl font-md text-primary py-10 text-center">
        Sign Up and start learning
      </h3>
      <div className="mb-4">
        {/* Social Signup Buttons */}
        <button
          type="button"
          className="w-full flex items-center justify-center bg-red-700 text-white text-lg py-2 rounded-lg hover:bg-red-700/90 transition mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="white"
            className="fill-current text-white mr-4"
          >
            <path d="M44.5 20H24v8.5h11.8C34.9 34 30.1 37.5 24 37.5c-7.5 0-13.5-6-13.5-13.5S16.5 10.5 24 10.5c3.4 0 6.5 1.2 8.9 3.4l6.4-6.4C35.6 3.3 30.1 1 24 1 11.3 1 1 11.3 1 24s10.3 23 23 23c11.5 0 22-8.4 22-23 0-1.2-.1-2.4-.3-3.5z" />
          </svg>
          Sign up with Gmail
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center bg-blue-900 text-white text-lg py-2 rounded-lg hover:bg-blue-900/90 transition "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="fill-current text-white mr-4"
          >
            <path
              fill="#FFFF"
              d="M24 0C10.74 0 0 10.74 0 24c0 11.98 8.82 21.87 20.36 23.78V30.94h-6.13v-6.94h6.13v-5.27c0-6.05 3.6-9.38 9.1-9.38 2.64 0 5.4.47 5.4.47v5.93h-3.04c-3 0-3.93 1.86-3.93 3.76v4.49h6.69l-1.07 6.94h-5.62v16.84C39.18 45.87 48 35.98 48 24 48 10.74 37.26 0 24 0z"
            />
          </svg>
          Sign up with Facebook
        </button>
      </div>
      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-2 text-gray-700 text-lg">or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div>
        <span className="text-lg text-gray-700">Email</span>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-400 rounded focus:outline-none mt-2"
          required
        />
        <span className="text-lg text-gray-700">Password</span>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-400 rounded focus:outline-none mt-2"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-primary font-semibold text-white text-lg rounded hover:bg-primary/90 transition mt-6"
        >
          Create Account
        </button>
        <p className="mt-4 text-lg text-center text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
        <hr className="w-25 mx-auto text-gray-300 mt-6" />
        <p className="mt-4 text-sm text-center text-gray-700">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}

export default Signup;
