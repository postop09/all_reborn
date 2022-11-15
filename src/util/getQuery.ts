const getQuery = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("title");
  return query;
};

export default getQuery;
