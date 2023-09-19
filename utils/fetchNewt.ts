type FetchParams = Parameters<typeof fetch>;

export type ListRes<Content = any> = {
  skip: number;
  limit: number;
  total: number;
  items: Content[];
};

export type Image = {
  _id: string;
  src: string;
  width: number;
  height: number;
};

/** newtが必ず含むシステムレスポンス */
export type SystemResponse = {
  _id: string;
  _sys: {
    raw: {
      /** 2022-01-01T00:00:00.000Z */
      createdAt: string;
      /** 2022-01-01T00:00:00.000Z */
      updatedAt: string;
      /** 2022-01-01T00:00:00.000Z */
      firstPublishedAt: string;
      /** 2022-01-01T00:00:00.000Z */
      publishedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

export const fetchNewt = async (
  path: string,
  requestInitr?: FetchParams[1]
) => {
  const res = await fetch(
    `https://testing-remix-v2-newt.cdn.newt.so/v1${path}`,
    {
      headers: {
        Authorization: "Bearer 82gpulOKvzZUEDSJSYR7LBPjYiDqm3J9lBn3Ql9Pd2c",
      },
      ...requestInitr,
    }
  );
  return (await res.json()) as any;
};
