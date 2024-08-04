import { UserDetails } from './user';
import { UserGroup } from './userGroup';

export interface RoundPlanScheduleConfiguration {
  shiftDetails: { [x: string]: { startTime: string; endTime: string }[] };
  id?: string;
  roundPlanId: string;
  scheduleType: string;
  repeatDuration: number;
  repeatEvery: string;
  daysOfWeek: number[];
  monthlyDaysOfWeek: MonthlyDaysOfWeek[];
  scheduleEndType: string;
  endDatePicker: Date;
  scheduleEndOn: string;
  scheduleEndOccurrences: number;
  startDate: string;
  endDate: string;
  startDateDisplay: any;
  endDateDisplay: any;
  scheduleByDates: ScheduleByDate[];
  scheduledTill?: string;
  assignmentDetails: AssignmentDetail;
  advanceRoundsCount: number;
  startDatePicker?: Date;
  scheduleEndOnPicker?: Date;
  taskLevelConfig?: TaskLevelScheduleConfig[];
  isTaskLevel: boolean;
}

export interface AssignmentDetail {
  type: string;
  value: string;
  displayValue: string;
}

export interface ScheduleByDate {
  date: Date;
  scheduled: boolean;
}

export interface MonthlyDaysOfWeek {
  [key: number]: number[];
}

export interface RoundPlanScheduleConfigurationObj {
  [key: string]: RoundPlanScheduleConfiguration;
}

export interface RoundPlanSuccessModalData {
  roundPlanName: string;
  mode: 'create' | 'update';
}

export interface RoundPlan {
  id: string;
  name: string;
  description: string;
  formLogo: string;
  isPublic?: boolean;
  lastPublishedBy?: string;
  publishedDate: string;
  author?: string;
  isArchived?: boolean;
  formType?: string;
  isArchivedAt?: string;
  isDeleted?: boolean;
  location?: string;
  roundType?: string;
  plant?: any;
  plantId?: string;
  formStatus?: string;
  assignee?: string;
  tags?: string[];
  searchTerm?: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
}

export interface RoundPlanDetail extends RoundPlan {
  roundPlanId: string;
  schedule: string;
  scheduleDates: string;
  tasks: number;
  locations: number;
  assets: number;
  rounds: number;
  plantId?: string;
  plant?: string;
  assignedTo?: string;
  userGroupsIds?: string;
  unitId?: string;
  shifts: [];
}

export interface RoundDetail extends RoundPlan {
  schedule?: string;
  roundId: string;
  roundDetailId: string;
  scheduledType: string;
  slotDetails: string;
  scheduledAt: Date;
  dueDate: Date;
  submittedAt?: any;
  shiftId: string;
  locationAndAssets: number;
  locationAndAssetsCompleted: number;
  taskSkipped: number;
  locationOrAssetSkipped: number;
  locationAndAssetTasks: number;
  isViewPdf?: boolean;
  createdBy: string;
  status: string;
  statusDisplay?: string;
  locationAndAssetTasksCompleted: number;
  assignedTo: string;
  assignedToEmail?: string;
  previouslyAssignedTo: string;
  roundDBVersion: number;
  roundDetailDBVersion: number;
  assignmentType?: string;
  userGroupsIds?: string;
  unitId?: string;
  positionId?: string;
  submittedDate?: string;
  skipReason?: string;
  overdueReason?: string;
}

export interface RoundPlanDetailResponse {
  rows: RoundPlanDetail[];
  scheduledCount: number;
  unscheduledCount: number;
  next: string | null;
}

export interface RoundDetailResponse {
  rows: RoundDetail[];
  count: number;
  next: string | null;
}

export type RoundPlanList = {
  items: Array<RoundPlan | null>;
  next?: string | null;
  startedAt?: number | null;
  count?: number;
};

export interface RoundPlanSubmission {
  id: string;
  name?: string | null;
  description?: string | null;
  formLogo?: string | null;
  isPublic?: boolean | null;
  location?: string | null;
  roundType?: string | null;
  status?: string | null;
  assignee?: string | null;
  dueDate?: string | null;
  version?: string | null;
  submittedBy?: string | null;
  searchTerm?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
}

export type RoundPlanSubmissionList = {
  items: Array<RoundPlanSubmission | null>;
  next?: string | null;
  startedAt?: number | null;
};

export interface RoundPlanQueryParam {
  next?: string;
  limit: number;
  searchTerm: string;
  fetchType: string;
  roundPlanId: string;
}

export interface SelectTab {
  index: number;
  queryParams: {
    id: string;
    schedule?: string;
  };
}

export interface AssigneeDetails {
  users?: UserDetails[];
  userGroups?: UserGroup[];
  plants?: any[];
  position?: any[];
  unit?: any[];
}

export interface IssueOrAction {
  id: string;
  status?: string;
  priority?: string;
  dueDate?: string;
  assignedTo?: string;
  previouslyAssignedTo: string;
  issueData?: string;
  actionData?: string;
  issueOrActionDBVersion: number;
  history: History;
  assignmentType?: string;
  userGroupsIds?: string;
}

export interface History {
  [key: string]: string; // issuelistID || actionlistID
  id?: string;
  message: any;
  username?: string;
  createdAt?: string;
  createdBy?: string;
  assignedTo?: string;
  type: 'Object' | 'Media' | 'Message';
  isUserAssigned?: string;
}

export interface HistoryResponse {
  rows: History[];
  nextToken: string | null;
  listImages?: string[];
}

export interface UpdateIssueOrActionEvent {
  field: string;
  value: any;
  checked?: boolean;
  userGroupsIds?: string;
  assignmentType?: string;
}

export interface SelectedAssignee {
  assigneeType: string;
  user: UserDetails;
  userGroup: UserGroup;
  checked: boolean;
}

export interface TaskLevelScheduleConfig {
  nodeWiseQuestionIds: { [x: string]: [string] };
  repeatDuration: number;
  repeatEvery: string;
  daysOfWeek: number[];
  monthlyDaysOfWeek: MonthlyDaysOfWeek[];
  startDate: string;
  endDate: string;
  scheduleByDates: ScheduleByDate[];
  scheduledTill?: string;
  shiftDetails: { [x: string]: { startTime: string; endTime: string }[] };
}
