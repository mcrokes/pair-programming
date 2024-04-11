const getFunction = async () => {
  // Let's make a request
  // https://httpbin.org/json

  // get
  fetch("https://httpbin.org/json")
    .then((response) => {
      if (response.status == 200) {
        console.log(response.json());
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};

// data = JSON.stringify({ name: "John", email: "john@example.com" })
const postFunction = async (data) => {
  // post
  fetch("https://httpbin.org/json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  })
    .then((response) => {
      if (response.status == 200) {
        console.log(response.json());
        return response.data;
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

module.exports = getFunction;
module.exports = postFunction;
