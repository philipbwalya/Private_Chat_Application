import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-96 p-6 shadow-2xl bg-white rounded-lg flex flex-col items-center">
        <span className="text-xl font-bold pb-2">Welcome to the chat</span>
        <span className="text-lg p-4">Register</span>
        <form className="flex flex-col items-center justify-center gap-7">
          <input type="text" placeholder="Enter Name" className="input" />
          <input type="email" placeholder="email" className="input" />
          <input type="password" placeholder="password" className="input" />
          <input
            type="file"
            className="input none"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">click here to choose a pic</label>
          <button className="border rounded-md px-3 py-1 bg-slate-700 w-72 text-white text-lg cursor-pointer mb-4">
            Sign Up
          </button>
        </form>
        <p>
          Have an account ?{" "}
          <span className="underline text-yellow-700 cursor-pointer">
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
