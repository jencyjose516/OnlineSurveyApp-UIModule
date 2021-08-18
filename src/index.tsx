import React from "react";
import ReactDOM from "react-dom";
import { Router } from "router";
import "Styles/index.css";
import { SWRConfig } from "swr";
import { createCtx } from "utils/context";
import { fetcher } from "utils/fetcher";

const [ctx, AuthProvider] = createCtx({
  name: "",
  role: (localStorage.getItem("role") as Role) || "",
  token: localStorage.getItem("token") || "",
});
export const authCtx = ctx;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SWRConfig
        value={{
          dedupingInterval: 5000,
          fetcher,
          refreshInterval: 0,
        }}
      >
        <Router />
      </SWRConfig>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
