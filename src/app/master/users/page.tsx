"use client";

import InputText from "@/app/components/InputText";
import Modal from "@/app/components/Modal";
import { users } from "@/app/utils/data";
import { IUser } from "@/app/utils/dataType";
import React, { useState } from "react";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  function saveHandler() {
    //@ts-ignore
    document.getElementById("actionModal").close();
  }

  return (
    <div className="overflow-x-auto">
      <Modal
        id="actionModal"
        title="Edit User"
        content="Update existing user info"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <InputText
              label="Username"
              disabled
              value={selectedUser?.username}
            />
            <InputText label="First name" value={selectedUser?.firstName} />
            <InputText label="Last name" value={selectedUser?.lastName} />
            {/* Dropdown */}
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
                    // @ts-ignore
                    document.getElementById("actionModal").showModal();
                    setSelectedUser(o);
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
