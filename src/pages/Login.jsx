const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-96 p-6 shadow-2xl bg-white rounded-lg flex flex-col items-center">
        <span className="text-xl font-bold pb-2">Welcome to the chat</span>
        <span className="text-lg p-4">Login</span>
        <form className="flex flex-col items-center justify-center gap-7">
          <input type="email" placeholder="email" className="input" />
          <input type="password" placeholder="password" className="input" />
          <button className="border rounded-md px-3 py-1 bg-slate-700 w-72 text-white text-lg cursor-pointer mb-4">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account ?{" "}
          <span className="underline text-yellow-700 cursor-pointer">
            Register
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
