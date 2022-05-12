import React, { useState } from "react";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username} \nPassword: ${password}`);
  };
  return (
    <>
      <div className="flex items-center justify-center h-20 shadow-md ml-3">
        <h1 className="text-3xl uppercase text-blue-700">
          Microsystems CashPoint
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center h-screen bg-gray-100  ">
          <div className="bg-white  rounded-md px-10 w-11/12  bg-white sm:w-8/12 md:w-1/2 lg:w-4/12 shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Form Register
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="fullname"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="username"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="email"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="password"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Home;
