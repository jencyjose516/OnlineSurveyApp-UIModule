import { Button } from "components/Button";
import { Input } from "components/Input";
import React, { useState } from "react";
import { UserProfileEditViewProps } from "types/props";

export function UserProfileEditView(props: UserProfileEditViewProps) {
  const { user, editAction } = props;
  const [u, setU] = useState(user);
  return (
    <>
      <form
        className="w-full space-y-5 flex flex-col justify-center items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          editAction(u);
        }}
      >
        <Input
          id="firstname"
          isRequired
          label="First Name"
          placeholder="First Name"
          type="text"
          value={u.firstname}
          onChange={(e) => {
            setU({ ...u, firstname: e.target.value });
          }}
        />
        <Input
          id="lastname"
          isRequired
          label="Last Name"
          placeholder="Last Name"
          type="text"
          value={u.lastname}
          onChange={(e) => {
            setU({ ...u, lastname: e.target.value });
          }}
        />
        <Input
          id="address"
          label="Address"
          placeholder="Address"
          type="text"
          value={u.address}
          onChange={(e) => {
            setU({ ...u, address: e.target.value });
          }}
        />
        <Input
          id="phone"
          label="Phone"
          placeholder="Phone"
          type="text"
          value={u.phoneNumber}
          onChange={(e) => {
            setU({ ...u, phoneNumber: e.target.value });
          }}
        />
        <Button variant="primary" wFull>
          Update Profile
        </Button>
      </form>
    </>
  );
}
