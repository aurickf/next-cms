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
  selectedRole?: IRole;
}
