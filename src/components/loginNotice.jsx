import React from "react";

const LoginNotice = () => {
  return (
    <div className="py-0 bg-red-100 text-red-700">
      <h4 className="text-lg font-semibold">Login Failed</h4>      
      <p className="text-sm">
        Login Failed due to a bad network connection.
      </p>
    </div>
  );
};

export default LoginNotice;
