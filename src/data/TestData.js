export const getResults = async (query) => [
    {
      url: "www.google.com",
      title: "Google",
      paragraph: "This is Google",
    },
    {
        url: "www.linkedin.com",
        title: "LinkedIn",
        paragraph: "This is LinkedIn",
    }
];

export const getErrors = async (query) => [
  {
    url: "NetworkError",
    title: "Search Query Failed",
    paragraph: "Please try again later",
  }
];
  