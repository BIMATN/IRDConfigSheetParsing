const fs = require("fs");
const pageNumSort = function (result, filter) {
  //Sort objects by Sat Number
  let res = result;
  res.sort(function(a, b) {
    var satA = a.sat; // create new string w/o "SAT-" and convert to integer
    var satB = b.sat; // create new string w/o "SAT-" and convert to integer
    if (satA < satB) {
      return -1;
    }
    if (satA > satB) {
      return 1;
    }
    // names must be equal
    return 0;
    });
  setTimeout(function(){
    fs.writeFile("../logFiles/jsonSorted.json", JSON.stringify(res, undefined, 2), function(err){
      if(err) throw err
      else{
        console.log("\njsonSorted has been made");
      };
    });
  }, 500);
  setTimeout(function(){filter(res)}, 1000);
};

module.exports = pageNumSort;
