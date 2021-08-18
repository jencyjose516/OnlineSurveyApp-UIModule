import { Button } from "components/Button";
import { Input } from "components/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import { setter } from "utils/setter";

export function SignupBox() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div className="max-w-md w-full shadow-lg bg-white flex flex-col justify-center items-center p-5 space-y-5 rounded-lg">
      <h2 className="text-gray-700">Sign Up</h2>
      <form
        className="w-full space-y-5 flex flex-col justify-center items-center"
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            console.log(email);
            const signup = await setter<APISignUP>("/auth/signup", {
              email,
              firstname,
              lastname,
              password,
            });

            console.log(signup.status);

            console.log(signup);
            toast.success("done");
            history.push("/web/login");
          } catch (e) {
            const errMsg = e?.response?.data?.message
              ? e?.response?.data?.message
              : "Error occured";
            toast.error(errMsg);
            setPassword("");
            setEmail("");
          }
        }}
      >
        <Input
          id="firstname"
          isRequired
          label="Frstname"
          placeholder="Firstname"
          type="text"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <Input
          id="lastname"
          isRequired
          label="Lastname"
          placeholder="Lastname"
          type="text"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <Input
          id="email"
          isRequired
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="password"
          isRequired
          label="Password"
          maxLength={8}
          minLength={5}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="secondary" wFull>
          Sign UP
        </Button>
      </form>
    </div>
  );
}
