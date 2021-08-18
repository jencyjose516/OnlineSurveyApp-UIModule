import * as React from "react";

// export const AuthCtx = React.createContext<AuthContextInterface | null>(null);

export function createCtx(defaultValue: AuthContextInterface) {
  const defaultUpdate: UpdateType = () => {
    console.log(defaultValue);
    localStorage.setItem("token", defaultValue.token || "");
    localStorage.setItem("role", defaultValue.role || "");
    return defaultValue;
  };

  const ctx = React.createContext({
    handleUpdate: defaultUpdate,
    state: defaultValue,
  });

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = React.useState(defaultValue);
    const handleUpdate = (auth: AuthContextInterface) => {
      localStorage.setItem("token", auth.token || "");
      localStorage.setItem("role", auth.role || "");
      update(auth);
    };

    return <ctx.Provider value={{ handleUpdate, state }} {...props} />;
  }

  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}
