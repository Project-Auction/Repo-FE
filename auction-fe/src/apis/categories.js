export const getCategories = async (sendRequest) => {
  const response = await sendRequest({
    url: "http://localhost:8080/api/home/categories",
    method: "GET",
    header: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response;
};

export const getCategoriesById = async (sendRequest, id) => {
  const response = await sendRequest({
    url: `http://localhost:8080/api/home/categories/${id}`,
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response;
};
