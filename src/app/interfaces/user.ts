import { Column } from '../../../node_modules/@innovapptive.com/dynamictable/lib/interfaces'
import { TableColumn } from './report-details';
import { Permission } from './roles-permissions';

export interface User {
  firstname: string;
  lastname: string;
}

export interface UserProfile {
  contact: string;
  profileImage: string;
  profileImageFileName?: string;
}
export interface UserPreferences {
  columnConfigurations?: string;
}

export interface UserDetails {
  id?: number;
  user?: string;
  firstName?: string;
  lastName?: string;
  title: string;
  email: string;
  password?:string;
  profileImage?: any;
  profileImageFileName?: string;
  preTextImage?: any;
  postTextImage?: any;
  contact?: string;
  isActive?: boolean;
  createdBy?: number;
  updatedBy?: number | null;
  createdAt?: string;
  updatedAt?: string;
  roles?: any[];
  usergroup?: any[];
  validFrom?: string;
  validThrough?: string;
  plantId?: string;
  unitIds?: string;
  displayRoles?: string;
  displayUsergroup?: string;
  columnConfigurations?: any;
}

export interface UserInfo extends UserDetails {
  slackDetail: any;
  collaborationType: string;
  permissions: Permission[];
  online?: boolean | false;
}

export interface UserTable {
  columns: Column[];
  data: UserDetails[];
}

export interface UsersInfoByEmail {
  [key: string]: Info;
}

export interface Info {
  fullName: string;
  isActive: boolean;
}
