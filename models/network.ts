export interface Request<D = void, H = void> {
  data?: D;
  headers?: H;
}

export interface Response<T> {
  code: number;
  message: string;
  result?: T;
}

export interface Pagination {
  curPage: number;
  totalCnt: number;
}
