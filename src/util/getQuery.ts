const getQuery = (): string | null => {
  const params = new URLSearchParams(location.search);
  const query = params.get("title");
  return query;
};

export default getQuery;
