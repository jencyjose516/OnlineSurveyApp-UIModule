import { Button, Input } from "components";
import { authCtx } from "index";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { setter } from "utils/setter";

export function LoginBox() {
  const { handleUpdate } = useContext(authCtx);

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md w-full shadow-lg bg-white flex flex-col justify-center items-center p-5 space-y-5 rounded-lg">
      <h2 className="text-gray-700">Login</h2>
      <form
        className="w-full space-y-5 flex flex-col justify-center items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const login = await setter<APILogin>("/auth/login", {
              password,
              username,
            });

            handleUpdate({
              name: login.data.username,
              role: login.data.role as Role,
              token: login.data.token,
            });
            history.push("/web/");
          } catch {
            toast.error("wrong login details");
          }
        }}
      >
        <Input
          id="username"
          isRequired
          label="Username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          autoComplete="password"
          id="password"
          isRequired
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="primary" wFull>
          Login
        </Button>
      </form>
    </div>
  );
}
