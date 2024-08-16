import makeRequest from "~/api/makeRequest.js";

export const getArticles = () => {
  return makeRequest({
    url: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/",
    method: "GET",
  });
};

export const getArticle = (id) => {
  return makeRequest({
    url: `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`,
    method: "GET",
  });
};
