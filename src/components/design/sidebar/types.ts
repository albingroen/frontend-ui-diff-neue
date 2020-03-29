export interface ISideBarItem {
  node: React.ReactNode;
  key: number;
}

export interface ISidebarProps {
  items: ISideBarItem[];
}
