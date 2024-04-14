"use client";

import InputText from "@/app/components/InputText";
import Modal from "@/app/components/Modal";
import { roles } from "@/app/utils/data";
import { IRole, IRoleAction } from "@/app/utils/dataType";
import { useState } from "react";

const RolePage = () => {
  const [action, setAction] = useState<IRoleAction>({
    type: "",
    selectedRole: null,
  });

  function modalInfo() {
    switch (action.type) {
      case "view":
        return {
          title: "View Role",
          content: "Role details",
        };
      case "edit":
        return {
          title: "Edit Role",
          content: "Update current role role",
        };
      case "delete":
        return {
          title: "Delete Role",
          content: "You can only delete role if no users attached to it",
        };

      default:
        break;
    }
  }

  function saveHandler() {
    //@ts-ignore
    document.getElementById("actionModal").close();
  }

  function deleteHandler() {
    //@ts-ignore
    document.getElementById("actionModal").close();
  }

  return (
    <div className="overflow-x-auto">
      <Modal id="actionModal" {...modalInfo()}>
        <div className="flex flex-col flex-wrap gap-2">
          <div>
            <InputText
              label="Role Name"
              placeholder="Name of the role"
              value={action?.selectedRole?.roleName}
              disabled={action.type !== "edit"}
              onChange={(e) =>
                setAction({ ...action, selectedRole: e.target.value })
              }
            />
          </div>
          <div className="text-right">
            {action.type === "edit" && (
              <button
                className="btn btn-outline btn-success"
                onClick={saveHandler}
              >
                Save
              </button>
            )}
            {action.type === "delete" && (
              <button
                className="btn btn-outline btn-error"
                onClick={deleteHandler}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Role Name</th>
            <th># Users</th>
            <th># ACL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((o: IRole, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{o.roleName}</td>
              <td>{o.numberOfUsers}</td>
              <td>{o.numberOfAccessRights}</td>
              <td className="flex gap-2">
                <button
                  className="btn btn-outline btn-info"
                  disabled={i == 0}
                  onClick={() => {
                    // @ts-ignore
                    document.getElementById("actionModal").showModal();
                    setAction({ type: "view", selectedRole: o });
                  }}
                >
                  View
                </button>
                <button
                  className="btn btn-outline btn-warning"
                  disabled={i == 0}
                  onClick={() => {
                    // @ts-ignore
                    document.getElementById("actionModal").showModal();
                    setAction({ type: "edit", selectedRole: o });
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline btn-error"
                  disabled={i == 0}
                  onClick={() => {
                    // @ts-ignore
                    document.getElementById("actionModal").showModal();
                    setAction({ type: "delete", selectedRole: o });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolePage;