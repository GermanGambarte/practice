export const getData = () => {
  const url = "https://course-api.com/react-tours-project";
  const options = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Credentials": "true",
  };
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
