export interface IFooterProps {
  lists: IFooterList[];
}

export interface IFooterListItem {
  text: string;
  link?: string;
  href?: string;
}

export interface IFooterList {
  items: IFooterListItem[];
}
