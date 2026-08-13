export const searchByKeywords = (
  fuseEngine,
  query,
  resultKey,
  limit = 8
) => {
  const trimmedQuery = query.trim();

  if (trimmedQuery.length < 2) {
    return [];
  }

  const results = fuseEngine.search(trimmedQuery, {
    limit,
  });

  return results
    .map((result) => result.item)
    .filter((item) => item[resultKey]);
};