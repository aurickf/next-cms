"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const Auth = () => {
  const router = useRouter();
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);

  return (
    <div className="">
      <Sidebar
        width="200px"
        toggled={menuIsCollapsed}
        collapsed={menuIsCollapsed}
        className="sidebar"
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            icon={<i className="pi pi-angle-double-right" />}
            onClick={() => setMenuIsCollapsed((prev) => !prev)}
          >
            Menu
          </MenuItem>
          <MenuItem
            icon={<i className="pi pi-home" />}
            component={<Link href={"/"} />}
          >
            Home
          </MenuItem>
          <SubMenu icon={<i className="pi pi-cog" />} label="Manage">
            <MenuItem
              icon={<i className="pi pi-users" />}
              component={<Link href={"/users"} />}
              className="sidebar-menu-item"
            >
              Users
            </MenuItem>
            <MenuItem
              icon={<i className="pi pi-key" />}
              component={<Link href={"/roles"} />}
              className="sidebar-menu-item"
            >
              Roles
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Auth;
