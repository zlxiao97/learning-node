const fs = require("fs");

module.exports = function (dirName, extension, cb) {
  fs.readdir(dirName, (err, data) => {
    try {
      if (err) throw err;
      cb(
        null,
        data.filter((name) => {
          if (name.split("").includes(`.`)) {
            const arr = name.split(".");
            return arr[arr.length - 1] === extension;
          }
          return false;
        })
      );
    } catch (e) {
      cb(e);
    }
  });
};
