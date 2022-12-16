export type TTimeMap = Array<[string, number]>;

export type TGetShortTextArgs = {
  text: string;
  fontSize: string;
  fontFamily: string;
  cardWidth: number;
  requiredRowCount: number;
};

export type TResItem = {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  snippet: string;
};

export type TResData = {
  query: string;
  searchResult: Array<TResItem>;
  commonLength: number;
  page: number;
  limit?: number;
};
