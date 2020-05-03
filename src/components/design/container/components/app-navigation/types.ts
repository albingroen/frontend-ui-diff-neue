export type AppNavigation = AppNavigationList[];

export interface AppNavigationList {
  key: number;
  items: AppNavigationListItem[];
}

export interface AppNavigationListItem {
  value: React.ReactNode | string;
  key: number;
  active: boolean;
  link?: string;
  style?: React.CSSProperties;
}
