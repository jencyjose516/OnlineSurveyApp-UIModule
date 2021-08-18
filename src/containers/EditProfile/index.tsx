import { Modal } from "components/Modal";
import { UserProfileEditView } from "components/UserProfileEditView";
import { authCtx } from "index";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditProfileProps } from "types/props";
import { useFetchData } from "utils/hooks/useFetchData";
import { setter } from "utils/setter";

export function EditProfile(props: EditProfileProps) {
  const { children, disabled } = props;
  const [open, setOpen] = useState(false);
  const { state } = useContext(authCtx);

  const {
    data: user,
    error,
    mutate,
  } = useFetchData<User>(open ? "/surveyapp/user/profile/get" : null, false);

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data");
      setOpen(false);
    }
  }, [error]);

  const handleEdit = async (user: User) => {
    try {
      await setter<User>("/surveyapp/user/profile/update", user, state.token);
      setOpen(false);
      await mutate();
    } catch {
      toast.error("Something happened!");
    }
  };

  return (
    <>
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
        disabled={disabled}
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </button>
      {open && (
        <Modal
          isOpen={open}
          title="Edit Item"
          onClose={() => {
            setOpen(false);
          }}
        >
          {user && <UserProfileEditView editAction={handleEdit} user={user} />}
        </Modal>
      )}
    </>
  );
}
