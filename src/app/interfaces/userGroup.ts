
export interface UserGroup {
  id: string;
  name: string;
  description?: string;
  plantId: string;
}
export interface UserGroupDetails {
  name: string;
  description?: string;
  plantId: string;
  createdBy?: string;
  updatedAt?: string;
  user?: string;
  searchTerm?: string;
}

export interface UserGroupEvent {
  type: 'add' | 'update' | 'delete';
  data: any;
}
