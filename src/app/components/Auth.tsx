"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Auth = () => {
  const router = useRouter();
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);

  return (
    <div className="">
      <ul className="menu bg-base-200 w-56 h-dvh">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/master"}>Master</Link>
          <ul>
            <li>
              <Link href={"/master/roles"}>Roles</Link>
            </li>
            <li>
              <Link href={"/master/users"}>Users</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Auth;
