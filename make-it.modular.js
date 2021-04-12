const mymodule = require("./mymodule");

const [dirName, extension] = process.argv.slice(2);

mymodule(dirName, extension, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((item) => console.log(item));
  }
});
