// Helper function to generate pagination URLs
export const getPaginationUrls = (page: number, limit: number, total: number, baseUrl: string) => {
    const totalPages = Math.ceil(total / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;
  
    return {
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      currentLink: `${baseUrl}?page=${page}&limit=${limit}`,
      nextLink: nextPage ? `${baseUrl}?page=${nextPage}&limit=${limit}` : null,
      previousLink: prevPage ? `${baseUrl}?page=${prevPage}&limit=${limit}` : null,
      last: totalPages ? `${baseUrl}?page=${totalPages}&limit=${limit}` : null,
      totalPages,
    };
  };