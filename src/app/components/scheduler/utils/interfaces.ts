export interface Column {
    id: string;
    displayName: string;
    type: string;
    controlType: string;
    controlValue?: any | { buttonName: ''; menuButtonNames: [] };
    order: number;
    originalOrder?: number;
    hasSubtitle?: boolean | false;
    showMenuOptions: boolean;
    subtitleColumn: string;
    isMultiValued?: boolean;
    searchable: boolean;
    sortable: boolean;
    reverseSort?: boolean;
    hideable: boolean;
    visible: boolean;
    movable: boolean;
    stickable: boolean;
    sticky: boolean;
    groupable: boolean;
    operations?: any[];
    titleStyle: any;
    subtitleStyle: any;
    hasPreTextImage: boolean;
    hasPostTextImage: boolean;
    hasConditionalStyles?: boolean;
    preTextImageConfig?: any;
    postTextImageConfig?: any;
    hasBelowElement?: boolean;
    belowElement?: HTMLElement;
    hasRightElement?: boolean;
    rightElement?: HTMLElement;
    hasMatToolTip?:boolean;
  }
  
  export interface ConfigOptions {
    tableWidth?: number | '100%';
    tableHeight?: string | '500px';
    rowsExpandable?: boolean | true;
    enableRowsSelection?: boolean | false;
    enablePagination?: boolean | false;
    pageSizeOptions?: number[] | [10, 25, 50, 75, 100];
    allColumns: Column[] | [];
    displayFilterPanel?: boolean | false;
    displayActionsColumn?: boolean | true;
    enableRowLevelActions?: { condition: Condition | boolean };
    groupByColumns: string[] | [];
    rowLevelActions: rowLevelActions;
    groupLevelColors: string[] | [];
    tableID: string;
    conditionalStyles?: any;
    noDataText?: string;
    defaultSortColumn?: string;
    defaultSortDirection?: 'asc' | 'desc';
  }
  
  interface rowLevelMenuAction {
    icon?: string;
    condition?: Condition;
    title: string;
    action: string;
    type?: string;
    menuValues?: string[];
  }
  
  interface iconAction {
    iconToggleOff: string;
    iconToggleOn: string;
    styleToggleOff: object;
    styleToggleOn: object;
    property: string;
    action: string;
    title: string;
  }
  
  interface rowLevelActions {
    menuActions: rowLevelMenuAction[];
    iconAction?: iconAction;
  }
  
  interface Condition {
    operation: string;
    fieldName: string;
    operand: string;
  }

  export interface CellClickActionEvent {
    row: any;
    columnId: string;
    element?: string;
    option?: string;
    scrollTop?: string;
  }
  export interface TableEvent {
    data: 'infiniteScroll';
  }
  