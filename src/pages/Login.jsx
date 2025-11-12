import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const loginFunction = (email, password) => {
    const credentials = { email: "sherry@gmail.com", password: "12345" };
    if (email === credentials.email && password === credentials.password) {
      toast.success("login successfull");
    } else {
      toast.error("login failed");
    }
  };

  return (
    <div className="w-full h-screen bg-amber-50 flex justify-between overflow-hidden">
      <div className=" w-1/2 flex-col flex justify-center items-center">
        <div className=" ml-50 w-120  flex flex-col justify-around ">
          <h1 className="text-2xl font-semibold pl-2">Welcome Back!</h1>
          <p className="pb-8 pl-2">
            Enter your Credentials to access your account
          </p>
          <div className="mb-10">
            <div className="">
              <p className="font-semibold pl-2">Email address</p>
              <input
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
                className="ml-2 pl-2 w-98/100 border rounded-lg border-grey-300 outline-none"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold pl-2">Password</p>
              <input
                value={passVal}
                onChange={(e) => setPassVal(e.target.value)}
                className="ml-2 pl-2 w-98/100 border rounded-lg border-grey-300 outline-none"
                placeholder="Enter Password"
              />
            </div>
            <div className="pl-2 pt-5">
              <input type="checkbox" />
              <label className="pl-2">Remember for 30 days</label>
            </div>
            <div className="ml-2 w-98/100 border-[#3A5B22] rounded-lg pt-5">
              <button
                onClick={() => loginFunction(emailVal, passVal)}
                className="text-white font-semibold w-full text-lg bg-[#3A5B22] rounded-lg focus:outline-2 focus:outline-offset-2 active:bg-[#85da44]"
              >
                Login
              </button>
            </div>
            <p className="text-center mt-7">or</p>
          </div>
          <div className="">
            <div className="flex justify-around">
              <button className=" rounded-xl border border-[#D9D9D9] mb-2 p-2">
                <i className="ri-google-fill text-orange-600 pr-2"></i>Sign in
                with Google
              </button>

              <button className="rounded-xl border border-[#D9D9D9] mb-2 p-2">
                <i className="ri-apple-fill pr-2"></i> Sign in with Apple
              </button>
            </div>
            <div>
              <p className="text-center pt-3">
                Don't have an account?{" "}
                <span className="text-[#0F3DDE]">Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgImg w-1/2 flex justify-center"></div>
    </div>
  );
}
