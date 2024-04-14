"use client";

import Dropdown from "@/app/components/Dropdown";
import InputText from "@/app/components/InputText";
import Modal from "@/app/components/Modal";
import { roles, users } from "@/app/utils/data";
import { IRoleAction, IUser } from "@/app/utils/dataType";
import React, { useState } from "react";

const UsersPage = () => {
  const [action, setAction] = useState<IRoleAction>({
    type: "",
    isOpen: false,
    selectedRow: null,
  });

  function saveHandler() {
    //@ts-ignore
    document.getElementById("actionModal").close();
  }

  function closeHandler() {
    setAction({ type: "", isOpen: false, selectedRow: null });
  }

  /* Type guard */
  function isUser(obj: any): obj is IUser {
    if (obj) return "username" in obj;
  }

  return (
    <div className="overflow-x-auto">
      <Modal
        id="actionModal"
        title="Edit User"
        content="Update existing user info"
        isOpen={action.isOpen}
        closeHandler={closeHandler}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <InputText
              label="Username"
              disabled
              value={
                isUser(action?.selectedRow) && action?.selectedRow?.username
              }
            />
            <InputText
              label="First name"
              value={
                isUser(action?.selectedRow) && action?.selectedRow?.firstName
              }
            />
            <InputText
              label="Last name"
              value={
                isUser(action?.selectedRow) && action?.selectedRow?.lastName
              }
            />
            <Dropdown
              options={roles}
              selectedRole={action?.selectedRow?.roleName}
            />
          </div>
          <div className="text-right">
            <button
              className="btn btn-outline btn-success"
              onClick={saveHandler}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((o: IUser, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{o.username}</td>
              <td>{o.firstName}</td>
              <td>{o.lastName}</td>
              <td>{o.roleName}</td>
              <td className="flex gap-2">
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => {
                    setAction({ ...action, isOpen: true, selectedRow: o });
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
