/* eslint-disable @typescript-eslint/naming-convention */
export const permissions = Object.freeze({
  viewDashboards: 'VIEW_DASHBOARDS',
  unitOfMeasurement: 'VIEW_UNIT_OF_MEASUREMENT',
  masterConfiguration: 'VIEW_MASTER_CONFIGURATION',
  createDashboard: 'CREATE_DASHBOARD',
  updateDashboard: 'UPDATE_DASHBOARD',
  workOrder: 'VIEW_WORKORDER',
  settings: 'VIEW_SETTINGS',
  deleteDashboard: 'DELETE_DASHBOARD',
  copyDashboard: 'COPY_DASHBOARD',
  viewReports: 'VIEW_REPORTS',
  createReport: 'CREATE_REPORT',
  updateReport: 'UPDATE_REPORT',
  deleteReport: 'DELETE_REPORT',
  copyReport: 'COPY_REPORT',
  reportExportToExcel: 'REPORT_EXPORT_TO_EXCEL',
  viewTenants: 'VIEW_TENANTS',
  createTenant: 'CREATE_TENANT',
  updateTenant: 'UPDATE_TENANT',
  viewInactiveTenants: 'VIEW_INACTIVE_TENANTS',
  viewMaintenanceControlCenter: 'VIEW_MAINTENANCE_CONTROL_CENTER',
  assignWorkOrders: 'ASSIGN_WORK_ORDERS',
  viewSparePartsControlCenter: 'VIEW_SPARE_PARTS_CONTROL_CENTER',
  assignPickList: 'ASSIGN_PICKLIST',
  viewUsers: 'VIEW_USERS',
  createUser: 'CREATE_USER',
  updateUser: 'UPDATE_USER',
  downloadUsers: 'DOWNLOAD_USERS',
  deactivateUser: 'DEACTIVATE_USER',
  viewUserGroup: 'VIEW_USER_GROUPS',
  createUserGroup: 'CREATE_USER_GROUP',
  editUserGroup: 'EDIT_USER_GROUP',
  deleteUserGroup: 'DELETE_USER_GROUP',
  viewRoles: 'VIEW_ROLES',
  createRole: 'CREATE_ROLE',
  updateRole: 'UPDATE_ROLE',
  deleteRole: 'DELETE_ROLE',
  copyRole: 'COPY_ROLE',
  viewInactiveUsers: 'VIEW_INACTIVE_USERS',
  viewWorkInstructions: 'VIEW_WORK_INSTRUCTIONS',
  createWorkInstruction: 'CREATE_WORK_INSTRUCTION',
  updateWorkInstruction: 'UPDATE_WORK_INSTRUCTION',
  publishWorkInstruction: 'PUBLISH_WORK_INSTRUCTION',
  deleteWorkInstruction: 'DELETE_WORK_INSTRUCTION',
  importWorkInstruction: 'IMPORT_WORK_INSTRUCTION',
  copyWorkInstruction: 'COPY_WORK_INSTRUCTION',
  createCategory: 'CREATE_CATEGORY',
  updateCategory: 'UPDATE_CATEGORY',
  deleteCategory: 'DELETE_CATEGORY',
  viewFiles: 'VIEW_FILES',
  updateFile: 'UPDATE_FILE',
  deleteFile: 'DELETE_FILE',

  viewLocations: 'VIEW_LOCATIONS',
  createLocation: 'CREATE_LOCATION',
  updateLocation: 'UPDATE_LOCATION',
  deleteLocation: 'DELETE_LOCATION',
  importLocations: 'IMPORT_LOCATIONS',

  viewAssets: 'VIEW_ASSETS',
  createAsset: 'CREATE_ASSET',
  updateAsset: 'UPDATE_ASSET',
  deleteAsset: 'DELETE_ASSET',
  importAssets: 'IMPORT_ASSETS',
  viewPlants: 'VIEW_PLANTS',
  createPlant: 'CREATE_PLANT',
  updatePlant: 'UPDATE_PLANT',
  deletePlant: 'DELETE_PLANT',
  importPlants: 'IMPORT_PLANTS',
  viewShifts: 'VIEW_SHIFTS',
  createShift: 'CREATE_SHIFT',
  updateShift: 'UPDATE_SHIFT',
  viewForms: 'VIEW_FORMS',
  createForm: 'CREATE_FORM',
  updateForm: 'UPDATE_FORM',
  deleteForm: 'DELETE_FORM',
  copyForm: 'COPY_FORM',
  archiveForm: 'ARCHIVE_FORM',
  restoreForm: 'RESTORE_ARCHIVED_FORM',
  viewSubmissions: 'VIEW_SUBMISSIONS',
  downloadSubmission: 'DOWNLOAD_SUBMISSION',
  shareSubmission: 'SHARE_SUBMISSION',
  viewFormTemplates: 'VIEW_FORM_TEMPLATES',
  createFormTemplate: 'CREATE_FORM_TEMPLATE',
  updateFormTemplate: 'UPDATE_FORM_TEMPLATE',
  viewArchivedForms: 'VIEW_ARCHIVED_FORMS',
  viewArchivedTemplates: 'VIEW_ARCHIVED_TEMPLATES',
  archiveTemplate: 'ARCHIVE_FORM_TEMPLATE',
  copyTemplate: 'COPY_FORM_TEMPLATE',
  restoreTemplate: 'RESTORE_ARCHIVED_TEMPLATE',
  deleteTemplate: 'DELETE_ARCHIVED_TEMPLATE',
  viewFormScheduler: 'VIEW_FORM_SCHEDULER',
  scheduleInspection: 'SCHEDULE_FORM',
  createAdhocInspection: 'CREATE_ADHOC_INSPECTIONS',
  importForm: 'IMPORT_FORM',

  viewORPlans: 'VIEW_OR_PLANS',
  createORPlan: 'CREATE_OR_PLAN',
  updateORPlan: 'UPDATE_OR_PLAN',
  deleteORPlan: 'DELETE_OR_FORM',
  copyRoundPlan: 'COPY_OR_PLAN',
  archiveRoundPlan: 'ARCHIVE_OR_PLAN',
  downloadRounds: 'DOWNLOAD_ROUNDS',
  shareRounds: 'SHARE_ROUNDS',
  viewScheduler: 'VIEW_SCHEDULER',
  scheduleRoundPlan: 'SCHEDULE_ROUND_PLAN',
  createAdhocRound: 'CREATE_ADHOC_ROUNDS',
  downloadDashboardAsPDF: 'DOWNLOAD_DASHBOARD_PDF',
  sendDashboardEmail: 'SEND_DASHBOARD_EMAIL',
  viewORPTemplates: 'VIEW_ORP_TEMPLATES',
  createORPTemplate: 'CREATE_ORP_TEMPLATES',
  updateORPTemplate: 'UPDATE_ORP_TEMPLATES',
  viewArchivedORP: 'VIEW_OR_ARCHIVED_PLANS',
  viewORObservations: 'VIEW_OR_OBSERVATIONS',

  viewOPRDashboards: 'OPR_VIEW_DASHBOARDS',
  createOPRDashboard: 'OPR_CREATE_DASHBOARD',
  updateOPRDashboard: 'OPR_UPDATE_DASHBOARD',
  deleteOPRDashboard: 'OPR_DELETE_DASHBOARD',
  copyOPRDashboard: 'OPR_COPY_DASHBOARD',
  viewOPRReports: 'OPR_VIEW_REPORTS',
  createOPRReport: 'OPR_CREATE_REPORT',
  updateOPRReport: 'OPR_UPDATE_REPORT',
  deleteOPRReport: 'OPR_DELETE_REPORT',
  copyOPRReport: 'OPR_COPY_REPORT',
  reportOPRExportToExcel: 'OPR_REPORT_EXPORT_TO_EXCEL',
  restoreArchivedOR: 'RESTORE_OR_ARCHIVED_PLAN',
  deleteArchivedOR: 'DELETE_OR_ARCHIVED_PLAN',

  viewUnitOfMeasurement: 'VIEW_UNIT_OF_MEASUREMENTS',
  createUnitOfMeasurement: 'CREATE_UNIT_OF_MEASUREMENT',
  updateUnitOfMeasurement: 'UPDATE_UNIT_OF_MEASUREMENT',
  deleteUnitOfMeasurement: 'DELETE_UNIT_OF_MEASUREMENT',
  importUnitOfMeasurement: 'IMPORT_UNIT_OF_MEASUREMENT',

  viewInactive: 'VIEW_ARCHIVED',
  archiveLocation: 'ARCHIVE_LOCATION',
  archiveAsset: 'ARCHIVE_ASSET',
  viewGlobalResponses: 'VIEW_GLOBAL_RESPONSES',
  createGlobalResponses: 'CREATE_GLOBAL_RESPONSES',
  updateGlobalResponses: 'UPDATE_GLOBAL_RESPONSES',
  deleteGlobalResponses: 'DELETE_GLOBAL_RESPONSES',
  importGlobalResponses: 'IMPORT_GLOBAL_RESPONSES',

  viewRdfObservations: 'VIEW_RDF_OBSERVATIONS',

  // Integration Manager Permissions
  createConnection: 'CREATE_CONNECTION',
  updateConnection: 'UPDATE_CONNECTION',
  deleteConnection: 'DELETE_CONNECTION',
  viewConnection: 'VIEW_CONNECTION',
  createIntegration: 'CREATE_INTEGRATION',
  updateIntegration: 'UPDATE_INTEGRATION',
  deleteIntegration: 'DELETE_INTEGRATION',
  viewIntegration: 'VIEW_INTEGRATION',
  viewPosition: 'VIEW_POSITIONS',
  createPosition: 'CREATE_POSITIONS',
  updatePosition: 'UPDATE_POSITIONS',
  viewShiftHandovers: 'VIEW_SHRS',
  updateSHRConfiguration: 'UPDATE_SHR_CONFIG',
  updateEmailCOnfiguration: 'UPDATE_SHR_EMAIL_CONFIG',
  viewSHRSubmission: 'VIEW_SHR_SUBMISSION',
  viewShiftLogTemplates: 'VIEW_SHIFT_LOG_TEMPLATES',
  createShiftLogTemplates: 'CREATE_SHIFT_LOG_TEMPLATES',
  updateShiftLogTemplates: 'UPDATE_SHIFT_LOG_TEMPLATES',
  viewDataPermissions: 'VIEW_DATA_PERMISSIONS',
  updateDataPermissions: 'UPDATE_DATA_PERMISSIONS'
});

export const routingUrls = {
  signup: {
    url: '/signup',
    title: 'Signup'
  },
  login: {
    url: '/login',
    title: 'Login'
  },
  dashboard: {
    url: '/dashboard',
    title: 'Dashboard',
    permission: permissions.viewDashboards
  },
  workOrder: {
    url: '/workorder',
    title: 'mWorkOrder',
    permission: permissions.workOrder
  },
  settings: {
    url: '/settings',
    title: 'Settings',
    permission: permissions.settings
  },
  masterConfiguration: {
    url: '/master-configuration',
    title: 'Master Configuration',
    permission: permissions.masterConfiguration
  },
  tenantManagement: {
    url: '/tenant-management',
    title: 'Tenant Management',
    permission: permissions.viewTenants
  }
};

export const formConfigurationStatus = Object.freeze({
  draft: 'draft',
  published: 'published',
  publishing: 'Publishing',
  saved: 'Saved',
  saving: 'Saving',
  standalone: 'Standalone',
  embedded: 'Embedded',
  ready: 'Ready',
  single: 'single',
  multiple: 'multiple',
  error: 'Error'
});

export const HIERARCHY_MODES = Object.freeze({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ASSET_HIERARCHY: 'asset_hierarchy',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ROUTE_PLAN: 'route_plan'
});

export const maxFileUploadSizeMongo = 5120000;
export const defaultCategoryId = '_UnassignedCategory_';
export const defaultCategoryName = 'Unassigned';
export const defaultLanguage = 'en';
export const defaultLimit = 25;
export const graphQLPaginationLimit = 50;
export const graphQLDefaultLimit = 250;
export const graphQLDefaultFilterLimit = 500;
export const graphQLPlanLimit = 200;
export const graphQLDefaultMaxLimit = 10000;
export const graphQLRoundsOrInspectionsLimit = 10000;
export const defaultCountFieldName = 'Record Count';
export const superAdminIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwhJREFUSInF1W9o1WUUB/DPubuyDSp0OWbZH4QKGogQRGVYhlEvgmgx96JMUMRtmXvRS7VY9Wq+qBFh907If73QiKKEoJERmAYiSWUEEflCbFqWvkisuXufXtzfvdvdvdYIogM/nt/znPN8v+ec53AO/7HEXIxSwTIsFbpQws+mHItNfvjXBGmXNn8YEgaw5CpmJzGqw+7oU5ozQSq4D/txC5LkuHAYZzAPi7EK3RnK18Lq2Oj7fyRIRasl+9CKd+VsbXYR0pi7lW3HSlwQHo9+n1+VII1ZruxT5ITnot9YA+gbrpf3kVaPxjoXUxIKXhJewHll98Szfqza52oXX9WubH/m+VBT8GF5eQeEa2OdixAhxaAXMYKFwr6Uph2vEWi3GTfj/RhQaJYSi4xglWRPg+6sLfhSWK6op5GgUi1JydZm2OlNT+N5lCRvz9bHsLKcbRVjg3UEWZ0vwYnY5LsG8KK7hJ3Z9pMYdKZphPONS34RHkw7LIB8plqarYcbwN/S6Yr30J55dzoVrc7+S876MIZNQfQppYIjeELenTiaz9Jzg4TkpzrwYXmTDuDW6VzYINmQ7SZ0GsfvM65VMMpunI6gbEogtNS532UNHmqaDibl9MZAHTjVd41KVNVHnsjWm+pMz9mrrKP28dV0eIZio6NNiBfPxKxGcFwLwiMzLWNYGRcgFXRjWQa+JwYVZyOnonmSFbis3claBFlX/FZyW9rh3iZewdps/cIV/U0tynowH4dirUs1gkxeUzkZScN159I7WrAGE67ojSF/Nni/S5vwSrYdrZ5PA3XYrZLjB3TVDCvyq4fRKac3NtdXWk0mjeEOHIwBhxoIok9JSS9+E7akgu2Z5+RckjzV7FHTLm2paK/kGZwS1s/UN7brSkf9AAtxAtt0+Hj2QEmvazVPj/AybscpJY/N7gTNB85OS5Tsw/3Z0XkcEU5L8ipNcQWuy/QHhfXR7/xsrL+dyangScmgsNJ0W6nKZYxLRmPQZ1fDmNvQ32GB0I1FwpSyc67xTbUU/1f5C9zA9dtYdVIPAAAAAElFTkSuQmCC';
export const superAdminText = 'Super Admin';
export const userRolePermissions = 'UserRolePermissions';
export const defaultProfile = 'assets/user-management-icons/Vector.png';
export const products = ['MWORKORDER', 'MINVENTORY'];
export const LIST_LENGTH = 20000000;
export const dateFormat = 'MMM dd, yy';
export const dateFormat2 = 'dd MMM yyyy';
export const dateFormat3 = 'd MMMM yyyy';
export const dateFormat4 = 'MMM d, yyyy';
export const dateFormat5 = 'yyyy-MM-dd';
export const dateFormat6 = 'MMM d, yyyy';
export const hourFormat = 'HH:00:00';
export const dateTimeFormat2 = 'dd MMM yyyy hh:mm a';
export const dateTimeFormat3 = 'yyyy-MM-dd 00:00:00';
export const dateTimeFormat4 = 'MMM d, yyyy h:mm a';
export const dateTimeFormat5 = 'yyyy-MM-dd HH:mm:ss';
export const dateTimeFormat6 = 'MMM d';
export const dateTimeFormat7 = 'MM/dd/yy, hh:mm a';
export const timeFormat = 'h:mm a';

export const DEFAULT_PDF_BUILDER_CONFIG = {
  formId: true,
  formTitle: true,
  subject: true,
  logo: true,
  questionCompleted: true,
  submittedOn: true,
  submittedBy: true,
  pdfGeneratedDate: true,
  customText: true,
  customTextLabel: '',
  customTextField: '',
  actions: true,
  issues: true,
  questions: true,
  incompleteQuestions: true,
  completedQuestions: true,
  capturedQuestions: true,
  photos: true,
  skippedQuestions: true
};
export const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
export const EXCEL_EXTENSION = '.xlsx';
export const DEFAULT_TEMPLATE_PAGES_STANDALONE = [
  {
    name: 'Page',
    position: 1,
    isOpen: true,
    sections: [
      {
        id: 'S1',
        name: 'Section',
        position: 1,
        isOpen: true
      }
    ],
    questions: [
      {
        id: 'TQ1',
        sectionId: 'S1',
        name: 'Site Conducted',
        fieldType: 'TF',
        position: 1,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      },
      {
        id: 'TQ2',
        sectionId: 'S1',
        name: 'Conducted On',
        fieldType: 'DT',
        position: 2,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {},
        date: true,
        time: true
      },
      {
        id: 'TQ3',
        sectionId: 'S1',
        name: 'Performed By',
        fieldType: 'TF',
        position: 3,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      },
      {
        id: 'TQ4',
        sectionId: 'S1',
        name: 'Location',
        fieldType: 'GAL',
        position: 4,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      }
    ],
    logics: []
  }
];
export const DEFAULT_TEMPLATE_PAGES_EMBEDDED = [
  {
    name: 'Page',
    position: 1,
    isOpen: true,
    sections: [
      {
        id: 'S1',
        name: 'Section',
        position: 1,
        isOpen: true
      }
    ],
    questions: [
      {
        id: 'TQ1',
        sectionId: 'S1',
        name: 'Site Conducted',
        fieldType: 'TF',
        position: 1,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      },
      {
        id: 'TQ2',
        sectionId: 'S1',
        name: 'Conducted On',
        fieldType: 'DF',
        position: 2,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {},
        date: true,
        time: true
      },
      {
        id: 'TQ3',
        sectionId: 'S1',
        name: 'Performed By',
        fieldType: 'TF',
        position: 3,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      },
      {
        id: 'TQ4',
        sectionId: 'S1',
        name: 'Location',
        fieldType: 'GAL',
        position: 4,
        required: false,
        enableHistory: false,
        multi: false,
        value: 'TF',
        isPublished: false,
        isPublishedTillSave: false,
        isOpen: true,
        isResponseTypeModalOpen: false,
        unitOfMeasurement: 'None',
        rangeMetadata: {}
      }
    ],
    logics: []
  }
];

export const statusColors = {
  white: '#ffffff',
  black: '#000000',
  overdue: '#F44336',
  inProgress: '#FFCC00',
  open: '#e0e0e0',
  assigned: '#5AC8FA',
  partlyOpen: '#FE9C30',
  submitted: '#2C9E53',
  skipped: '#9E9E9E',
  resolved: '#4CAF50'
};
export const progressStatus = {
  inprogress: 'in-progress',
  success: 'success',
  failed: 'failed'
};
export const responseCount = 1000;

export const raceDynamicForms = 'RDF';
export const operatorRounds = 'OPERATOR_ROUNDS';
export const roundObservations = 'round-observations';
export const defaultProfilePic =
  'data:image/jpeg;base64,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';

export const locationImg = 'assets/master-configurations/locationIcon.svg';
export const assetImg = 'assets/master-configurations/asset-icon.svg';
export const plantImg = 'assets/master-configurations/default-plant.svg';

export const integrationPoints = [
  {
    name: 'Round Submission',
    id: 'round-submission'
  }
];
export const dataEntities = {
  'round-submission': [
    {
      attributeName: 'Round Plan ID',
      attributeId: 'ROUND_PLAN_ID'
    },
    {
      attributeName: 'Round Plan Name',
      attributeId: 'ROUND_PLAN_NAME'
    },
    {
      attributeName: 'Round Plan Description',
      attributeId: 'ROUND_PLAN_DESC'
    },
    {
      attributeName: 'Plant ID',
      attributeId: 'PLANT_ID'
    },
    {
      attributeName: 'Plant Name',
      attributeId: 'PLANT_NAME'
    },
    {
      attributeName: 'Shift Name',
      attributeId: 'SHIFT_NAME'
    },
    {
      attributeName: 'Shift Time',
      attributeId: 'SHIFT_TIME'
    },
    {
      attributeName: 'Frequency',
      attributeId: 'FREQUENCY'
    },
    {
      attributeName: 'Slot',
      attributeId: 'SLOT'
    },
    {
      attributeName: 'Slot Time',
      attributeId: 'SLOT_TIME'
    },
    {
      attributeName: 'Due Date',
      attributeId: 'DUE_DATE'
    },
    {
      attributeName: 'Round ID',
      attributeId: 'ROUND_ID'
    },
    {
      attributeName: 'Task ID',
      attributeId: 'TASK_ID'
    },
    {
      attributeName: 'Task Description',
      attributeId: 'TASK_DESCRIPTION'
    },
    {
      attributeName: 'Location ID',
      attributeId: 'LOCATION_ID'
    },
    {
      attributeName: 'Location Name',
      attributeId: 'LOCATION_NAME'
    },
    {
      attributeName: 'Asset ID',
      attributeId: 'ASSET_ID'
    },
    {
      attributeName: 'Asset Name',
      attributeId: 'ASSET_NAME'
    },
    {
      attributeName: 'Task Value',
      attributeId: 'TASK_VALUE'
    },
    {
      attributeName: 'Task Completed By',
      attributeId: 'TASK_COMPLETED_BY'
    },
    {
      attributeName: 'Task Completed Date',
      attributeId: 'TASK_COMPLETED_DATE'
    },
    {
      attributeName: 'Task Completed Time',
      attributeId: 'TASK_COMPLETED_TIME'
    },
    {
      attributeName: 'Tag Value',
      attributeId: 'TAG_VALUE'
    },
    {
      attributeName: 'Min Value',
      attributeId: 'MIN_VALUE'
    },
    {
      attributeName: 'Max Value',
      attributeId: 'MAX_VALUE'
    },
    {
      attributeName: 'Measurement',
      attributeId: 'UOM'
    },
    {
      attributeName: 'Round Skip Reason',
      attributeId: 'ROUND_SKIP_REASON'
    },
    {
      attributeName: 'Task Skip Reason',
      attributeId: 'TASK_SKIP_REASON'
    },
    {
      attributeName: 'Asset or Location Skip Reason',
      attributeId: 'ASSET_LOC_SKIP_REASON'
    },
    {
      attributeName: 'Round Status',
      attributeId: 'ROUND_STATUS'
    },
    {
      attributeName: 'Submitted By',
      attributeId: 'SUBMITTED_BY'
    },
    {
      attributeName: 'Submitted Date',
      attributeId: 'SUBMITTED_DATE'
    },
    {
      attributeName: 'Submitted Time',
      attributeId: 'SUBMITTED_TIME'
    },
    {
      attributeName: 'Issue ID',
      attributeId: 'ISSUE_ID'
    },
    {
      attributeName: 'Issue Description',
      attributeId: 'ISSUE_DESC'
    },
    {
      attributeName: 'Issue Priority',
      attributeId: 'ISSUE_PRIORITY'
    },
    {
      attributeName: 'Issue Assignee',
      attributeId: 'ISSUE_ASSIGNEE'
    },
    {
      attributeName: 'Issue Status',
      attributeId: 'ISSUE_STATUS'
    },
    {
      attributeName: 'Issue Category',
      attributeId: 'ISSUE_CATEGORY'
    },
    {
      attributeName: 'Issue Due Date',
      attributeId: 'ISSUE_DUE_DATE'
    },
    {
      attributeName: 'Notification Num',
      attributeId: 'NOTIFICATION_NUM'
    },
    {
      attributeName: 'Action ID',
      attributeId: 'ACTION_ID'
    },
    {
      attributeName: 'Action Description',
      attributeId: 'ACTION_DESC'
    },
    {
      attributeName: 'Aciton Priority',
      attributeId: 'ACTION_PRIORITY'
    },
    {
      attributeName: 'Action Assignee',
      attributeId: 'ACTION_ASSIGNEE'
    },
    {
      attributeName: 'Action Status',
      attributeId: 'ACTION_STATUS'
    },
    {
      attributeName: 'Action Due Date',
      attributeId: 'ACTION_DUE_DATE'
    }
  ]
};

export const ftpIntegrationPoint = [
  {
    name: 'Rounds',
    id: 'rounds'
  }
];

export const INTEGRATION_STRATEGY = {
  ODBC: 'odbc',
  SMTP: 'email',
  SAP: 'sap',
  FTP: 'ftp'
};

export const sapIntegrationPoint = [
  {
    name: 'Master Data',
    id: 'masterData',
    active: true
  }
];

export const apiKeyTypes = {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export const ftpDataEntities = {
  rounds: [
    {
      attributeName: 'Round Plan ID',
      attributeId: 'ROUND_PLAN_ID'
    },
    {
      attributeName: 'Round Plan Name',
      attributeId: 'ROUND_PLAN_NAME'
    },
    {
      attributeName: 'Round Plan Description',
      attributeId: 'ROUND_PLAN_DESC'
    },
    {
      attributeName: 'Plant ID',
      attributeId: 'PLANT_ID'
    },
    {
      attributeName: 'Plant Name',
      attributeId: 'PLANT_NAME'
    },
    {
      attributeName: 'Shift Name',
      attributeId: 'SHIFT_NAME'
    },
    {
      attributeName: 'Shift Time',
      attributeId: 'SHIFT_TIME'
    },
    { attributeName: 'Shift Start and End time', attributeId: 'SHIFT_TIME' },

    {
      attributeName: 'Frequency',
      attributeId: 'FREQUENCY'
    },
    {
      attributeName: 'Slot',
      attributeId: 'SLOT'
    },
    {
      attributeName: 'Slot Date and Time',
      attributeId: 'SLOT_TIME'
    },
    {
      attributeName: 'Due Date and Time',
      attributeId: 'DUE_DATE'
    },
    {
      attributeName: 'Round ID',
      attributeId: 'ROUND_ID'
    },
    {
      attributeName: 'Task ID',
      attributeId: 'TASK_ID'
    },
    {
      attributeName: 'Task Description',
      attributeId: 'TASK_DESCRIPTION'
    },
    {
      attributeName: 'Location ID',
      attributeId: 'LOCATION_ID'
    },
    {
      attributeName: 'Location Name',
      attributeId: 'LOCATION_NAME'
    },
    {
      attributeName: 'Asset ID',
      attributeId: 'ASSET_ID'
    },
    {
      attributeName: 'Asset Name',
      attributeId: 'ASSET_NAME'
    },
    {
      attributeName: 'Task Value',
      attributeId: 'TASK_VALUE'
    },
    {
      attributeName: 'Task Completed By',
      attributeId: 'TASK_COMPLETED_BY'
    },
    {
      attributeName: 'Tag Value',
      attributeId: 'TAG_VALUE'
    },
    {
      attributeName: 'Min Value',
      attributeId: 'MIN_VALUE'
    },
    {
      attributeName: 'Max Value',
      attributeId: 'MAX_VALUE'
    },
    {
      attributeName: 'UOM',
      attributeId: 'UOM'
    },
    {
      attributeName: 'Round Skip Reason',
      attributeId: 'ROUND_SKIP_REASON'
    },
    {
      attributeName: 'Task Skip Reason',
      attributeId: 'TASK_SKIP_REASON'
    },
    {
      attributeName: 'Asset/Location Skip Reason',
      attributeId: 'ASSET_LOC_SKIP_REASON'
    },
    {
      attributeName: 'Round Status',
      attributeId: 'ROUND_STATUS'
    },
    {
      attributeName: 'Submitted by',
      attributeId: 'SUBMITTED_BY'
    },
    {
      attributeName: 'Submitted Date',
      attributeId: 'SUBMITTED_DATE'
    },
    {
      attributeName: 'Submitted Time',
      attributeId: 'SUBMITTED_TIME'
    }
  ]
};

export const RepeatEveryOptions = {
  day: 'day',
  week: 'week',
  month: 'month',
  year: 'year'
};

export const colorsByStatus = {
  ASSIGNED: '#32ADE6',
  OPEN: '#E4E4E6',
  OVERDUE: '#F44336',
  SUBMITTED: '#34C759',
  SKIPPED: '#9E9E9E',
  Assigned: '#32ADE6',
  Overdue: '#FF3B30',
  Submitted: '#34C759',
  Skipped: '#9E9E9E',
  'In-Progress': '#FFCC00',
  Open: '#E4E4E6',
  Resolved: '#4CAF50',
  'No Exception': '#76CC6D',
  Exception: '#ED8E4B',
  Completed: '#CDDC39',
  Incomplete: '#FF3B30',
  Created: '#F6685E'
};

export const metadataModuleNames = [
  {
    moduleId: 'RDF',
    moduleName: 'forms'
  },
  {
    moduleId: 'RDF_TEMPLATES',
    moduleName: 'formTemplate'
  }
];

export const metadataFlatModuleNames = {
  RACE_DYNAMIC_FORMS: 'RDF',
  RDF_TEMPLATES: 'RDF_TEMPLATES',
  OPERATOR_ROUNDS: 'OR'
};

export const additionalDetailColumnConfig = {
  id: '',
  displayName: '',
  type: 'string',
  controlType: 'string',
  sortable: true,
  reverseSort: true,
  visible: true,
  groupable: true
};

export const mediaTypes = {
  image: 'image',
  video: 'video',
  audio: 'audio',
  file: 'file'
};

export const fileMimeTypes = {
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pdf: 'application/pdf'
};

export const documentFileTypes = [
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
export const imageFileTypes = ['image/jpeg', 'image/png'];
export const videoFileTypes = ['video/mp4'];
export const audioFileTypes = ['audio/mp3', 'audio/x-m4a'];

export const fileUploadSizeToastMessage = 'Compressed File exceeding 5 MB';
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
export const tenantIdpNamesMap = { azure: 'Azure IDP', ias: 'SAP IDP' ,okta:'OKTA'};
export const tenantIdpKeysMap = { azure: 'azure', ias: 'ias',okta:'okta' };
export const authorizationNamesMap = {
  basic: 'Basic',
  'oauth2.0': 'OAuth 2.0'
};
export const instanceTypes = [
  { type: 'single', value: 'Single Instance' },
  {
    type: 'multiple',
    value: 'Multiple Instances'
  }
];

export const ToastMsg = {
  type: 'warning',
  common: {
    text: 'Something went wrong, please try again later'
  },
  picklistFetch: {
    text: 'Something went wrong while fetching picklists'
  },
  publishForm: {
    text: 'Successfully published authored configurations'
  },
  riskMatrix: {
    created: 'Successfully created risk matrix',
    published: 'Successfully published risk matrix'
  }
};

export const fontMap = {
  'ql-font-Times': 'Times',
  New: 'New',
  Roman: 'Roman',
  'ql-font-Calibri': 'Calibri',
  'ql-font-Roboto': 'Roboto',
  Arial: 'Arial',
  'ql-font-monospace': 'monospace',
  'ql-font-Courier': 'Courier',
  'ql-font-Impact': 'Impact',
  'ql-font-Mirza': 'Mirza',
  'ql-font-Oswald': 'Oswald',
  'ql-font-Verdana': 'Verdana'
};

export const fontFamilyArr: string[] = [
  'monospace',
  'Roboto',
  'Arial',
  'Times New Roman',
  'Oswald',
  'Verdana',
  'Mirza',
  'Calibri',
  'Courier',
  'Impact'
];

export const LanguageCode = {
  Afrikaans: 1,
  "Albanian (Gheg)": 2,
  "Albanian (Tosk)": 3,
  "Arabic (Egyptian)": 4,
  "Arabic (Gulf)": 5,
  "Arabic (Levantine)": 6,
  "Arabic (Maghrebi)": 7,
  "Arabic (Modern Standard)": 8,
  "Azerbaijani (Northern)": 9,
  "Azerbaijani (Southern)": 10,
  Belarusian: 11,
  "Bengali (Bangladeshi)": 12,
  "Bengali (West Bengal)": 13,
  Bokmål: 14,
  "Bulgarian (Eastern)": 15,
  "Bulgarian (Western)": 16,
  "Catalan (Balearic)": 17,
  "Catalan (Central)": 18,
  "Catalan (Valencian)": 19,
  "Chinese Cantonese (Hong Kong)": 20,
  "Chinese Mandarin (Beijing)": 21,
  "Chinese Mandarin (Taiwan)": 22,
  "Czech (Bohemian)": 23,
  "Czech (Moravian)": 24,
  "Danish (Insular)": 25,
  "Danish (Jutlandic)": 26,
  "Dutch (Creoles)": 27,
  "Dutch (Flemish)": 28,
  "Dutch (Standard)": 29,
  "Dutch (Surinamese)": 30,
  "English (Australia)": 31,
  "English (Canada)": 32,
  "English (India)": 33,
  // "English (Modified)": 34,
  "English (New Zealand)": 35,
  "English (UK)": 36,
  "English (US)": 37,
  Esperanto: 38,
  "Estonian (Northern)": 39,
  "Estonian (Southern)": 40,
  "Finnish (Eastern)": 41,
  "Finnish (Western)": 42,
  "French (Acadian)": 43,
  "French (African)": 44,
  "French (Canadian)": 45,
  "French (Metropolitan)": 46,
  Georgian: 47,
  "German (Austria)": 48,
  "German (Bavarian)": 49,
  "German (Hochdeutsch)": 50,
  "German (Low German)": 51,
  "German (Swiss)": 52,
  "Greek (Cypriot)": 53,
  "Greek (Demotic)": 54,
  Gujarati: 55,
  "Haitian Creole": 56,
  "Hebrew (Ashkenazi)": 57,
  "Hebrew (Modern)": 58,
  "Hebrew (Sephardic)": 59,
  Hindi: 60,
  Hungarian: 61,
  Icelandic: 62,
  "Indonesian (Balinese)": 63,
  "Indonesian (Javanese)": 64,
  "Indonesian (Sundanese)": 65,
  "Irish (Connacht)": 66,
  "Irish (Munster)": 67,
  "Irish (Ulster)": 68,
  "Italian (Neapolitan)": 69,
  "Italian (Sicilian)": 70,
  "Italian (Tuscan)": 71,
  "Japanese (Kansai)": 72,
  "Japanese (Kyushu)": 73,
  "Japanese (Standard)": 74,
  "Kazakh (Northern)": 75,
  "Kazakh (Southern)": 76,
  "Korean (Gyeongsang)": 77,
  "Korean (Jeolla)": 78,
  "Korean (Seoul)": 79,
  "Kyrgyz (Northern)": 80,
  "Kyrgyz (Southern)": 81,
  "Latvian (Central)": 82,
  "Latvian (High)": 83,
  "Lithuanian (Aukštaitian)": 84,
  "Lithuanian (Samogitian)": 85,
  "Macedonian (Eastern)": 86,
  "Macedonian (Western)": 87,
  "Malay (Borneo)": 88,
  "Malay (Peninsular)": 89,
  Malayalam: 90,
  Maltese: 91,
  Marathi: 92,
  "Mongolian (Khalkha)": 93,
  "Mongolian (Oirat)": 94,
  "Persian (Dari)": 95,
  "Persian (Farsi)": 96,
  "Persian (Tajik)": 97,
  "Polish (Greater Polish)": 98,
  "Polish (Lesser Polish)": 99,
  "Polish (Silesian)": 100,
  "Portuguese (African)": 101,
  "Portuguese (Brazilian)": 102,
  "Portuguese (European)": 103,
  "Punjabi (India)": 104,
  "Punjabi (Pakistan)": 105,
  "Romanian (Moldavian)": 106,
  "Romanian (Transylvanian)": 107,
  Russian: 108,
  "Serbian (Shtokavian)": 109,
  "Serbian (Torlakian)": 110,
  "Slovak (Central)": 111,
  "Slovak (Eastern)": 112,
  "Slovak (Western)": 113,
  "Slovenian (Littoral)": 114,
  "Slovenian (Styrian)": 115,
  "Spanish (Argentine)": 116,
  "Spanish (Caribbean)": 117,
  "Spanish (Castilian)": 118,
  "Spanish (Mexican)": 119,
  "Swahili (Coastal)": 120,
  "Swahili (Inland)": 121,
  "Swedish (Gotlandic)": 122,
  "Swedish (Scania)": 123,
  "Swedish (Standard)": 124,
  Tagalog: 125,
  Tamil: 126,
  Telugu: 127,
  "Thai (Central)": 128,
  "Thai (Northern)": 129,
  "Thai (Southern)": 130,
  "Turkish (Anatolian)": 131,
  "Turkish (Istanbul)": 132,
  "Ukrainian (Northern)": 133,
  "Ukrainian (Southwestern)": 134,
  Urdu: 135,
  "Uzbek (Northern)": 136,
  "Uzbek (Southern)": 137,
  "Vietnamese (Central)": 138,
  "Vietnamese (Northern)": 139,
  "Vietnamese (Southern)": 140,
  Xhosa: 141,
  "Yiddish (Eastern)": 142,
  "Yiddish (Western)": 143,
  "Yoruba (Central)": 144,
  "Yoruba (Oyo)": 145,
  Zulu: 146,
};
export enum ProductType {
  WEB = 'Web',
  MOBILE = 'Mobile'
}

export enum Product {
  CWP = 'CWP',
  M_ROUNDS = 'mRounds',
  M_WORK_ORDER = 'mWorkOrder',
  M_INSPECTIONS = 'mInspections',
  M_INVENTORY = 'mInventory',
  M_ASSET_TAG = 'mAssetTag'
}

export enum ProductCodes {
  CWP = 'CWP',
  mRounds = 'MRO',
  mWorkOrder = 'MWO',
  mInspections = 'MIINS',
  mInventory = 'MIM',
  mAssetTag = 'MAT'
}
