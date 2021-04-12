const http = require("http");

const url = process.argv[2];

http.get(url, (data) => {
  data.setEncoding("utf-8");
  data.on("data", console.log);
  data.on("error", console.error);
});
