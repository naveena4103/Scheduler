import { LegendConfig } from './chart-config';

export interface ReportDetails {
  report: ReportConfiguration;
  reportData: {
    items: any[];
    skip: number;
  };
}

export interface Report {
  reportDataCount: number;
  data: ReportConfiguration[];
  columns: TableColumn[];
}

export interface GroupByCounts {
  [key: string]: any;
}

export interface ReportConfiguration {
  id?: string;
  name: string;
  groupBy: string[];
  filtersApplied: FilterApplied[];
  filterOptions?: FilterOptions;
  tableDetails: TableDetail[];
  createdBy: string;
  createdTime?: string;
  description: string;
  isFavorite: boolean;
  showChart: boolean;
  chartDetails: ChartDetail;
  plantIds: string[];
}

export interface ChartDetail {
  id?: string;
  title: string;
  type: string;
  indexAxis: 'x' | 'y';
  isStacked: boolean;
  showLegends: boolean;
  showValues: boolean;
  datasetFieldName: string;
  countFieldName: string;
  stackFieldName?: string;
  renderChart?: boolean;
  customColors?: any;
  legendConfigList?: LegendConfig[];
}

export interface TableDetail {
  tableName: string;
  keyColumn: string;
  columns: TableColumn[];
}

export interface FilterOptions {
  daterange: string[];
  multi: any;
  single: any;
  number: string[];
  string: string[];
}

export interface TableColumn {
  displayName: string;
  type: string;
  filterType: any;
  name: string;
  order: number | null;
  sticky: boolean;
  visible: boolean;
  isEmail?: boolean;
  groupBy: boolean;
}

export interface FilterApplied {
  column: string;
  filters: Filter[];
  type: string;
  multiValued?: boolean;
}

export interface Filter {
  operation: string;
  operand: string | number | any[];
}
export interface RowLevelActionEvent {
  action: string;
  data: any;
  subMenu: any;
}

export interface CellClickActionEvent {
  row: any;
  columnId: string;
  element?: string;
  option?: string;
}

export interface Count {
  count: number;
}
