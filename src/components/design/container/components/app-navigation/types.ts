export type AppNavigation = AppNavigationList[]

export interface AppNavigationList {
  key: number;
  items: AppNavigationListItem[];
}

export interface AppNavigationListItem {
  value: React.ReactNode | string;
  link?: string;
  key: number;
  active: boolean;
}
