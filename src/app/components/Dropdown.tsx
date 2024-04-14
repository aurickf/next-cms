import { useEffect, useState } from "react";
import { IRole } from "../utils/dataType";

interface IDDProps {
  selectedRole: string;
  options: IRole[];
}

const Dropdown = (props: IDDProps) => {
  const [selectedRole, setSelectedRole] = useState(props.selectedRole);

  useEffect(() => {
    setSelectedRole(props.selectedRole);
  }, [props.selectedRole]);

  function clickHandler(roleName: string) {
    setSelectedRole(roleName);
  }

  return (
    <label className="input flex items-center gap-2 relative">
      Role
      <div className="dropdown dropdown-end absolute right-0">
        <div tabIndex={0} role="button" className="btn m-1">
          {selectedRole}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {props.options.map((o, i) => (
            <li key={i}>
              <a onClick={() => clickHandler(o.roleName)}>{o.roleName}</a>
            </li>
          ))}
        </ul>
      </div>
    </label>
  );
};

export default Dropdown;
