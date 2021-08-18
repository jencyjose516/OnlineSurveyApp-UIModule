import { Header } from "components/Header";
import { SignupBox } from "containers/SignupBox";
import React from "react";

export function SignUp() {
  return (
    <>
      <Header isLogin={true} />
      <div className="w-full px-3 mt-12 flex justify-center items-center">
        <SignupBox />
      </div>
    </>
  );
}
