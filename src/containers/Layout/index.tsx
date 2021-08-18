import { Header } from "components";
import React from "react";
import { LayoutProps } from "types/props";

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
