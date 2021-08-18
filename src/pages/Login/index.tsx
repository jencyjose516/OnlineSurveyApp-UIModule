import { Header } from "components/Header";
import { LoginBox } from "containers";
import React from "react";

export function Login() {
  return (
    <>
      <Header isLogin={false} />
      <div className="w-full mt-20 flex justify-center items-center">
        <LoginBox />
      </div>
    </>
  );
}
