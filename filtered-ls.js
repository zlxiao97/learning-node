const fs = require("fs");

const path = process.argv[2];
const ext = process.argv[3];

fs.readdir(path, (err, list) => {
  if (err) return;
  const filteredList = list.filter(
    (item) => item.split(".").length !== 1 && item.split(".").pop() === ext
  );
  filteredList.forEach((item) => console.log(item));
});
