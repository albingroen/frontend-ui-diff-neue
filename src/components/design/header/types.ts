export type Header = IHeaderList[]

export interface IHeaderList {
  key: number;
  items: IHeaderListItem[];
}

export interface IHeaderListItem {
  node: React.ReactNode | string;
  key: number;
}