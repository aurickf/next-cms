import { IRole, IUser } from "./dataType";

export const roles: IRole[] = [
  {
    roleName: "Super Admin",
    numberOfUsers: 2,
    numberOfAccessRights: 34,
  },
  {
    roleName: "Site Admin",
    numberOfUsers: 12,
    numberOfAccessRights: 15,
  },
  {
    roleName: "Supervisor",
    numberOfUsers: 25,
    numberOfAccessRights: 10,
  },
  {
    roleName: "Standard User",
    numberOfUsers: 153,
    numberOfAccessRights: 5,
  },
];

export const users: IUser[] = [
  {
    username: "admin",
    firstName: "Super",
    lastName: "Admin",
    roleName: "Super Admin",
  },
  {
    username: "site-admin-1",
    firstName: "Site",
    lastName: "Admin",
    roleName: "Site Admin",
  },
  {
    username: "site-admin-2",
    firstName: "Site",
    lastName: "Admin 2",
    roleName: "Site Admin",
  },
  {
    username: "supervisor",
    firstName: "Supervisor",
    lastName: "Site 1",
    roleName: "Supervisor",
  },
  {
    username: "justnormaluser",
    firstName: "User",
    lastName: "Standart",
    roleName: "Standart User",
  },
];
