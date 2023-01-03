export const getCategories = async (sendRequest) => {
  const response = await sendRequest(
    "http://localhost:8080/api/home/categories",
    "GET",
    {
      "Access-Control-Allow-Origin": "*",
    }
  );

  return response;
};

export const getCategoriesById = async (sendRequest , id) => {
    const response = await sendRequest(
      `http://localhost:8080/api/home/categories/${id}`,
      "GET",
      {
        "Access-Control-Allow-Origin": "*",
      }
    );
  
    return response;
  };
  
