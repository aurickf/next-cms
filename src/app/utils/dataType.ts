import { ReactNode } from "react";

export interface IRole {
  roleName: string;
  numberOfUsers: number;
  numberOfAccessRights: number;
}

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  roleName: string;
}

export interface IRoleAction {
  type: string;
  isOpen: boolean;
  selectedRow?: IRole | IUser;
}

export interface IModalProps {
  id: string;
  title?: string;
  content?: string;
  children: ReactNode;
  isOpen?: boolean;
  closeHandler: Function;
}
